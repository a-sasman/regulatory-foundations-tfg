# Storyboard Copy Audit

Audit date: 2026-07-29  
Live reference checked: `https://tfg-course-erabridge.netlify.app/` returned HTTP 200.  
Source of truth located: `C:\Users\jacquesrou\Downloads\ER Abridge Course.docx`  
Course source inspected: `src/data/course.js`, `src/components/BlockRenderer.astro`, `src/layouts/CourseLayout.astro`, `src/pages/index.astro`, `src/pages/lessons/[id].astro`

This is analysis only. No `.astro`, `.js`, `.json`, `.css` or other course source file was edited during this audit.

## 1. Executive Summary

Totals below count learner-facing storyboard locations: lesson titles plus storyboard blocks, continue dividers and completion/confidence copy.

| Metric | Count |
|---|---:|
| Storyboard locations audited | 79 |
| Exact passes | 10 |
| Missing blocks or locations | 1 |
| Partial blocks | 36 |
| Altered or paraphrased blocks | 30 |
| Duplicated blocks | 42 |
| Extra/invented course-copy blocks | 58 visible `Storyboard addition:` labels plus homepage/course overview copy |
| Logic mismatches | 3 |

Overall finding: the current Astro course is not copy-faithful to the Word storyboard. The major pattern is that earlier shortened course copy remains visible and is followed by red `Storyboard addition:` blocks. These red blocks sometimes contain part of the storyboard wording, but the visible `Storyboard addition:` headings are invented course copy, and the original shortened blocks remain as competing duplicate versions.

The correction pass should replace each lesson's block data with one verbatim storyboard version per block. It should not keep the original shortened copy plus a red addendum.

## 2. Findings By Lesson

### Lesson 0: Before We Begin: Why This Course Matters

#### Lesson title
- Status: PASS
- Storyboard wording: `Before We Begin: Why This Course Matters`
- Current course wording: `Before We Begin: Why This Course Matters`
- Astro location: `src/data/course.js`, lesson object around line 22
- Required correction: none
- Red review after correction: No

#### Block 1: Statement Block
- Status: PARTIAL / ALTERED
- Storyboard wording:
```text
Every manager faces difficult decisions
Sooner or later, every manager encounters a situation where they need to respond to workplace conduct.
It may involve:
A workplace rule being broken
A complaint being raised
Inappropriate behaviour
A concern about honesty or trust
A team member challenging a decision
Suspected misconduct
When these situations happen, managers are expected to respond fairly, confidently and consistently.
But knowing what to do is not always straightforward.
```
- Current course wording:
```text
Manager capability
Every manager faces difficult decisions
Sooner or later, every manager encounters a situation where they need to respond to workplace conduct.
It may involve a workplace rule being broken, a complaint being raised, inappropriate behaviour, honesty concerns, a challenge to a decision or suspected misconduct.
When these situations happen, managers are expected to respond fairly, confidently and consistently.
```
- Astro location: `src/data/course.js` line 25
- Required correction: remove invented eyebrow `Manager capability`; restore the bullet/list structure and exact wording, including `A concern about honesty or trust`, `A team member challenging a decision`, and `But knowing what to do is not always straightforward.`
- Red review after correction: Yes, if the next pass is still being reviewed by the ID

#### Block 2: Image / Icon Row Block
- Status: PASS
- Storyboard wording:
```text
Misconduct can show up in different ways
Workplace behaviour
An employee behaves in a way that does not meet expected standards.
Attendance or timekeeping
An employee does not follow working time, attendance or reporting expectations.
Honesty or trust
Information, records or conduct raises concerns about honesty.
Respect and conduct
A workplace interaction, comment or action creates concern.
```
- Current course wording: same wording in four cards
- Astro location: `src/data/course.js` line 26
- Required correction: none
- Red review after correction: No

#### Block 3: Quote Block
- Status: ALTERED
- Storyboard wording:
```text
Employee Relations is not only an HR responsibility.
It is a manager capability.
Managers play an important role in maintaining workplace standards, identifying possible misconduct and taking appropriate action. This includes understanding workplace rules, making sure employees are aware of expectations, investigating incidents and taking appropriate disciplinary action where required.
```
- Current course wording:
```text
Manager mindset
Employee Relations is not only an HR responsibility. It is a manager capability.
Managers play an important role in maintaining workplace standards, identifying possible misconduct and taking appropriate action.
```
- Astro location: `src/data/course.js` line 27; `src/components/BlockRenderer.astro` quote renderer around lines 20-30
- Required correction: preserve the line break or separate paragraph between the two quote sentences; restore the missing second sentence beginning `This includes understanding workplace rules...`; consider whether renderer label `Manager mindset` is legitimate UI or should be removed for storyboard fidelity.
- Red review after correction: Yes

#### Block 4: Text Block
- Status: PARTIAL / ALTERED
- Storyboard wording:
```text
Why this matters
The decisions managers make during workplace conduct matters can affect:
Employees
Teams
Workplace culture
Business performance
Trust in leadership
Responding too quickly can lead to unfair outcomes.
Responding too slowly can allow problems to continue.
The goal is to make informed and fair decisions.
Discipline is not about punishment. It is about correcting behaviour, maintaining standards and applying workplace rules consistently.
```
- Current course wording:
```text
Why this matters
The decisions managers make during workplace conduct matters can affect employees, teams, culture, business performance and trust in leadership.
Responding too quickly can lead to unfair outcomes. Responding too slowly can allow problems to continue.
Discipline is not about punishment. It is about correcting behaviour, maintaining standards and applying workplace rules consistently.
```
- Astro location: `src/data/course.js` line 28
- Required correction: restore list items exactly, `Workplace culture` rather than `culture`, separate the response sentences, and add `The goal is to make informed and fair decisions.`
- Red review after correction: Yes

#### Block 5: Accordion Block
- Status: PARTIAL / ALTERED
- Storyboard wording:
```text
Questions managers often ask
Has a rule actually been broken?
Before taking action, managers need to understand what happened and whether a workplace rule, policy or expected standard may have been breached.
What information do I need?
Managers should gather enough information to understand the situation before deciding what action may be appropriate. This means investigating what happened, gathering facts and assessing evidence before responding to an incident.
Would discipline be fair?
Fairness matters. Managers need to consider both the process followed and the reason for taking disciplinary action.
Should I issue a warning?
Warnings are used to address misconduct and help employees correct behaviour. They formally record the concern and support corrective action.
When should I involve the Fuse?
Managers need to know when they can act and when they must escalate. Line managers may issue verbal and written warnings without consulting the Fuse, but tickets should be logged when a final written warning may be required, dismissal is possible, a shop steward is involved, or the manager is uncertain.
```
- Current course wording:
```text
Questions managers often ask
Has a rule actually been broken?
Before taking action, managers need to understand what happened and whether a workplace rule, policy or expected standard may have been breached.
What information do I need?
Managers should gather enough information to understand the situation before deciding what action may be appropriate.
Would discipline be fair?
Managers need to consider both the process followed and the reason for taking disciplinary action.
Should I issue a warning?
Warnings formally record the concern and support corrective action.
When should I involve the Fuse?
Escalate when a final written warning may be required, dismissal is possible, a shop steward is involved, or you are uncertain.
```
- Astro location: `src/data/course.js` line 29
- Required correction: restore all missing explanatory sentences and exact wording, especially the Fuse item.
- Red review after correction: Yes

