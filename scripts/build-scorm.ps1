$ErrorActionPreference = 'Stop'

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Split-Path -Parent $scriptRoot
$distPath = Join-Path $projectRoot 'dist'
$stagingPath = Join-Path $projectRoot 'scorm-package'
$zipPath = Join-Path $projectRoot 'ER-Abridge-SCORM-1.2.zip'
$manifestPath = Join-Path $projectRoot 'scorm\imsmanifest.xml'

if (-not (Test-Path -LiteralPath (Join-Path $distPath 'index.html'))) {
  throw 'Production build not found. Run npm run build before packaging.'
}

foreach ($target in @($stagingPath, $zipPath)) {
  $fullTarget = [System.IO.Path]::GetFullPath($target)
  if (-not $fullTarget.StartsWith($projectRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to modify a path outside the project: $fullTarget"
  }
}

if (Test-Path -LiteralPath $stagingPath) {
  Remove-Item -LiteralPath $stagingPath -Recurse -Force
}
if (Test-Path -LiteralPath $zipPath) {
  Remove-Item -LiteralPath $zipPath -Force
}

New-Item -ItemType Directory -Path $stagingPath | Out-Null
Copy-Item -Path (Join-Path $distPath '*') -Destination $stagingPath -Recurse -Force
Copy-Item -LiteralPath $manifestPath -Destination (Join-Path $stagingPath 'imsmanifest.xml') -Force

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
Get-ChildItem -LiteralPath $stagingPath -Filter '*.html' -Recurse | ForEach-Object {
  $relativePath = $_.FullName.Substring($stagingPath.Length).TrimStart('\', '/')
  $directory = [System.IO.Path]::GetDirectoryName($relativePath)
  $depth = if ([string]::IsNullOrEmpty($directory)) { 0 } else { ($directory -split '\\').Count }
  $prefix = '../' * $depth
  $html = [System.IO.File]::ReadAllText($_.FullName)
  $html = [regex]::Replace($html, '\bhref=(["''])/lessons/(?<lesson>[^"''?#]+)\1', {
    param($match)
    $quote = $match.Groups[1].Value
    $lesson = $match.Groups['lesson'].Value
    return "href=$quote$($prefix)lessons/$lesson/index.html$quote"
  })
  $html = [regex]::Replace($html, '\bhref=(["''])/\1', {
    param($match)
    $quote = $match.Groups[1].Value
    return "href=$quote$($prefix)index.html$quote"
  })
  $html = [regex]::Replace($html, '(?<attribute>\b(?:href|src)=(["'']))/', "`${attribute}$prefix")
  [System.IO.File]::WriteAllText($_.FullName, $html, $utf8NoBom)
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipStream = [System.IO.File]::Open($zipPath, [System.IO.FileMode]::CreateNew)
$archive = New-Object System.IO.Compression.ZipArchive($zipStream, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  Get-ChildItem -LiteralPath $stagingPath -File -Recurse | ForEach-Object {
    $entryName = $_.FullName.Substring($stagingPath.Length).TrimStart('\', '/').Replace('\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
      $archive,
      $_.FullName,
      $entryName,
      [System.IO.Compression.CompressionLevel]::Optimal
    ) | Out-Null
  }
} finally {
  $archive.Dispose()
  $zipStream.Dispose()
}
Write-Output $zipPath
