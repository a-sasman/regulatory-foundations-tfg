export const courseTitle = 'Regulatory Foundations for TFG Insure Employees';

export const courseSubtitle = 'Build an understanding of the regulatory environment, Customer outcomes, and the behaviours expected in a licensed financial services provider.';

export const resources = [
  { label: 'Conflict of Interest Management Policy', href: '/resources/conflict-of-interest-management-policy.pdf' },
  { label: 'TFG Disclosure of Interest Policy', href: '/resources/disclosure-of-interests-policy.pdf' },
  { label: 'TFG Gift Policy', href: '/resources/gift-policy.pdf' },
  { label: 'Debarment Policy', href: '/resources/debarment-policy.pdf' },
];

export const lessons = [
  {
    id: 'why-this-course-matters',
    number: 0,
    title: 'Why This Course Matters',
    blocks: [
      {
        type: 'text',
        title: 'Your Role in TFG Insure',
        copy: [
          'Working in a regulated environment means that the decisions we make every day can have an impact on our Customers, our colleagues, and the business. This course will help you understand how TFG Insure operates as a licensed Financial Services Provider and the role you play in supporting compliance and fair Customer outcomes.',
        ],
      },
      {
        type: 'statement',
        title: 'Compliance is not just for specialists',
        copy: [
          "Whether you're supporting Customers directly or working behind the scenes, your work contributes to how TFG Insure delivers financial services.",
          'You may be involved in:',
          {
            type: 'list',
            items: [
              'Customer interactions',
              'Systems and technology',
              'Marketing and communications',
              'Operational processes',
              'Product administration',
              'Business support functions',
            ],
          },
          'Even if you never speak to a Customer, your decisions and outputs can influence Customer outcomes and regulatory compliance.',
        ],
      },
      {
        type: 'cards',
        title: 'Why does this matter?',
        cards: [
          {
            title: 'Protect Customers',
            copy: 'Financial services regulations exist to ensure that Customers receive fair treatment, clear information and appropriate support throughout their journey.',
          },
          {
            title: 'Protect the Business',
            copy: 'Operating as a licensed Financial Services Provider means TFG Insure must comply with specific regulatory requirements and industry standards.',
          },
          {
            title: 'Protect Colleagues',
            copy: 'The actions of one employee can impact the compliance obligations of other teams and licensed representatives within the business.',
          },
          {
            title: 'Protect Yourself',
            copy: 'Understanding your responsibilities helps you make informed decisions and reduces the risk of unintended compliance breaches.',
          },
        ],
      },
    ],
  },
  {
    id: 'tfg-insure-fsp',
    number: 1,
    title: 'TFG Insure as a Financial Services Provider (FSP)',
    objective: "After this video, you'll understand how TFG Insure operates as a licensed Financial Services Provider, why approved processes matter, and how your role contributes to compliance and fair Customer outcomes.",
    blocks: [
      {
        type: 'video',
        title: 'Video 1: Understanding TFG Insure as a Financial Services Provider',
        src: '/videos/understanding-tfg-insure-fsp.mp4',
        available: true,
      },
    ],
  },
  {
    id: 'regulatory-environment',
    number: 2,
    title: 'The Regulatory Environment',
    blocks: [
      {
        type: 'tabs',
        ariaLabel: 'Regulatory environment topics',
        intro: 'TFG Insure operates within a regulated financial services environment. Select each tab to discover the purpose of the key legislation and regulators that govern the industry.',
        tabs: [
          {
            title: 'Financial Advisory and Intermediary Services Act 37 of 2002 (FAIS)',
            copy: [
              'Purpose',
              'Primarily regulates how financial services must be provided and sets the rules for how businesses interact with Customers.',
              'Key Focus',
              { type: 'list', items: ['Customer interactions', 'Conduct standards', 'Disclosure requirements', 'Fair treatment of Customers'] },
              'In Simple Terms',
              'FAIS helps ensure that Customers receive accurate information and are treated fairly when financial services are provided.',
            ],
          },
          {
            title: 'Financial Sector Regulation Act 9 of 2017 (FSRA)',
            copy: [
              'Purpose',
              'Establishes the overall regulatory framework for the financial sector.',
              'Key Focus',
              { type: 'list', items: ['Industry oversight', 'Regulatory supervision', 'Enforcement', 'Regulatory authorities'] },
              'In Simple Terms',
              'FSRA determines how the financial services industry is regulated, supervised, and enforced.',
            ],
          },
          {
            title: 'Financial Sector Conduct Authority (FSCA)',
            copy: [
              'Who Are They?',
              "TFG Insure's primary regulator.",
              'Key Responsibilities',
              { type: 'list', items: ['Supervises conduct within the financial sector', 'Promotes fair Customer outcomes', 'Enforces regulatory requirements'] },
              'In Simple Terms',
              'The FSCA helps ensure financial institutions treat Customers fairly and comply with regulations.',
            ],
          },
          {
            title: 'Insurance Act 18 of 2017',
            copy: [
              'Purpose',
              'Focuses on how insurers must be managed and governed to ensure financial stability.',
              'Key Focus',
              { type: 'list', items: ['Financial stability', 'Governance', 'Risk management', 'Protection of policyholders'] },
              'In Simple Terms',
              'The Insurance Act helps ensure insurers remain financially sound and able to meet their obligations to Customers.',
            ],
          },
          {
            title: 'Long-term Insurance Act 52 of 1998 (LTIA)',
            copy: [
              'Purpose',
              'Regulates life insurance products and protects policyholders.',
              'Key Focus',
              { type: 'list', items: ['Life insurance products', 'Product structures', 'Policyholder protection', 'Customer safeguards'] },
              'In Simple Terms',
              'LTIA provides rules for life insurance products and helps protect policyholders.',
            ],
          },
          {
            title: 'Short-term Insurance Act 53 of 1998 (STIA)',
            copy: [
              'Purpose',
              'Regulates non-life insurance products.',
              'Key Focus',
              { type: 'list', items: ['Short-term cover', 'Non-life insurance products', 'Claims processes', 'Customer protection'] },
              'In Simple Terms',
              'STIA provides rules for short-term insurance products and claims.',
            ],
          },
          {
            title: 'Policyholder Protection Rules (PPRs)',
            copy: [
              'Purpose',
              'Support the insurance legislation by setting requirements for:',
              'Key Focus',
              { type: 'list', items: ['Fair treatment', 'Transparency', 'Customer communication', 'Product lifecycle management'] },
              'In Simple Terms',
              'PPRs help ensure Customers are treated fairly and receive clear, transparent communication throughout their relationship with an insurer.',
            ],
          },
        ],
      },
      {
        type: 'matching',
        title: 'Knowledge Check',
        copy: [
          "Now that you've explored the key legislation and regulators that govern the financial services industry, let's see how well you can connect each one to its purpose.",
          "You don't need to memorise every detail. The goal is to understand who is responsible for what and how these Acts and regulators work together to help ensure a compliant, fair, and Customer-focused financial services environment.",
          'Activity Instructions',
        ],
        instruction: 'Match each piece of legislation or regulator to its primary purpose.',
        answers: [
          'Regulates how financial services are provided',
          'Establishes the regulatory framework',
          'Supervises conduct within the financial sector',
          'Ensures insurers are financially stable and properly governed',
          'Regulates life insurance products',
          'Regulates non-life insurance products and claims',
          'Promote fairness, transparency, and Customer communication',
        ],
        pairs: [
          { scenario: 'FAIS', answer: 'Regulates how financial services are provided' },
          { scenario: 'FSRA', answer: 'Establishes the regulatory framework' },
          { scenario: 'FSCA', answer: 'Supervises conduct within the financial sector' },
          { scenario: 'Insurance Act', answer: 'Ensures insurers are financially stable and properly governed' },
          { scenario: 'LTIA', answer: 'Regulates life insurance products' },
          { scenario: 'STIA', answer: 'Regulates non-life insurance products and claims' },
          { scenario: 'PPRs', answer: 'Promote fairness, transparency, and Customer communication' },
        ],
        correctFeedback: 'Well done! Each Act and regulator plays a different role, but together they help create a financial services environment that protects Customers, promotes fair outcomes, and ensures organisations like TFG Insure operate responsibly.',
        incorrectFeedback: 'Not quite. Take another look at the tabs and focus on the primary purpose of each Act and regulator.',
      },
    ],
  },
  {
    id: 'treating-customers-fairly',
    number: 3,
    title: 'Treating Customers Fairly (TCF)',
    objective: 'Understanding the six TCF outcomes and your role in achieving them.',
    blocks: [
      {
        type: 'text',
        copy: ["In this lesson, you'll explore the six TCF outcomes, see what they look like in practice, and discover how your role contributes to creating fair Customer outcomes."],
      },
      {
        type: 'video',
        title: 'What is TCF?',
        copy: [
          'Before exploring the six TCF outcomes, watch this short video to learn:',
          { type: 'list', items: ['What TCF stands for', 'Why TCF exists', 'Why it matters', 'How it impacts Customers'] },
          "As you watch, think about how the decisions made in your role could influence a Customer's experience.",
        ],
        videoTitle: 'Video 2: Treating Customers Fairly (TCF)',
        src: '/videos/treating-customers-fairly.mp4',
        available: true,
      },
      {
        type: 'cards',
        title: 'The Six TCF Outcomes',
        intro: [
          "Treating Customers Fairly (TCF) is brought to life through six outcomes that describe what fair treatment looks like from a Customer's perspective.",
          'Instructions:',
          'Take a moment to review each outcome below and think about how you can support fair Customer outcomes in your role.',
        ],
        hideMarkers: true,
        cards: [
          { title: 'TCF Outcome 1 – Customers must feel confident that they are dealing with an institution where TCF is at the core of their culture.' },
          { title: 'TCF Outcome 2 – Products and services in the retail market which are sold and marketed are designed according to the needs of the Customers identified and targeted accordingly.' },
          { title: 'TCF Outcome 3 – Customers are provided with clear information and kept appropriately informed before, during and after point of sale.' },
          { title: 'TCF Outcome 4 – Advice is suitable and according to the Customer’s circumstances.' },
          { title: 'TCF Outcome 5 – Service is of an acceptable standard, and products perform as Customers have been led to expect.' },
          { title: 'TCF Outcome 6 – Customers do not face unreasonable post-sale barriers when they want to change a product, switch providers, submit a claim or make a complaint.' },
        ],
      },
      {
        type: 'statement',
        title: 'What does this look like in practice?',
        copy: [
          'Customers should not be misled by marketing material and should understand what they are buying.',
          'After purchasing an insurance product Customers should have easily accessible channel to lodge complaints and make a claim.',
        ],
      },
      {
        type: 'cards',
        title: 'How can you play your part?',
        cards: [
          { title: 'Follow approved scripts', copy: 'Use approved scripts whenever required to ensure Customers receive accurate and compliant information.' },
          { title: 'Provide accurate information', copy: 'Always endeavour to provide or present information that is accurate and clear.' },
          { title: 'Know the policies', copy: 'Understand the TFG Disclosure of Interests Policy and the FRG Conflict of Interest Management Policy.' },
          { title: 'Treat Customers fairly', copy: 'Support consistent and fair treatment across every touchpoint.' },
          { title: 'Every role matters', copy: 'All employees contribute to fair Customer outcomes, regardless of whether they interact directly with Customers.' },
        ],
      },
      {
        type: 'quiz',
        heading: 'Knowledge Check',
        copy: [
          'Scenario',
          'Sarah is working on a new insurance product campaign. Before the campaign is launched, the team ensures that:',
          { type: 'list', items: ['Customers receive clear information about the product.', 'The product is designed for the needs of the target Customer group.', 'Customers can easily submit a claim if they need to.'] },
        ],
        question: 'Which TCF outcome is reflected in the fact that the product is designed for the needs of the target Customer group?',
        options: [
          'A. Outcome 1: Customers trust the organisation',
          'B. Outcome 2: Products meet Customer needs',
          'C. Outcome 3: Customers receive clear information',
          'D. Outcome 6: No unreasonable barriers',
        ],
        correct: ['B. Outcome 2: Products meet Customer needs'],
        correctFeedback: 'Correct!',
        incorrectFeedback: 'Not quite. Try again.',
      },
      {
        type: 'text',
        title: 'Advice vs Intermediary Services',
        copy: [
          "When engaging with Customers, it's important to understand the difference between advice and intermediary services.",
          'At TFG Insure, employees operate within a non-advice model, which means Customer interactions must be limited to approved scripts and factual information.',
          'Understanding this difference helps protect Customers, supports compliance, and reduces regulatory risk.',
        ],
      },
      {
        type: 'table',
        title: 'What’s the difference?',
        headers: ['Advice', 'Intermediary Services'],
        rows: [
          ['Recommending or suggesting a product', 'Providing factual information'],
          ["Influences a Customer's decision", "Supports the Customer's decision-making process"],
          ['Includes opinions and recommendations', 'Uses approved scripts and accurate information'],
          ['Requires specific authorisation', 'Can be provided within approved guidelines'],
          ['May include assessing Customer suitability', 'Explains product features, costs, and benefits'],
          ['Guides the Customer towards a decision', 'Helps the Customer make their own decision'],
        ],
      },
      {
        type: 'statement',
        copy: ['At TFG Insure, employees may provide factual information and assist Customers through approved processes but may not recommend or suggest products.'],
      },
      {
        type: 'text',
        title: 'Is it Advice or Intermediary Service?',
        copy: ['Knowledge Check'],
      },
      {
        type: 'quiz',
        heading: 'Question 1',
        copy: ['A Customer asks about available insurance products.', 'The employee responds:', '"This product is the best option for you."'],
        instruction: 'Select the correct answer:',
        options: ['Advice', 'Intermediary Service'],
        correct: ['Advice'],
        correctFeedback: "Well done! This statement recommends a specific product and could influence the Customer's decision. This is considered advice and requires the appropriate authorisation.",
        incorrectFeedback: 'Not quite. The phrase "best option for you" is a recommendation that could influence the Customer\'s decision. This makes it advice, not an intermediary service.',
      },
      {
        type: 'quiz',
        heading: 'Question 2',
        copy: ['A Customer asks for more information about an insurance product.', 'The employee responds:', '"This product includes these features, benefits, and costs."'],
        instruction: 'Select the correct answer:',
        options: ['Advice', 'Intermediary Service'],
        correct: ['Intermediary Service'],
        correctFeedback: "Correct! This statement provides factual information to help the Customer understand the product and make their own decision. This is an intermediary service.",
        incorrectFeedback: "Not quite. The employee is not recommending a product or influencing the Customer's choice. They are simply providing factual information, which is an intermediary service.",
      },
      {
        type: 'quiz',
        heading: 'Challenge Question',
        copy: [
          'A Customer asks:',
          '"Which product would you choose if you were me?"',
          'The employee responds:',
          '"I can\'t recommend a product, but I can explain the features and costs of each option so you can decide what best meets your needs."',
        ],
        question: 'This response is:',
        options: ['Advice', 'Intermediary Service'],
        correct: ['Intermediary Service'],
        correctFeedback: "Excellent! The employee avoids making a recommendation and instead provides factual information. This aligns with TFG Insure's non-advice model.",
        incorrectFeedback: "Not quite. The employee does not recommend any product. They provide information that helps the Customer make their own decision, which is an intermediary service.",
      },
    ],
  },
  {
    id: 'conflicts-of-interest',
    number: 4,
    title: 'Conflicts of Interest',
    blocks: [
      {
        type: 'accordion',
        intro: [
          'Working in a regulated environment means being aware of interests that could influence, or be perceived to influence, business decisions.',
          'A conflict of interest is not necessarily misconduct. However, it is important to recognise and manage situations that could affect your ability to act in the best interests of Customers.',
          'Click on each section to learn more.',
        ],
        items: [
          {
            title: 'What is a Conflict of Interest?',
            copy: [
              'A disclosure of interest is required for a wide range of personal or business interests which, if not disclosed and appropriately managed, may negatively impact TFG.',
              'A conflict of interest is a specific category of interest within this broader disclosure framework which is regulated by FAIS.',
            ],
          },
          {
            title: 'Financial Interests',
            copy: [
              'A conflict of interest may arise where a financial interest influences, or appears to influence, your conduct or ability to act in the best interests of Customers.',
              'Examples may include:',
              { type: 'list', items: ['Gifts', 'Incentives', 'Rewards', 'Benefits received from suppliers or competitors'] },
            ],
          },
          {
            title: 'Ownership Interests',
            copy: [
              'Ownership interests may create actual or perceived conflicts of interest.',
              'Examples may include:',
              { type: 'list', items: ['Business ownership', 'Shareholding', 'Investments', 'Other financial interests'] },
            ],
          },
          {
            title: 'Third-Party Relationships',
            copy: [
              'Relationships with external parties can also give rise to conflicts of interest.',
              'Examples include:',
              { type: 'list', items: ['Product suppliers', 'Other Financial Services Providers (FSPs)', 'Associates', 'Distribution channels'] },
            ],
          },
        ],
      },
      {
        type: 'statement',
        copy: ['A conflict of interest may be real or perceived. Recognising and disclosing these interests helps protect Customers, employees, and TFG Insure.'],
      },
      {
        type: 'text',
        copy: ['Learn more by reading the Conflict of Interest Management Policy.'],
      },
      {
        type: 'download',
        title: 'Conflict of Interest Management Policy',
        href: '/resources/conflict-of-interest-management-policy.pdf',
        label: 'Open policy',
      },
      {
        type: 'text',
        title: 'Disclosing Interests and Gifts',
        copy: ['Having an interest is not always a problem. However, it is important to disclose and manage interests appropriately to help prevent potential conflicts and reduce risk.'],
      },
      {
        type: 'process',
        steps: [
          { title: 'Identify the Interest', copy: ['Ask yourself:', 'Could this influence, or appear to influence, my decisions or actions?'] },
          { title: 'Disclose the Interest', copy: 'Interests that may create actual or perceived conflicts should be disclosed in accordance with company policies.' },
          { title: 'Record the Disclosure', copy: ['All gifts must be disclosed in line with the TFG Gift Policy, regardless of value.', 'Disclosures must be made using Vantage.'] },
          { title: 'Seek Guidance', copy: 'If you are unsure whether something should be disclosed or how to use Vantage, contact Legal Compliance for assistance.' },
        ],
      },
      {
        type: 'mediaPlaceholder',
        title: 'Vantage',
        message: 'Vantage image to be added',
      },
      {
        type: 'text',
        copy: ['Learn more by reading the TFG Disclosure of Interest Policy and the TFG Gift Policy.'],
      },
      {
        type: 'downloads',
        items: [
          { title: 'TFG Disclosure of Interest Policy', href: '/resources/disclosure-of-interests-policy.pdf' },
          { title: 'TFG Gift Policy', href: '/resources/gift-policy.pdf' },
        ],
      },
      {
        type: 'accordion',
        title: 'Debarment, Misconduct and Regulatory Risk',
        intro: [
          'Every employee has a responsibility to act with integrity and support compliance.',
          'Failing to do so can create risk for Customers, employees, and TFG Insure.',
          'Click on each section to learn more.',
        ],
        items: [
          {
            title: 'What is Debarment?',
            copy: [
              'Debarment is a legal process under FAIS that applies to licensed Representatives and Key Individuals (KIs).',
              'It is used to prevent individuals who no longer meet the Fit and Proper Requirements, or who have breached FAIS, from operating in the financial services industry.',
            ],
          },
          {
            title: 'Does Debarment apply to me?',
            copy: [
              'If you are not a licensed Representative or KI, you will not be directly subject to debarment.',
              'However, your conduct can still create regulatory risk for TFG and its licensed individuals and may result in disciplinary action in line with the TFG Disciplinary Policy.',
            ],
          },
          {
            title: 'Behaviours that create regulatory risk',
            copy: [
              'Examples include:',
              { type: 'list', items: ['Fraud', 'Dishonesty', 'Misrepresentation', 'Failure to disclose conflicts of interest', 'Rendering unauthorised financial services'] },
              'Within TFG Insure, this may include:',
              { type: 'list', items: ['Deviating from approved scripts', 'Providing advice where only factual information is permitted', 'Communicating product information in a misleading way'] },
            ],
          },
          {
            title: 'Why conduct matters',
            copy: [
              'Your conduct matters, even if you are not licensed.',
              'Employees are expected to:',
              { type: 'list', items: ['Follow approved processes', 'Act with integrity', 'Avoid misleading Customers', 'Escalate concerns where there is uncertainty'] },
              'These behaviours help protect Customers, support licensed staff, and ensure TFG Insure remains compliant as a licensed Financial Services Provider.',
            ],
          },
        ],
      },
      {
        type: 'text',
        copy: ['Learn more by reading the Debarment Policy.'],
      },
      {
        type: 'download',
        title: 'Debarment Policy',
        href: '/resources/debarment-policy.pdf',
        label: 'Open policy',
      },
      {
        type: 'quiz',
        heading: 'Knowledge Check',
        copy: [
          'Scenario',
          "Sipho works in a team that supports insurance products. One of TFG Insure's product suppliers sends Sipho a gift voucher to thank them for their support during a recent project.",
          'Sipho knows the gift is unlikely to influence any decisions, but he is unsure whether he needs to do anything because the gift was unsolicited.',
        ],
        question: 'What is the MOST appropriate action for Sipho to take?',
        options: [
          'Accept the gift and keep it because it was unsolicited.',
          'Accept the gift and only disclose it if someone asks about it.',
          'Disclose the gift using Vantage and follow the appropriate company process.',
          'Return the gift immediately because accepting any gift is prohibited.',
        ],
        correct: ['Disclose the gift using Vantage and follow the appropriate company process.'],
        correctFeedback: 'Correct, well done! A gift may create an actual or perceived conflict of interest. All gifts must be disclosed in line with the TFG Gift Policy, regardless of value. Disclosing interests helps promote transparency and reduce regulatory risk.',
        incorrectFeedback: 'Not quite, try again.',
      },
    ],
  },
  {
    id: 'when-in-doubt-ask',
    number: 5,
    title: 'When in doubt, ask!',
    objective: 'Knowing when to escalate concerns and seek guidance',
    blocks: [
      {
        type: 'statement',
        copy: [
          'If you are unsure whether an action is compliant, do not proceed.',
          'Instead, speak to your line manager or contact Legal Compliance at AshmikaB@tfg.co.za for guidance.',
          "Asking for support when you're unsure helps protect Customers, supports compliance, and reduces regulatory risk.",
        ],
      },
      {
        type: 'text',
        title: 'Congratulations!',
        copy: [
          'You now have a foundational understanding of the regulatory environment in which TFG Insure operates and the role you play in supporting fair Customer outcomes and regulatory compliance.',
          'Throughout this course, you explored:',
          {
            type: 'list',
            items: [
              "TFG Insure's role as a licensed Financial Services Provider",
              'The legislation and regulators that govern the financial services industry',
              'The principles of Treating Customers Fairly (TCF)',
              'The difference between advice and intermediary services',
              'Managing conflicts of interest and disclosures',
              'Regulatory risk, misconduct, and debarment awareness',
              'When and how to seek guidance',
            ],
          },
          "Remember, compliance is not just about following rules. It's about making responsible decisions, acting with integrity, and putting Customers at the centre of what we do.",
        ],
      },
      {
        type: 'reflection',
        title: 'Reflection',
        copy: ['After completing this course, how confident do you feel in supporting compliance and fair Customer outcomes in your role?'],
        question: "Select the option that best describes how confident you feel about applying what you've learned in your role.",
        options: [
          'I would still need significant guidance.',
          'I am somewhat confident but would need support.',
          'I am confident I can follow the required processes and know when to escalate concerns.',
          'I am very confident in applying what I have learned and knowing when to seek support.',
        ],
        scormInteraction: {
          id: 'post_course_confidence',
          values: ['significant_guidance', 'somewhat_confident', 'confident', 'very_confident'],
        },
      },
      {
        type: 'statement',
        copy: [
          'Thank you for completing the course.',
          'By understanding your responsibilities and acting with integrity, you help protect Customers, support your colleagues, and ensure TFG Insure continues to operate as a compliant and trusted Financial Services Provider.',
        ],
      },
    ],
  },
];