#### Block 6: Knowledge Check / Reflection
- Status: ALTERED
- Storyboard wording:
```text
Quick reflection
Which of these questions have you faced, or could imagine facing, as a manager?
Has a rule been broken?
What action should I take?
Is a warning appropriate?
Should I escalate this matter?
Am I being fair?
I have not always been sure what to do
There are no right or wrong answers here.
This course is designed to help you work through these questions using a simple decision-making process.
```
- Current course wording:
```text
Quick reflection
Which of these questions have you faced, or could imagine facing, as a manager?
Has a rule been broken?
What action should I take?
Is a warning appropriate?
Should I escalate this matter?
Am I being fair?
I have not always been sure what to do
There are no right or wrong answers here. This course helps you work through these questions using a simple decision-making process.
```
- Astro location: `src/data/course.js` line 30
- Required correction: feedback must be two sentences and use `is designed to help`, not `helps`.
- Red review after correction: Yes

#### Block 7: Process Block
- Status: PARTIAL / ALTERED
- Storyboard wording:
```text
The decision process you will use
In this course, you will use a simple manager decision process.
This process will help you respond when misconduct may have occurred.
Understand what happened
Gather the facts before deciding what action to take.
Identify the rule or duty
Check whether a workplace rule, policy, Code of Ethical Conduct principle or common law duty may have been breached.
Check fairness
Consider whether the process and reason for possible discipline would be fair.
Decide the appropriate response
Determine whether the matter may require a corrective conversation, warning, disciplinary discussion or escalation.
Escalate when required
Contact the Fuse when the matter may require specialist support, when dismissal is possible, when a final written warning may be required, when a shop steward is involved, or when you are unsure.
```
- Current course wording:
```text
The decision process you will use
Use this process when misconduct may have occurred.
Understand what happened
Gather the facts before deciding what action to take.
Identify the rule or duty
Check whether a workplace rule, policy, Code of Ethical Conduct principle or common law duty may have been breached.
Check fairness
Consider whether the process and reason for possible discipline would be fair.
Decide the appropriate response
Determine whether a corrective conversation, warning, disciplinary discussion or escalation is required.
Escalate when required
Contact the Fuse when specialist support may be needed.
```
- Astro location: `src/data/course.js` line 31
- Required correction: restore the two intro sentences and exact step 4 and step 5 descriptions.
- Red review after correction: Yes

#### Block 8: Statement Block
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
This is not a policy memorisation course
This course will not ask you to memorise every ER term, policy clause or process step.
Instead, it will help you answer one practical question:
An employee may have broken a rule. What should I do next?
Everything in this course is designed to help you answer that question fairly, confidently and consistently.
```
- Current course wording:
```text
Storyboard addition: This is not a policy memorisation course
This course will not ask you to memorise every ER term, policy clause or process step.
Instead, it will help you answer one practical question: An employee may have broken a rule. What should I do next?
Everything in this course is designed to help you answer that question fairly, confidently and consistently.
```
- Astro location: `src/data/course.js` line 32
- Required correction: remove visible `Storyboard addition:`; preserve the storyboard heading and separate the practical question line from the preceding sentence.
- Red review after correction: Yes

#### Block 9: Resource Links Placeholder
- Status: DUPLICATED / EXTRA
- Storyboard wording:
```text
Useful resources
You may need to refer to supporting resources as part of your role.
Use the resources below when needed:
Employee Relations Glossary
TFG Disciplinary Policy
Code of Ethical Conduct
Fuse support process
```
- Current course wording:
```text
Storyboard addition: Resource guidance
You may need to refer to supporting resources as part of your role.
Use the resources below when needed: Employee Relations Glossary, TFG Disciplinary Policy, Code of Ethical Conduct and Fuse support process.
Useful resources
Employee Relations Glossary
TFG Disciplinary Policy
Code of Ethical Conduct
Fuse support process
ER Decision Checklist
```
- Astro location: `src/data/course.js` lines 3-9 and 33-34
- Required correction: remove visible `Storyboard addition:`; restore the intro copy under `Useful resources`; remove `ER Decision Checklist` from Lesson 0 resources unless approved outside storyboard.
- Red review after correction: Yes

#### Block 10: Continue Divider
- Status: DUPLICATED / ALTERED
- Storyboard wording: `Continue when you are ready to begin with a real manager situation.`
- Current course wording:
```text
Storyboard addition: Continue divider
Continue when you are ready to begin with a real manager situation.
```
- Astro location: `src/data/course.js` line 35
- Required correction: remove visible `Storyboard addition: Continue divider`.
- Red review after correction: Yes

### Lesson 1: An Incident Has Happened. What Should You Do?

#### Lesson title
- Status: PASS
- Storyboard wording: `An Incident Has Happened. What Should You Do?`
- Current course wording: `An Incident Has Happened. What Should You Do?`
- Astro location: `src/data/course.js` line 41
- Required correction: none
- Red review after correction: No

#### Block 1: Scenario Introduction
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
Something Doesn't Look Right...
You manage a team.
One morning, a colleague sends you a screenshot of a social media post made by one of your employees.
The post contains negative comments about the company and its leadership.
The employee's profile is visible, and several colleagues have already seen the post.
Your manager contacts you and says:
"This is unacceptable. Can we issue a warning immediately?"
What would you do?
```
- Current course wording:
```text
Something Doesn't Look Right...
You manage a team. One morning, a colleague sends you a screenshot of a social media post made by one of your employees.
The post contains negative comments about the company and its leadership. Several colleagues have already seen it.
Your manager says: "This is unacceptable. Can we issue a warning immediately?"
Storyboard addition: Scenario detail
The employee's profile is visible, and several colleagues have already seen the post.
Your manager contacts you and says: "This is unacceptable. Can we issue a warning immediately?"
What would you do?
```
- Astro location: `src/data/course.js` lines 44-45
- Required correction: combine into one scenario block using exact storyboard paragraphs; remove the red duplicate block and the `Storyboard addition:` heading.
- Red review after correction: Yes

#### Block 2: Knowledge Check
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
What should you do first?
Issue a warning immediately.
Contact the Fuse immediately.
Gather the facts before deciding what action may be appropriate.
Accept the employee's explanation and take no further action.
Correct Answer: Gather the facts before deciding what action may be appropriate.
Feedback:
Before deciding what action to take, managers need to understand what happened.
Questions such as the following need to be explored:
Is the information accurate?
What exactly was posted?
Is there enough information available?
Has the employee been given an opportunity to explain?
Good managers do not jump straight to discipline.
Good managers gather facts before making decisions.
```
- Current course wording:
```text
What should you do first?
Issue a warning immediately.
Contact the Fuse immediately.
Gather the facts before deciding what action may be appropriate.
Accept the employee's explanation and take no further action.
Correct: Gather the facts before deciding what action may be appropriate.
Feedback: Good managers do not jump straight to discipline. They check accuracy, context, available information and whether the employee has had an opportunity to explain.
Storyboard addition: Knowledge check feedback detail
Before deciding what action to take, managers need to understand what happened.
Questions such as the following need to be explored: Is the information accurate? What exactly was posted? Is there enough information available? Has the employee been given an opportunity to explain?
Good managers do not jump straight to discipline. Good managers gather facts before making decisions.
```
- Astro location: `src/data/course.js` lines 46-47
- Required correction: keep one quiz; replace feedback with the exact storyboard feedback as separate lines/sentences; remove red addendum block.
- Red review after correction: Yes

#### Block 3: Statement Block
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
Why This Matters
When misconduct is suspected, managers often feel pressure to act quickly.
However, acting too quickly can result in unfair decisions.
Acting too slowly can allow problems to continue.
The goal is not to react.
The goal is to make an informed and fair decision.
```
- Current course wording:
```text
Why This Matters
When misconduct is suspected, managers often feel pressure to act quickly.
The goal is not to react. The goal is to make an informed and fair decision.
Storyboard addition: Why this matters detail
Acting too quickly can result in unfair decisions.
Acting too slowly can allow problems to continue.
```
- Astro location: `src/data/course.js` lines 48-49
- Required correction: restore `However,` and exact sentence order in one block; remove addendum heading.
- Red review after correction: Yes

