# Storyboard Copy Verification

Verification date: 2026-07-29

Source of truth: `C:\Users\jacquesrou\Downloads\ER Abridge Course.docx`  
Corrected source: `src/data/course.js`  
Renderers checked: `src/components/BlockRenderer.astro`, `src/components/RichText.astro`, `src/layouts/CourseLayout.astro`

## Summary

| Check | Result |
|---|---|
| Lessons verified | PASS: Lessons 0-7 |
| Storyboard block order | PASS |
| Verbatim learner-facing block copy | PASS |
| Duplicate shortened/red addendum blocks removed | PASS |
| Visible temporary addendum labels removed | PASS |
| Changed blocks red-highlighted for ID review | PASS |
| Quiz answer logic | PASS |
| Multiple-response answer logic | PASS |
| Matching/sorting answer logic | PASS |
| Feedback and tips | PASS |
| Production build | PASS |

## Lesson 0

| Block | Source file/component | Verbatim-copy result | Interaction logic | Red review |
|---|---|---|---|---|
| Lesson title: Before We Begin: Why This Course Matters | `src/data/course.js` lesson 0 | PASS | N/A | N/A |
| Block 1: Every manager faces difficult decisions | `src/data/course.js`; `BlockRenderer.astro` statement; `RichText.astro` list | PASS | N/A | PASS |
| Block 2: Misconduct can show up in different ways | `src/data/course.js`; `BlockRenderer.astro` cards | PASS | N/A | N/A |
| Block 3: Quote block | `src/data/course.js`; `BlockRenderer.astro` quote | PASS | N/A | PASS |
| Block 4: Why this matters | `src/data/course.js`; `BlockRenderer.astro` text; `RichText.astro` list | PASS | N/A | PASS |
| Block 5: Questions managers often ask | `src/data/course.js`; `BlockRenderer.astro` accordion | PASS | PASS: accordion content | PASS |
| Block 6: Quick reflection | `src/data/course.js`; `BlockRenderer.astro` reflection | PASS | PASS: ungraded reflection options and feedback | PASS |
| Block 7: The decision process you will use | `src/data/course.js`; `BlockRenderer.astro` process | PASS | PASS: process steps | PASS |
| Block 8: This is not a policy memorisation course | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 9: Useful resources | `src/data/course.js`; `BlockRenderer.astro` resources | PASS | PASS: four storyboard resource labels only | PASS |
| Block 10: Continue divider | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |

## Lesson 1

| Block | Source file/component | Verbatim-copy result | Interaction logic | Red review |
|---|---|---|---|---|
| Lesson title: An Incident Has Happened. What Should You Do? | `src/data/course.js` lesson 1 | PASS | N/A | N/A |
| Block 1: Something Doesn't Look Right... | `src/data/course.js`; `BlockRenderer.astro` scenario | PASS | N/A | PASS |
| Block 2: What should you do first? | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: correct answer and feedback | PASS |
| Block 3: Why This Matters | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 4: A Simple Decision Process | `src/data/course.js`; `BlockRenderer.astro` process | PASS | PASS: process steps | PASS |
| Block 5: What could go wrong? | `src/data/course.js`; `BlockRenderer.astro` accordion | PASS | PASS: accordion content | N/A |
| Block 6: Key Takeaway | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Continue divider | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |

## Lesson 2

| Block | Source file/component | Verbatim-copy result | Interaction logic | Red review |
|---|---|---|---|---|
| Lesson title: Has a Rule or Duty Been Breached? | `src/data/course.js` lesson 2 | PASS | N/A | N/A |
| Block 1: Let's return to our situation | `src/data/course.js`; `BlockRenderer.astro` scenario | PASS | N/A | PASS |
| Block 2: Which statement best reflects a fair approach? | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: exact option D, correct answer and feedback | PASS |
| Block 3: Where Do Workplace Expectations Come From? | `src/data/course.js`; `BlockRenderer.astro` text | PASS | N/A | PASS |
| Block 4: Introducing Common Law Duties | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 5: The Six Common Law Duties | `src/data/course.js`; `BlockRenderer.astro` cards | PASS | PASS: flashcard/card content | PASS |
| Block 6: Applying The Duties | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: options, correct answer and feedback | PASS |
| Block 7: Which Duty Fits Best? | `src/data/course.js`; `BlockRenderer.astro` matching | PASS | PASS: answer labels include storyboard punctuation | PASS |
| Block 8: Key Takeaway | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Continue divider | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |

## Lesson 3

| Block | Source file/component | Verbatim-copy result | Interaction logic | Red review |
|---|---|---|---|---|
| Lesson title: Would Discipline Be Fair? | `src/data/course.js` lesson 3 | PASS | N/A | N/A |
| Block 1: Let's Investigate Further | `src/data/course.js`; `BlockRenderer.astro` scenario | PASS | N/A | PASS |
| Block 2: A Breach Does Not Automatically Mean Discipline | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 3: Five Questions Every Manager Should Ask | `src/data/course.js`; `BlockRenderer.astro` process | PASS | PASS: process questions | PASS |
| Block 4: Apply The Questions | `src/data/course.js`; `BlockRenderer.astro` accordion | PASS | PASS: accordion content | PASS |
| Block 5: Check Your Understanding | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: options, correct answer and feedback | PASS |
| Block 6: So What Does "Fair" Mean? | `src/data/course.js`; `BlockRenderer.astro` cards | PASS | PASS: card content | PASS |
| Block 7: The Fairness Test | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 8: Key takeaway | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Continue divider | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |

## Lesson 4

