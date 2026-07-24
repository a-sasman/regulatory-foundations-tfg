import fs from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
const path = 'C:/Users/AbduraoafS/Downloads/TFG Corporate Identity - April 2024.pdf';
const data = new Uint8Array(fs.readFileSync(path));
const doc = await pdfjsLib.getDocument({data}).promise;
console.log('pages', doc.numPages);
for (let p=1; p<=doc.numPages; p++) {
  const page = await doc.getPage(p);
  const txt = await page.getTextContent();
  const s = txt.items.map(i=>i.str).join(' ');
  if (/tertiary|colour|color|RGB|CMYK|Pantone|secondary/i.test(s)) {
    console.log('\n--- PAGE '+p+' ---');
    console.log(s.slice(0,3000));
  }
}