#### Block 4: Process Block
- Status: PARTIAL / ALTERED
- Storyboard wording:
```text
A Simple Decision Process
Throughout this course, you will use a practical decision process to help guide your thinking.
Understand what happened
Gather facts before deciding what action to take.
Identify the rule or duty
Determine which workplace expectation may be involved.
Check fairness
Ensure the decision is fair and reasonable.
Decide the response
Determine the most appropriate action.
Escalate when required
Know when support from the Fuse is needed.
```
- Current course wording: same step titles and descriptions, but the intro copy is absent.
- Astro location: `src/data/course.js` line 50
- Required correction: add exact intro copy to the process block.
- Red review after correction: Yes

#### Block 5: Interactive Reflection / Accordion
- Status: PASS
- Storyboard wording:
```text
What could go wrong?
Jumping straight to discipline
Making assumptions without gathering information can lead to unfair outcomes.
Ignoring the issue
Failing to act can allow inappropriate behaviour to continue.
Not following a process
Inconsistent decisions can undermine trust and fairness.
```
- Current course wording: same accordion title, item titles and item copy.
- Astro location: `src/data/course.js` line 51
- Required correction: none
- Red review after correction: No

#### Block 6: Statement Block / Key Takeaway
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
Key Takeaway
When something doesn't look right:
Don't jump straight to discipline.
Gather the facts.
Follow a process.
Make informed decisions.
The rest of this course will help you apply that thinking to real workplace situations.
```
- Current course wording:
```text
Storyboard addition: Key Takeaway
When something doesn't look right: don't jump straight to discipline.
Gather the facts. Follow a process. Make informed decisions.
The rest of this course will help you apply that thinking to real workplace situations.
```
- Astro location: `src/data/course.js` line 52
- Required correction: remove `Storyboard addition:` and restore exact line/sentence structure and capitalisation after the colon.
- Red review after correction: Yes

#### Continue Divider
- Status: DUPLICATED / ALTERED
- Storyboard wording: `Now that you understand the importance of gathering facts first, let's explore how managers identify whether a workplace rule or duty may have been breached.`
- Current course wording:
```text
Storyboard addition: Continue divider
Now that you understand the importance of gathering facts first, let's explore how managers identify whether a workplace rule or duty may have been breached.
```
- Astro location: `src/data/course.js` line 53
- Required correction: remove visible addendum heading.
- Red review after correction: Yes

### Lesson 2: Has a Rule or Duty Been Breached?

#### Lesson title
- Status: PASS
- Storyboard wording: `Has a Rule or Duty Been Breached?`
- Current course wording: `Has a Rule or Duty Been Breached?`
- Astro location: `src/data/course.js` line 59
- Required correction: none
- Red review after correction: No

#### Block 1: Scenario Recap
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
Let's return to our situation
Earlier, you were informed that an employee had posted negative comments about the company on social media.
Before deciding what action may be appropriate, ask yourself:
Has a workplace expectation actually been breached?
Managers should avoid relying on personal opinion.
Instead, they should consider workplace rules, standards and expectations.
```
- Current course wording:
```text
Let's return to our situation
Before deciding what action may be appropriate, ask yourself: Has a workplace expectation actually been breached?
Managers should avoid relying on personal opinion and consider workplace rules, standards and expectations.
Storyboard addition: Scenario recap detail
Earlier, you were informed that an employee had posted negative comments about the company on social media.
Managers should avoid relying on personal opinion. Instead, they should consider workplace rules, standards and expectations.
```
- Astro location: `src/data/course.js` lines 62-63
- Required correction: one scenario block only; exact storyboard order and punctuation; remove duplicate addendum heading.
- Red review after correction: Yes

#### Block 2: Reflection Interaction / Knowledge Check
- Status: ALTERED / LOGIC MISMATCH
- Storyboard wording:
```text
Which statement best reflects a fair approach?
If I disagree with the post, discipline should follow.
If somebody complains, discipline is required.
I need to determine whether a workplace rule, standard or duty may have been breached.
All negative comments about the company automatically result in discipline.
Correct Answer: Option C
Feedback:
A manager's role is not to make assumptions.
The first step is to determine whether a workplace expectation may have been breached and gather the facts required to understand the situation.
```
- Current course wording:
```text
Which statement best reflects a fair approach?
If I disagree with the post, discipline should follow.
If somebody complains, discipline is required.
I need to determine whether a workplace rule, standard or duty may have been breached.
All negative comments automatically result in discipline.
Correct: I need to determine whether a workplace rule, standard or duty may have been breached.
Feedback: The first step is to determine whether a workplace expectation may have been breached and gather the facts required to understand the situation.
```
- Astro location: `src/data/course.js` line 64
- Required correction: option D must be `All negative comments about the company automatically result in discipline.`; restore feedback sentence `A manager's role is not to make assumptions.` Correct-answer logic is semantically correct but option text mismatch makes it a logic-content mismatch.
- Red review after correction: Yes

#### Block 3: Text & Graphic
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
Where Do Workplace Expectations Come From?
Workplace expectations are not based on personal preferences.
They are typically drawn from:
Workplace policies
The Code of Ethical Conduct
Workplace procedures
Established standards of behaviour
Common Law Duties
These help managers apply expectations consistently and fairly.
```
- Current course wording:
```text
Storyboard addition: Where Do Workplace Expectations Come From?
Workplace expectations are not based on personal preferences.
They are typically drawn from workplace policies, the Code of Ethical Conduct, workplace procedures, established standards of behaviour and Common Law Duties.
These help managers apply expectations consistently and fairly.
```
- Astro location: `src/data/course.js` line 65
- Required correction: remove `Storyboard addition:` and restore the list structure.
- Red review after correction: Yes

#### Block 4: Statement Block
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
Introducing Common Law Duties
Common Law Duties are workplace responsibilities that automatically apply when somebody becomes an employee.
They do not need to be written into a contract to exist.
Many workplace conduct matters can be linked back to one or more of these duties.
```
- Current course wording:
```text
Storyboard addition: Introducing Common Law Duties
Common Law Duties are workplace responsibilities that automatically apply when somebody becomes an employee.
They do not need to be written into a contract to exist.
Many workplace conduct matters can be linked back to one or more of these duties.
```
- Astro location: `src/data/course.js` line 66
- Required correction: remove visible `Storyboard addition:`.
- Red review after correction: Yes