| Block | Source file/component | Verbatim-copy result | Interaction logic | Red review |
|---|---|---|---|---|
| Lesson title: What Action Should Follow? | `src/data/course.js` lesson 4 | PASS | N/A | N/A |
| Block 1: Back to Our Scenario | `src/data/course.js`; `BlockRenderer.astro` scenario | PASS | N/A | PASS |
| Block 2: Why Do We Discipline Employees? | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: options, correct answer and feedback | PASS |
| Block 3: Discipline Is About Behaviour Change | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 4: Understanding Progressive Discipline | `src/data/course.js`; `BlockRenderer.astro` process | PASS | PASS: process steps | PASS |
| Block 5: Would Every Situation Lead to the Same Outcome? | `src/data/course.js`; `BlockRenderer.astro` scenarioReflection | PASS | PASS: scenario activity copy and feedback | PASS |
| Block 6: The Purpose of Warnings | `src/data/course.js`; `BlockRenderer.astro` text | PASS | N/A | PASS |
| Block 7: Types of Warnings | `src/data/course.js`; `BlockRenderer.astro` accordion | PASS | PASS: accordion content | PASS |
| Block 8: Warnings Only Work When They Are Done Properly | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 9: Key takeaway | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Continue divider | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |

## Lesson 5

| Block | Source file/component | Verbatim-copy result | Interaction logic | Red review |
|---|---|---|---|---|
| Lesson title: Can I Handle This, or Should I Contact the Fuse? | `src/data/course.js` lesson 5 | PASS | N/A | N/A |
| Block 1: Time To Decide | `src/data/course.js`; `BlockRenderer.astro` scenario | PASS | N/A | PASS |
| Block 2: You Don't Need To Solve Everything Alone | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 3: Choosing The Correct Path | `src/data/course.js`; `BlockRenderer.astro` process | PASS | PASS: process pathways | PASS |
| Block 4: Which Path Would You Follow? | `src/data/course.js`; `BlockRenderer.astro` matching | PASS | PASS: scenarios and pathway answers | PASS |
| Block 5: When Should You Contact the Fuse? | `src/data/course.js`; `BlockRenderer.astro` accordion | PASS | PASS: accordion content | PASS |
| Block 6: Apply What You've Learnt | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: options, correct answer and feedback | PASS |
| Block 7: Your Escalation Checklist | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 8: Key takeaway | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Continue divider | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |

## Lesson 6

| Block | Source file/component | Verbatim-copy result | Interaction logic | Red review |
|---|---|---|---|---|
| Lesson title: Manager Challenge | `src/data/course.js` lesson 6 | PASS | N/A | N/A |
| Block 1: Your Manager Challenge | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 2: Medical Certificate Concern | `src/data/course.js`; `BlockRenderer.astro` scenario | PASS | N/A | PASS |
| Block 3: Decision 1 | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: options, correct answer, feedback and tip | PASS |
| Block 4: Decision 2 | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: options, correct answer, feedback and tip | PASS |
| Block 5: Decision 3 | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: multiple-response correct answers, feedback and tip | PASS |
| Block 6: Decision 4 | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: normal required quiz with exact question, options, correct answer, feedback and tip | PASS |
| Block 7: Decision 5 | `src/data/course.js`; `BlockRenderer.astro` quiz | PASS | PASS: options, correct answer, feedback and tip | PASS |
| Block 8: How a Good Manager Approached the Situation | `src/data/course.js`; `BlockRenderer.astro` process | PASS | PASS: debrief process steps | PASS |
| Block 9: What Did You Notice? | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 9 reflection prompt | `src/data/course.js`; `BlockRenderer.astro` reflectionText | PASS | PASS: text entry reflection | PASS |
| Continue divider | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |

## Lesson 7

| Block | Source file/component | Verbatim-copy result | Interaction logic | Red review |
|---|---|---|---|---|
| Lesson title: Your ER Decision Checklist | `src/data/course.js` lesson 7 | PASS | N/A | N/A |
| Block 1: One Question To Remember | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 2: Your ER Decision Process | `src/data/course.js`; `BlockRenderer.astro` process | PASS | PASS: process steps | PASS |
| Block 2 Remember section | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 3: What Will You Do Differently? | `src/data/course.js`; `BlockRenderer.astro` reflectionText | PASS | PASS: text entry reflection and learner note | PASS |
| Block 4: What Good Managers Do | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 5: Quick Reference Guide | `src/data/course.js`; `BlockRenderer.astro` download | PASS | PASS: download link retained as UI control | PASS |
| Block 6: Final Thought | `src/data/course.js`; `BlockRenderer.astro` statement | PASS | N/A | PASS |
| Block 7: Congratulations and confidence question | `src/data/course.js`; `BlockRenderer.astro` reflection | PASS | PASS: confidence options | PASS |

## Interaction Configuration

| Area | Result |
|---|---|
| Single-choice quizzes | PASS: all correct answer arrays match storyboard option text |
| Multiple-response quiz | PASS: Lesson 6 Decision 3 includes only the five storyboard correct answers |
| Matching activities | PASS: Lesson 2 and Lesson 5 scenarios and answers match storyboard wording |
| Feedback | PASS: quiz feedback arrays contain exact storyboard feedback in order |
| Tips | PASS: Lesson 6 Decision 1-5 tips are present in order |
| Reflection prompts | PASS |
| Learner note | PASS: Lesson 7 text-entry learner note present |
| Accordion content | PASS |
| Card content | PASS |

## Forbidden-Label Search

| Target | Result |
|---|---|
| `src` | PASS: no forbidden temporary review labels found |
| `dist` after production build | PASS: no forbidden temporary review labels found |

## Build And Tests

| Command | Result |
|---|---|
| `npm.cmd run build` | PASS |

No separate automated test suite was found in `package.json`; production build was used as the project verification command.

## Final Status

READY FOR VERBATIM CORRECTION REVIEW