#### Block 5: Interactive Cards / Flashcards Grid
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
The Six Common Law Duties
Provide a Service
Employees are expected to attend work and perform their duties during working hours. Examples include unauthorised absence, sleeping on duty and failing to provide the agreed service.
Be Respectful
Employees are expected to follow reasonable instructions and treat others respectfully. Examples include refusing instructions, swearing and assault.
Be Honest
Employees are expected to act honestly and with integrity. Examples include making false statements, tampering with documents and unauthorised removal of company property.
Be Diligent
Employees are expected to work carefully and follow required processes. Examples include negligence, mistakes and process failures.
Demonstrate Acceptable Conduct
Employees are expected to follow workplace rules, values and behavioural expectations. Examples include being under the influence of alcohol at work or bringing dangerous weapons into the workplace.
Act in Good Faith
Employees are expected to act in the best interests of their employer. Examples include conflicts of interest, undeclared gifts and negative social media comments that may impact the organisation's reputation.
```
- Current course wording: original card block contains shortened duty descriptions; red review card block contains only the examples and visible title `Storyboard addition: Common Law Duty examples`.
- Astro location: `src/data/course.js` lines 67-68
- Required correction: replace both card blocks with one flashcard/card block where each card contains the complete storyboard sentence plus examples.
- Red review after correction: Yes

#### Block 6: Guided Application
- Status: PARTIAL / DUPLICATED
- Storyboard wording:
```text
Applying The Duties
Let's return to our social media scenario.
An employee has posted negative comments about the company on social media.
Which Common Law Duty may be most relevant?
Provide a Service
Be Respectful
Be Honest
Be Diligent
Demonstrate Acceptable Conduct
Act in Good Faith
Correct Answer: Act in Good Faith
Feedback:
Employees have a responsibility to act in the best interests of their employer and avoid conduct that may negatively affect the organisation's reputation.
This does not automatically mean misconduct has occurred.
It simply helps us identify which duty may need further investigation.
```
- Current course wording:
```text
Which Common Law Duty may be most relevant to negative social media comments?
Provide a Service
Be Respectful
Be Honest
Be Diligent
Demonstrate Acceptable Conduct
Act in Good Faith
Correct: Act in Good Faith
Feedback: This does not automatically mean misconduct has occurred. It helps identify which duty may need further investigation.
Storyboard addition: Guided application feedback detail
Employees have a responsibility to act in the best interests of their employer and avoid conduct that may negatively affect the organisation's reputation.
This does not automatically mean misconduct has occurred. It simply helps us identify which duty may need further investigation.
```
- Astro location: `src/data/course.js` lines 69-70
- Required correction: add exact heading and scenario copy; restore exact feedback in the quiz; remove duplicate addendum.
- Red review after correction: Yes

#### Block 7: Scenario Practice / Sorting Activity
- Status: ALTERED / LOGIC MISMATCH
- Storyboard wording:
```text
Which Duty Fits Best?
An employee repeatedly arrives late without permission.
Provide a Service.
An employee submits a medical certificate that has been altered.
Be Honest.
An employee refuses to follow a reasonable instruction.
Be Respectful.
An employee makes negative comments about the company online.
Act in Good Faith.
```
- Current course wording:
```text
Which Duty Fits Best?
An employee repeatedly arrives late without permission. -> Provide a Service
An employee submits a medical certificate that has been altered. -> Be Honest
An employee refuses to follow a reasonable instruction. -> Be Respectful
An employee makes negative comments about the company online. -> Act in Good Faith
```
- Astro location: `src/data/course.js` line 71
- Required correction: answer labels in the matching data should preserve storyboard punctuation with periods if rendered as learner-facing answers; confirm whether sorting vs matching interaction is acceptable.
- Red review after correction: Yes

#### Block 8: Key Takeaway Statement
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
Key Takeaway
Managers do not determine misconduct based on personal opinion.
Good managers look for:
Workplace expectations
Policies and standards
Common Law Duties
Facts
Common Law Duties provide a practical framework for understanding whether workplace expectations may have been breached.
```
- Current course wording:
```text
Storyboard addition: Key Takeaway
Managers do not determine misconduct based on personal opinion.
Good managers look for workplace expectations, policies and standards, Common Law Duties and facts.
Common Law Duties provide a practical framework for understanding whether workplace expectations may have been breached.
```
- Astro location: `src/data/course.js` line 72
- Required correction: remove addendum heading and restore list structure.
- Red review after correction: Yes

#### Continue Divider
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
You have identified a potential duty that may have been breached.
The next question is:
Would disciplinary action be fair?
In the next lesson, you'll learn how managers use fairness to guide their decisions.
```
- Current course wording:
```text
Storyboard addition: Continue divider
You have identified a potential duty that may have been breached.
The next question is: Would disciplinary action be fair?
In the next lesson, you'll learn how managers use fairness to guide their decisions.
```
- Astro location: `src/data/course.js` line 73
- Required correction: remove addendum heading and keep `Would disciplinary action be fair?` as its own line/paragraph.
- Red review after correction: Yes

### Lesson 3: Would Discipline Be Fair?

#### Lesson title
- Status: PASS
- Storyboard wording: `Would Discipline Be Fair?`
- Current course wording: `Would Discipline Be Fair?`
- Astro location: `src/data/course.js` line 79
- Required correction: none
- Red review after correction: No

#### Block 1: Return to the Scenario
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
Let's Investigate Further
You have gathered more information about the social media post.
The employee confirms that they created the post.
The post contains negative comments about the company and leadership.
Several colleagues viewed the post and discussed it at work.
Your manager asks:
"Now that we know the employee posted it, can we issue a warning?"
Before answering that question, there are a few things we still need to consider.
```
- Current course wording: original scenario omits the first, fourth and final storyboard sentences; red addendum paraphrases the missing content with `Storyboard addition: Scenario detail`.
- Astro location: `src/data/course.js` lines 82-83
- Required correction: replace both blocks with one exact scenario block.
- Red review after correction: Yes

#### Block 2: Statement Block
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
A Breach Does Not Automatically Mean Discipline
Even when a workplace rule, standard or duty may have been breached, managers should not automatically move to disciplinary action.
Managers need to determine whether discipline would be fair and appropriate.
A fair decision considers both the facts and the circumstances.
```
- Current course wording: original statement omits the first storyboard sentence; red addendum says `workplace rule or duty`, omits `standard`, and says `should not automatically move to discipline`.
- Astro location: `src/data/course.js` lines 84-85
- Required correction: one exact statement block; remove addendum.
- Red review after correction: Yes

#### Block 3: Process Interaction
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
Five Questions Every Manager Should Ask
Before disciplinary action is considered, work through the following questions.
These questions help managers make fair and consistent decisions.
Was there a reasonable rule?
What rule, standard or expectation may have been breached?
Why does the rule exist?
Why is it important?
Was the employee aware of the rule?
Could the employee reasonably be expected to know the rule?
How was the rule communicated?
Did the employee break the rule?
What evidence is available?
What actually happened?
Can the facts be verified?
Was the rule applied consistently?
Would another employee be treated the same way?
Has the standard been applied consistently in similar situations?
What is the appropriate response?
What impact did the behaviour have?
Can the behaviour be corrected?
What response would be reasonable in the circumstances?
```
- Current course wording: original process contains only shortened step descriptions; red process has invented intro `Use these questions to slow the decision down...` and combines/reorders subquestions.
- Astro location: `src/data/course.js` lines 86-87
- Required correction: one process block with exact intro copy and exact step descriptions/subquestions in storyboard order.
- Red review after correction: Yes

#### Block 4: Scenario Application
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
Apply The Questions
Let's work through the social media scenario using the five questions.
Was there a reasonable rule?
Employees are expected to act in good faith and avoid conduct that may negatively affect the organisation's reputation.
Was the employee aware of the rule?
Has the Code of Ethical Conduct, policy or expected standard been communicated to employees?
What evidence exists that the employee could reasonably have known the expectation?
Did the employee break the rule?
Do you have evidence that the employee created the post?
What facts have been verified?
Was the rule applied consistently?
Would a similar incident involving another employee be treated in the same way?
What is the appropriate response?
At this stage, the manager is beginning to assess whether disciplinary action might be appropriate and, if so, what level of response may be reasonable.
```
- Current course wording: original accordion omits intro and several exact possible considerations; red accordion paraphrases several considerations.
- Astro location: `src/data/course.js` lines 88-89
- Required correction: one accordion using exact storyboard question labels and possible consideration copy.
- Red review after correction: Yes

#### Block 5: Knowledge Check
- Status: PARTIAL / ALTERED
- Storyboard wording:
```text
Check Your Understanding
Which statement best reflects a fair approach?
Once a rule is broken, discipline should automatically follow.
If enough people complain, a warning should be issued.
Managers should consider all available information before deciding whether disciplinary action is appropriate.
All policy breaches should result in the same outcome.
Correct Answer: Managers should consider all available information before deciding whether disciplinary action is appropriate.
Feedback:
Fair disciplinary decisions are based on facts, consistency and appropriate judgement, not assumptions.
The purpose of the five questions is to help managers make informed decisions rather than reacting to an incident.
```
- Current course wording: quiz title is the question, not `Check Your Understanding`; feedback omits the second sentence and red addendum paraphrases it as `not assumptions or pressure to act quickly`.
- Astro location: `src/data/course.js` lines 90-91
- Required correction: use heading `Check Your Understanding`; keep question separately if renderer supports it or include exact question; restore exact feedback.
- Red review after correction: Yes

#### Block 6: Introduce Fairness
- Status: PARTIAL / DUPLICATED
- Storyboard wording:
```text
So What Does "Fair" Mean?
In Employee Relations, fairness has two important components:
Procedural Fairness
Following a fair process when investigating and responding to an incident.
Substantive Fairness
Having a valid and fair reason for taking disciplinary action.
Both need to be present for disciplinary action to be considered fair.
```
- Current course wording: cards contain only the two component cards; red statement adds expanded interpretation not in the storyboard.
- Astro location: `src/data/course.js` lines 92-93
- Required correction: add exact intro and closing sentence; remove invented red explanatory sentences.
- Red review after correction: Yes

#### Block 7: Visual Summary
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
The Fairness Test
Was there a rule?
↓
Was the employee aware?
↓
Was the rule broken?
↓
Was it applied consistently?
↓
What is the appropriate response?
Good managers do not simply ask:
"Did something happen?"
They ask:
"Would disciplinary action be fair?"
```
- Current course wording: red process title is `Storyboard addition: Fairness Test visual summary`; intro `Before moving to disciplinary action, work through the fairness test.` is invented; steps include explanatory text not in storyboard; key message is absent.
- Astro location: `src/data/course.js` line 94
- Required correction: implement exact visual summary/key message; remove addendum title and invented intro/descriptions.
- Red review after correction: Yes

#### Block 8: Key Takeaway
- Status: DUPLICATED / PARAPHRASED
- Storyboard wording:
```text
Before disciplinary action is considered:
Gather the facts
Understand what happened
Work through the five questions
Consider whether the decision would be fair
Fairness protects employees, managers and the business.
```
- Current course wording:
```text
Storyboard addition: Key Takeaway
Good managers do not only ask: Was a rule broken?
They also ask: Would disciplinary action be fair?
Fairness requires a fair process and a valid reason.
```
- Astro location: `src/data/course.js` line 95
- Required correction: replace paraphrase with exact storyboard key takeaway.
- Red review after correction: Yes

#### Continue Divider
- Status: DUPLICATED / ALTERED
- Storyboard wording:
```text
You have identified a possible breach and considered whether disciplinary action may be justified.
The next question is:
What action should follow?
In the next lesson, you'll explore the purpose of discipline and warnings, and how managers determine an appropriate response.
```
- Current course wording:
```text
Storyboard addition: Continue divider
You have now considered whether disciplinary action would be fair.
Next, you will explore what type of action may be appropriate and why discipline should focus on correction rather than punishment.
```
- Astro location: `src/data/course.js` line 96
- Required correction: replace with exact storyboard copy.
- Red review after correction: Yes

### Lesson 4: What Action Should Follow?

#### Lesson title
- Status: PASS
- Storyboard wording: `What Action Should Follow?`
- Current course wording: `What Action Should Follow?`
- Astro location: `src/data/course.js` line 102
- Required correction: none
- Red review after correction: No

#### Blocks 1-9 plus Continue Divider
- Status: Mostly DUPLICATED / PARTIAL / ALTERED
- Astro location: `src/data/course.js` lines 105-119
- Required correction summary: Lesson 4 should be rebuilt from the storyboard as one block per storyboard block. Current blocks often contain shortened original copy plus red addenda.

Key exact mismatches:
- Block 1 storyboard starts `Let's return to the social media situation.` and lists `You have:` with `Gathered the facts`, `Identified a possible Common Law Duty`, `Worked through the fairness questions`, `You now believe some form of action may be appropriate.` Current scenario compresses this and red addendum does not restore exact wording.
- Block 2 storyboard heading is `Why Do We Discipline Employees?`; current quiz title is only `Which statement best reflects the purpose of discipline?`. Feedback must be exactly `The primary purpose of discipline is corrective.` and `Discipline helps employees understand what behaviour is expected, what needs to change and what may happen if the behaviour continues.`
- Block 3 storyboard copy has bullet items: `Understand expectations`, `Recognise unacceptable behaviour`, `Correct behaviour`, `Improve future performance`. Current original combines this into one sentence and red block duplicates.
- Block 4 storyboard intro copy is missing from the original process: `Not all misconduct is equally serious. As a result, workplace responses are not always the same. Progressive discipline allows managers to respond appropriately while giving employees the opportunity to improve.` Step 2 must say `Despite the name, verbal warnings are recorded in writing.` Current step says `Recorded in writing.`
- Block 5 storyboard is a scenario reflection with heading `Would Every Situation Lead to the Same Outcome?`, copy `Consider the examples below. Should they all result in the same response?`, scenarios and feedback. Current red reflection asks a different question: `Which situations may require different responses?`
- Block 6 storyboard says `Warnings are formal notifications that document misconduct and communicate expectations for future behaviour.` Current red text says `Warnings are formal notifications that help clarify expectations...`
- Block 7 warning types are close, but `Written Warning` must say `Used when misconduct is more serious or has been repeated.` Current says `Used when misconduct is more serious or repeated.`
- Block 8 storyboard copy begins `If a warning is required:` and includes bullets plus `This means completing warning forms correctly, selecting the appropriate Common Law Duty and ensuring proper documentation.` Current original compresses all bullets into one sentence and red block invents additional wording.
- Block 9 storyboard key takeaway is `Discipline is not about punishment. It is about: Correcting behaviour Maintaining standards Supporting improvement Creating consistency Warnings are simply one tool used to achieve those outcomes.` Current red key takeaway says `Discipline is corrective` and `fair, proportionate and focused on behaviour change`, which is paraphrased.
- Continue Divider storyboard wording is `You've determined that action may be required. The next question is: Can I handle this myself, or should I involve the Fuse? In the next lesson, you'll learn how managers determine the correct disciplinary pathway and when escalation is required.` Current wording is altered.

Red review after correction: Yes for all Lesson 4 corrected blocks except the exact lesson title.

### Lesson 5: Can I Handle This, or Should I Contact the Fuse?

#### Lesson title
- Status: PASS
- Storyboard wording: `Can I Handle This, or Should I Contact the Fuse?`
- Current course wording: `Can I Handle This, or Should I Contact the Fuse?`
- Astro location: `src/data/course.js` line 125
- Required correction: none
- Red review after correction: No

#### Blocks 1-8 plus Continue Divider
- Status: Mostly DUPLICATED / PARTIAL / ALTERED
- Astro location: `src/data/course.js` lines 128-142
- Required correction summary: replace shortened blocks plus red review blocks with exact storyboard copy.

Key exact mismatches:
- Block 1 storyboard starts `Let's return to our social media scenario.` and bullet-lists `You have:`. Current scenario omits this structure and says `Knowing when to ask for help is an important skill.` instead of `Knowing when to ask for help is an important management skill.`
- Block 2 storyboard closing sentence is `The key is understanding when additional support is needed.` Current red says `The key is knowing which matters you can manage...`
- Block 3 storyboard intro `When misconduct may have occurred, managers generally follow one of three pathways.` is missing from the original process. Step details are split between original and red block and not exact.
- Block 4 storyboard instruction `Read each scenario and decide which pathway is most appropriate.` is missing from current matching renderer/source.
- Block 5 accordion item wording is shortened. Example: storyboard `Contact the Fuse when the potential outcome may involve dismissal. Matters that may lead to dismissal require specialist support.` Current original only has the second sentence; red addendum uses different wording.
- Block 6 storyboard heading/copy `Apply What You've Learnt`, `Return to the social media scenario.`, evidence bullets and question `At this stage, what is the best next step?` are missing as learner-facing pre-quiz copy. Feedback is altered: storyboard says `fair and appropriate process`; current says `fair process`.
- Block 7 storyboard `Your Escalation Checklist` exact checklist is not current. Current original `Your Escalation Steps` is invented/extra relative to storyboard, and the red checklist uses different questions such as `Could the matter result in a Final Written Warning or dismissal?`
- Block 8 storyboard says `Good managers don't need to know everything. Good managers know: When to act When to ask questions When to seek support Knowing when to involve the Fuse helps ensure fair, consistent and appropriate disciplinary outcomes.` Current red key takeaway is paraphrased.
- Continue Divider storyboard says `You've worked through the complete decision-making process. Now it's time to put everything together in a realistic manager challenge.` Current says `You now know when to manage a matter and when to escalate...`

Red review after correction: Yes for all Lesson 5 corrected blocks except the exact lesson title.

### Lesson 6: Manager Challenge

#### Lesson title
- Status: PASS
- Storyboard wording: `Manager Challenge`
- Current course wording: `Manager Challenge`
- Astro location: `src/data/course.js` line 148
- Required correction: none
- Red review after correction: No

#### Block 1: Challenge Introduction
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
Your Manager Challenge
Throughout this course, you've learnt a practical process for responding when misconduct may have occurred.
Now it's your turn.
Read the situation and decide what you would do next.
There are no trick questions.
Use the same decision-making process you've used throughout the course.
```
- Current course wording: original block omits the first, fourth and exact final storyboard sentences; red addendum is an invented summary.
- Astro location: `src/data/course.js` lines 151-152
- Required correction: one exact statement block.
- Red review after correction: Yes

#### Block 2: Scenario
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
Medical Certificate Concern
An employee submits a medical certificate after being absent from work.
While reviewing the certificate, you notice that part of the document appears to have been altered.
The dates look different to the rest of the document.
When asked about the changes, the employee says:
"The doctor made the correction."
A colleague believes the employee should be dismissed immediately.
As the manager, you need to decide what to do next.
```
- Current course wording: original scenario compresses sentences and says `dates look different`; red addendum says `part of the document appears to have been changed`, not `altered`, and `different from the rest`, not `different to the rest`.
- Astro location: `src/data/course.js` lines 153-154
- Required correction: one exact scenario block.
- Red review after correction: Yes

#### Blocks 3-7: Decisions 1-5
- Status: PARTIAL / ALTERED / LOGIC MISMATCH
- Astro location: `src/data/course.js` lines 155-163
- Required correction summary: quiz question/options/correct answers are mostly correct, but feedback and tips are heavily shortened; Decision 4 is implemented only as a red review quiz, so it is not treated as a normal required activity by the renderer because `data-activity` is omitted for `block.review`.

Exact storyboard feedback/tips missing or altered:
- Decision 1 feedback must include `A confident manager does not make disciplinary decisions based on assumptions.`, the `At this stage, you do not yet know:` list, `Remember: A concern is not the same as proof.`, and the tip `When you feel pressure to act quickly, pause and ask: "What facts do I still need before making a decision?"` Current feedback is only `A concern is not proof. Gather facts, review evidence and give the employee an opportunity to explain.` plus a red addendum.
- Decision 2 question must be `Which Common Law Duty may be most relevant in this situation?` Current omits `in this situation`. Feedback and tip are shortened.
- Decision 3 feedback must include the full explanation and three quoted non-questions. Current feedback is `These five questions form your fairness framework and focus on facts, fairness and consistency.` plus a red addendum. Tip is missing.
- Decision 4 storyboard question is two sentences beginning `Assume the investigation confirms that the document was intentionally altered.` Current red quiz title only says `Storyboard addition: Decision 4` and omits the question text entirely. This is a logic mismatch because a storyboard knowledge check is present only as non-required red review content.
- Decision 5 storyboard question is `If the circumstances suggest that dismissal may be a possible outcome, what should the manager do?` Current says `If dismissal may be a possible outcome...`. Feedback and tip are shortened/paraphrased.

Red review after correction: Yes for each corrected decision block.

#### Block 8: Debrief
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
How a Good Manager Approached the Situation
Notice that the strongest managers do not necessarily know every policy or disciplinary rule from memory.
Instead, they consistently apply a decision-making process.
In this challenge, the manager:
Gathered facts before acting
Identified the workplace expectation involved
Applied the fairness questions
Focused on behaviour correction
Sought support where required.
```
- Current course wording: original process has the five step titles but adds short descriptions (`No assumptions.`, `Be Honest.`, etc.) that are not storyboard copy; red addendum paraphrases the intro.
- Astro location: `src/data/course.js` lines 164-165
- Required correction: exact process intro and exact step text only; remove invented step descriptions unless treated as UI-not-copy.
- Red review after correction: Yes

#### Block 9: Final Reflection
- Status: DUPLICATED / PARTIAL
- Storyboard wording:
```text
What Did You Notice?
The strongest managers are not those who react the fastest.
The strongest managers are those who:
Gather facts
Follow a process
Make fair decisions
Apply standards consistently
Ask for support when needed
What would you do differently now?
Think back to a real workplace situation you have experienced.
How might you have approached the situation using the ER Decision Process?
```
- Current course wording: text-entry reflection appears before the `What Did You Notice?` statement; current `What Did You Notice?` red block says `not always the fastest managers` and omits `Ask for support when needed`.
- Astro location: `src/data/course.js` lines 166-167
- Required correction: restore storyboard order and exact wording.
- Red review after correction: Yes

#### Continue Divider
- Status: MISSING
- Storyboard wording:
```text
You've completed the manager challenge.
Let's finish with one practical tool that you can use whenever misconduct may have occurred.
```
- Current course wording: no equivalent visible block was found in Lesson 6.
- Astro location: no matching block in `src/data/course.js` lesson 6
- Required correction: add exact continue divider after final reflection.
- Red review after correction: Yes

### Lesson 7: Your ER Decision Checklist

#### Lesson title
- Status: PASS
- Storyboard wording: `Your ER Decision Checklist`
- Current course wording: `Your ER Decision Checklist`
- Astro location: `src/data/course.js` line 173
- Required correction: none
- Red review after correction: No

#### Blocks 1-7
- Status: Mostly DUPLICATED / PARTIAL / ALTERED
- Astro location: `src/data/course.js` lines 176-190
- Required correction summary: Lesson 7 contains many original shortened blocks plus red addenda. Replace them with exact storyboard blocks.

Key exact mismatches:
- Block 1 storyboard starts `Throughout this course, you've explored a practical approach to managing misconduct.` Current original starts directly with `An employee may have broken a rule...`; red addendum says `Throughout this course, you have used one practical question...`, which is not exact.
- Block 2 process intro `Use these five steps whenever misconduct may have occurred.` is missing from original. The original process compresses each step into one sentence. Red expanded process still paraphrases many lines and omits the exact `Ask:` and `Remember:` structures.
- Block 3 reflection prompt is split across original and red. Exact prompt must be `Think about a workplace conduct matter you may need to deal with in the future. How will using the ER Decision Process help you respond differently?` The learner note is rendered globally by `BlockRenderer.astro` for all `reflectionText` blocks and matches this block, but may appear on other reflection-text blocks where not storyboarded.
- Block 4 storyboard says `Good managers:` before the five checklist items and closes with `These behaviours help create fair, respectful and productive workplaces.` Current original checklist omits `Good managers:` and the closing sentence is a separate red statement.
- Block 5 storyboard copy is `Consider saving or printing this checklist for future reference.` Current download says `Download the ER Decision Checklist and keep it available for future conduct matters.` plus a red addendum `Consider saving or printing the ER Decision Checklist so it is available...`
- Block 6 storyboard final thought must be exact:
```text
Employee Relations is not about catching people out.
It is about helping managers make fair, informed decisions when workplace conduct concerns arise.
When misconduct may have occurred:
Gather the facts.
Follow the process.
Apply fairness.
Focus on improvement.
Seek support when needed.
Do this consistently, and you'll be better equipped to protect employees, support your team and uphold workplace standards.
```
Current original combines the first two sentences, omits `When misconduct may have occurred:`, and red addendum has different ending: `Do this consistently and you help protect employees, managers, teams and the business.`
- Block 7 storyboard completion copy and confidence question:
```text
Congratulations
You have completed:
ER Abridged: What To Do When Misconduct Happens
You now have a practical framework to help you respond more confidently when workplace conduct matters arise.
After completing this course, how confident do you feel in responding when misconduct may have occurred?
I would still need significant guidance.
I am somewhat confident but would need support.
I am confident I can follow the decision process.
I am very confident in using the framework and knowing when to seek support.
```
Current completion statement says `You have completed ER Abridged: What To Do When Misconduct Happens.` as one sentence, and the confidence question is a separate red reflection before `Congratulations` with different question wording: `How confident do you feel using the ER decision framework?`

Red review after correction: Yes for all corrected Lesson 7 blocks except the exact lesson title.

## 3. Interactive-Content Verification

### Questions
- Lesson 1 quiz question passes exactly.
- Lesson 2 quiz question passes, but option D is altered.
- Lesson 3 quiz question is present, but the storyboard heading `Check Your Understanding` is missing.
- Lesson 4 quiz question passes, but heading `Why Do We Discipline Employees?` is missing.
- Lesson 5 quiz question is altered: storyboard asks `At this stage, what is the best next step?`; current title asks `At this stage, what's the best next step?`
- Lesson 6 Decision 2 question omits `in this situation`.
- Lesson 6 Decision 4 question is missing from the visible quiz title.
- Lesson 6 Decision 5 question omits `If the circumstances suggest that...`
- Lesson 7 confidence question is altered and appears before `Congratulations`.

### Answer options and correct answers
- Most single-choice correct-answer arrays match the intended correct option.
- Lesson 2 option D is altered from `All negative comments about the company automatically result in discipline.` to `All negative comments automatically result in discipline.`
- Lesson 2 matching/sorting answers omit storyboard periods after `Provide a Service.`, `Be Honest.`, `Be Respectful.`, and `Act in Good Faith.`
- Lesson 6 multiple-response correct-answer logic matches the five fairness questions and excludes `Did somebody complain?`
- Lesson 6 Decision 4 is `review: true`, so `BlockRenderer.astro` omits `data-activity` for it. That means the storyboard knowledge check is visible but not treated as a normal required activity.

### Feedback
- Feedback is the largest fidelity problem. Many feedback blocks are shortened or paraphrased, then followed by red addendum statements.
- Lesson 6 tips are missing across Decisions 1-5.
- Several feedback blocks collapse line-by-line storyboard copy into single paragraphs and remove quotes or lead-in labels such as `Remember:` and `Tip`.

### Tips
- Lesson 6 Decision 1 tip is missing.
- Lesson 6 Decision 2 tip is missing.
- Lesson 6 Decision 3 tip is missing.
- Lesson 6 Decision 4 tip is missing.
- Lesson 6 Decision 5 tip is missing.

### Accordion content
- Lesson 0 accordion is partial and shortened.
- Lesson 1 accordion passes.
- Lesson 3 accordion is partial and duplicated.
- Lesson 4 warning accordion is close but altered in the Written Warning item.
- Lesson 5 accordion is partial and duplicated.

### Flashcard/card content
- Lesson 0 icon cards pass.
- Lesson 2 Common Law Duty cards are duplicated: original cards contain duty descriptions, red cards contain examples. The storyboard requires combined description-plus-example copy in each card.
- Lesson 3 fairness cards are partial because the intro and closing sentence are missing; red addendum adds non-storyboard copy.

### Sorting and matching content
- Lesson 2 sorting activity is implemented as matching. Text is mostly present but answer punctuation differs.
- Lesson 5 sorting activity is implemented as matching. Scenarios and pathway answers are present, but the instruction is missing.
- Lesson 4 scenario reflection is implemented as a red checkbox reflection, not the storyboard sorting activity, and the question wording is altered.

### Reflection prompts and learner notes
- Lesson 0 reflection feedback is altered.
- Lesson 6 final reflection appears before `What Did You Notice?`, unlike storyboard order.
- Lesson 7 text-entry prompt is split between original and red blocks. The learner note is rendered globally by `BlockRenderer.astro` as `Your response is for personal reflection and will not be assessed.`

## 4. Duplicate And Invented-Copy List

### Legitimate user-interface copy
These are normal interface labels and should be treated separately from storyboard copy:
- `Home`
- `Course Progress`
- `Previous lesson`
- `Next lesson`
- `Check answer`
- `Check matches`
- `Select an answer`
- `Choose the best match for each scenario, then check your answers.`
- `Select each row to expand and review the guidance.`
- `Type your reflection here...`
- `Your response is for personal reflection and will not be assessed.` where storyboard includes learner note; otherwise review per reflection-text block

### Course copy that paraphrases the storyboard
- Homepage overview cards: `Purpose`, `Approach`, `Practice`, `Outcome` and their descriptions. Homepage is separate from storyboard but should be reviewed if homepage copy must also be storyboard-derived.
- Many original lesson blocks in `src/data/course.js` are shortened paraphrases of storyboard blocks.
- Many red addenda contain partial storyboard ideas but not exact storyboard wording.

### Entirely invented visible course-copy labels
The deployed lesson HTML contains 58 visible `Storyboard addition` headings:
- Lesson 0: `Storyboard addition: This is not a policy memorisation course`; `Storyboard addition: Resource guidance`; `Storyboard addition: Continue divider`
- Lesson 1: `Storyboard addition: Scenario detail`; `Storyboard addition: Knowledge check feedback detail`; `Storyboard addition: Why this matters detail`; `Storyboard addition: Key Takeaway`; `Storyboard addition: Continue divider`
- Lesson 2: `Storyboard addition: Scenario recap detail`; `Storyboard addition: Where Do Workplace Expectations Come From?`; `Storyboard addition: Introducing Common Law Duties`; `Storyboard addition: Common Law Duty examples`; `Storyboard addition: Guided application feedback detail`; `Storyboard addition: Key Takeaway`; `Storyboard addition: Continue divider`
- Lesson 3: `Storyboard addition: Scenario detail`; `Storyboard addition: Fairness detail`; `Storyboard addition: Expanded fairness questions`; `Storyboard addition: Scenario application detail`; `Storyboard addition: Knowledge check feedback detail`; `Storyboard addition: Procedural and substantive fairness detail`; `Storyboard addition: Fairness Test visual summary`; `Storyboard addition: Key Takeaway`; `Storyboard addition: Continue divider`
- Lesson 4: `Storyboard addition: Scenario detail`; `Storyboard addition: Primary purpose of discipline`; `Storyboard addition: Good discipline detail`; `Storyboard addition: Progressive discipline detail`; `Storyboard addition: Would every situation lead to the same outcome?`; `Storyboard addition: The Purpose of Warnings`; `Storyboard addition: Warning documentation detail`; `Storyboard addition: Key Takeaway`; `Storyboard addition: Continue divider`
- Lesson 5: `Storyboard addition: Scenario detail`; `Storyboard addition: Manager support detail`; `Storyboard addition: Pathway detail`; `Storyboard addition: Fuse escalation detail`; `Storyboard addition: Scenario challenge feedback detail`; `Storyboard addition: Your Escalation Checklist`; `Storyboard addition: Key Takeaway`; `Storyboard addition: Continue divider`
- Lesson 6: `Storyboard addition: Challenge introduction detail`; `Storyboard addition: Scenario detail`; `Storyboard addition: Decision 1 feedback detail`; `Storyboard addition: Decision 2 feedback detail`; `Storyboard addition: Decision 3 feedback detail`; `Storyboard addition: Decision 4`; `Storyboard addition: Decision 5 feedback detail`; `Storyboard addition: Debrief detail`; `Storyboard addition: What Did You Notice?`
- Lesson 7: `Storyboard addition: Opening detail`; `Storyboard addition: Expanded ER Decision Process`; `Storyboard addition: Remember`; `Storyboard addition: Reflection prompt detail`; `Storyboard addition: Good manager closing line`; `Storyboard addition: Download guidance`; `Storyboard addition: Final thought closing line`; `Storyboard addition: Completion confidence question`

Other invented or unsupported course copy:
- `Manager capability` eyebrow in Lesson 0 Block 1.
- `Manager mindset` label in quote renderer.
- `ER Decision Checklist` resource link in Lesson 0 resource list; the storyboard Lesson 0 resource list contains four resources only.
- Lesson 5 `Your Escalation Steps` process block is not the storyboard `Your Escalation Checklist` job aid.
- Several red addendum explanatory sentences do not appear verbatim in the storyboard.

## 5. Implementation Checklist

### Lesson 0
- Replace Block 1 with exact statement copy and list.
- Keep Block 2 cards as-is unless design requires flashcards.
- Restore full quote detail in Block 3.
- Restore list structure and missing goal sentence in Block 4.
- Restore full accordion item content in Block 5.
- Correct reflection feedback wording.
- Restore exact process intro and step 4/5 descriptions.
- Remove `Storyboard addition:` from Blocks 8-10.
- Remove `ER Decision Checklist` from Lesson 0 resources unless separately approved.

### Lesson 1
- Merge original scenario and red scenario addendum into one exact storyboard scenario.
- Replace quiz feedback with exact storyboard feedback.
- Restore `However,` and exact order in `Why This Matters`.
- Add process intro copy.
- Keep accordion copy.
- Replace key takeaway with exact line structure.
- Remove all `Storyboard addition:` headings.

### Lesson 2
- Merge scenario recap into one exact block.
- Correct option D and restore full feedback.
- Convert expectations source copy to exact list structure.
- Remove `Storyboard addition:` headings.
- Combine Common Law Duty descriptions and examples into one card set.
- Add `Applying The Duties` heading and scenario copy before quiz.
- Restore exact guided application feedback.
- Add periods to sorting/matching answers if displayed.
- Restore key takeaway list structure and continue divider line breaks.

### Lesson 3
- Merge scenario blocks into exact storyboard scenario.
- Replace breach statement with exact three-sentence copy.
- Rebuild five-question process with exact intro and subquestions.
- Rebuild scenario application accordion with exact possible considerations.
- Add `Check Your Understanding` heading and full feedback.
- Add fairness intro and closing sentence.
- Implement exact `The Fairness Test` visual/key message.
- Replace paraphrased key takeaway and continue divider.

### Lesson 4
- Rebuild return scenario with exact `You have:` list.
- Add quiz heading `Why Do We Discipline Employees?`.
- Restore exact quiz feedback.
- Restore behaviour-change bullet list.
- Restore full progressive discipline intro and exact step descriptions.
- Replace red reflection with exact scenario reflection/sorting copy and feedback.
- Restore exact warning purpose wording.
- Correct warning accordion wording.
- Restore warning manager message bullets and documentation sentence.
- Replace key takeaway and continue divider with exact storyboard copy.

### Lesson 5
- Restore exact scenario list and `important management skill`.
- Restore exact additional-support statement.
- Restore process intro and exact pathway details.
- Add sorting/matching instruction.
- Restore exact Fuse accordion wording.
- Add `Apply What You've Learnt` heading, scenario evidence bullets and exact quiz prompt.
- Restore full feedback.
- Replace `Your Escalation Steps` with exact `Your Escalation Checklist`.
- Replace key takeaway and continue divider with exact storyboard copy.

### Lesson 6
- Restore exact challenge intro.
- Restore exact medical certificate scenario.
- Replace all Decision 1-5 feedback with exact storyboard feedback and tips.
- Decision 4 must become a normal storyboard quiz with the exact two-sentence question and feedback/tip.
- Rebuild debrief without invented step descriptions.
- Restore `What Did You Notice?` before the text reflection and include `Ask for support when needed`.
- Add missing continue divider.

### Lesson 7
- Restore exact opening statement.
- Rebuild ER Decision Process with intro, `Ask:` sections and `Remember` section.
- Merge reflection prompt into exact storyboard prompt.
- Add `Good managers:` lead-in and closing sentence in one block.
- Replace download copy with `Consider saving or printing this checklist for future reference.`
- Restore exact final thought, including `When misconduct may have occurred:`.
- Restore completion message line break after `You have completed:`.
- Restore exact confidence question and place it according to storyboard completion block.

## Completion Status

READY FOR VERBATIM CORRECTION
