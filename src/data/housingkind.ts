export interface Stat {
  value: string
  label: string
}

export interface Quote {
  quote: string
  attribution?: string
}

export interface RoadmapStep {
  title: string
  body: string
  aiNote?: string
  status?: 'done' | 'in-progress'
}

export const housingkind = {
  meta: {
    title: 'Housingkind',
    tagline: 'A digital visualization platform that helps communities understand how missing middle housing can fit into their neighborhoods.',
    role: 'UX Design & Research',
    timeline: 'Aug 2025 — Present',
    team: 'Samantha Popek, Lucy Murdock, Jaden Radcliff, Obid Ochilov',
    org: 'In partnership with ViaCDC, AARP & Startingblock',
    tools: ['Figma', 'Figma Make', 'Systems Mapping', 'Stakeholder Interviews'],
  },

  atAGlance: {
    challenge:
      'Many communities support affordability and walkability but resist the housing needed to achieve them. Developers need better ways to communicate the value of Missing Middle housing.',
    solution:
      'Housingkind is a digital visualization platform designed to help communities visualize how missing middle and mixed-use housing could integrate into their real neighborhoods.',
    deliverables: [
      'Research & Strategy',
      'UX Research',
      'Systems Thinking',
      'Design Strategy',
      'Operations Management',
      'Product Design',
      'Cross-functional Collaboration',
      'Figma Make',
      'Artificial Intelligence',
    ],
  },

  originStory: {
    body: [
      "This project began in my Advanced Design Thinking for Transformation course, part of a year-long master's program project exploring challenges and opportunities within the housing crisis.",
      "Through the team's research, we noticed a recurring pattern: many people admire vibrant, walkable neighborhoods with a mix of housing types, yet feel hesitant when similar developments are proposed in their own communities. This highlighted an important gap — housing conversations often happen in abstract terms, making it difficult for residents to clearly picture how new housing could realistically fit into the places they already know and care about.",
    ],
    hmw: 'How might we design housing solutions that create greater access while supporting dignity and belonging across Wisconsin?',
    hmwAttribution: '— MD+I Design Horizon',
  },

  researchMethods: {
    methods: [
      {
        title: 'Stakeholder Interviews',
        body: 'Spoke with developers, city council members, housing advocates, and residents to understand different perspectives within the housing system.',
      },
      {
        title: 'Secondary Research',
        body: 'Reviewed housing policies, planning documents, and existing research on gentle density and Missing Middle housing.',
      },
      {
        title: 'Comparative Analysis',
        body: 'Examined existing housing tools, visualization platforms, and community engagement methods to identify gaps and opportunities.',
      },
      {
        title: 'Systems Mapping',
        body: 'Analyzed how policy, community perception, and development processes interact within the housing ecosystem.',
      },
    ],
    photoCaption: 'Sharing early creative ideas and exploring different concepts during the ideation phase.',
  },

  fieldResearch: {
    body: [
      'We prioritized real-world engagement to better understand the housing crisis beyond desk research. As part of the program, we traveled to Milwaukee to meet with organizations working directly in this space.',
      'We spoke with VIA CDC, a key partner in our project, to learn about affordable housing development and community challenges. We also visited the CR8TV House, where we saw how housing and community-building come together in practice.',
      'These experiences helped ground our work in real perspectives, shaping our design decisions and ensuring our solutions were rooted in actual needs.',
    ],
    photos: [
      { caption: 'Got a tour of the CR8TV House and saw the space in action.' },
      { caption: 'Program group photo after touring an abandoned church being transformed into a community coffee shop.' },
      { caption: 'Visited VIA CDC and connected with the community they support.' },
    ],
  },

  personas: {
    intro:
      'The user personas for Housingkind were created from research and stakeholder insights to represent the different people impacted by housing development — residents, developers, and the community advocates working between them. They highlight key goals, concerns, and perceptions around "missing middle" housing, helping uncover common fears and misunderstandings.',
    roles: ['Resident', 'Developer', 'Community Advocate'],
  },

  systemsMap: {
    caption:
      'This map represents the housing ecosystem to better understand the relationships between stakeholders, including developers, policymakers, and community members. It helped us identify key tensions, gaps in communication, and opportunities where design could create meaningful impact.',
    insights: [
      'Housing resistance is often driven by perception, not just policy or cost',
      'People struggle to visualize how new housing fits into their existing neighborhoods',
      "There's a gap between what people say they want (walkability, density) and what they support locally",
      'Trust and communication play a major role in housing acceptance',
      'Real examples and lived experiences are more impactful than abstract explanations',
    ],
    opportunities: [
      'Help communities visualize how missing middle housing fits into their neighborhoods',
      'Make housing concepts and policies more clear and accessible',
      'Create interactive tools to explore different development scenarios',
      'Use immersive experiences to build understanding and reduce resistance',
      'Support developers with better communication tools',
    ],
    boardgamePhotoCaption: 'A 3D model of our boardgame, showing what gentle density could look like in a neighborhood.',
  },

  branding: {
    body: 'The Housingkind brand uses a simple mark of two houses with a heart above them to represent community, trust, and a more human approach to housing. The two homes reflect different people coming together, while the heart emphasizes care and connection. A palette of layered blue tones was chosen to convey trust, clarity, and reliability, and clean, modern typography keeps the brand approachable and easy to understand.',
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Dark Blue', hex: '#2B3A8F' },
      { name: 'Light Blue', hex: '#6FA8DC' },
      { name: 'Orange', hex: '#FF8D29' },
      { name: 'Black', hex: '#000000' },
    ],
    typography: [
      { name: 'Josefin Sans', usage: 'Page headings, section headers' },
      { name: 'Lato', usage: 'Body copy, UI text' },
    ],
  },

  aiProcess: {
    goal: 'Generate and evaluate multiple concepts quickly.',
    usedFor: [
      'Exploring layout variations',
      'Testing visualization approaches',
      'Rapid prototyping of housing comparison experiences',
      'Generating interaction concepts for user feedback sessions',
    ],
    did: [
      'Defined product requirements',
      'Wrote prompts and directed the outputs',
      'Evaluated concepts against user research',
      'Selected, modified, and refined solutions',
      'Created final UX flows and design decisions',
    ],
    flow: [
      { title: 'Research', subtitle: 'Interviews' },
      { title: 'AI exploration', subtitle: 'Figma Make concepts & layouts', highlighted: true },
      { title: 'Iteration', subtitle: 'Refine & evaluate' },
      { title: 'User feedback', subtitle: '' },
      { title: 'Final prototype', subtitle: '' },
    ],
    comparisonNote:
      'AI supported the early exploration — I evaluated the concepts against research, then redesigned and developed the final experience myself.',
    comparison: {
      before: {
        title: 'Before — AI-generated Figma Make concept',
        body: 'An early concept used to quickly explore possible layouts and interactions.',
      },
      after: {
        title: 'After — Final design refined in Figma',
        body: 'I redesigned and developed the experience using research insights, user feedback, and my own UX and visual design decisions.',
      },
    },
  },

  processRoadmap: [
    {
      title: 'Research & field engagement',
      body: 'Stakeholder interviews, secondary research, field visits to ViaCDC and CR8TV House.',
      aiNote: 'Synthesized interview themes and identified recurring patterns across sources with the help of Claude.',
      status: 'done',
    },
    {
      title: 'Systems mapping & personas',
      body: 'Mapped the housing ecosystem and created personas for residents, developers, and advocates.',
      aiNote: 'Pressure-tested persona assumptions and surfaced blind spots with the help of ChatGPT.',
      status: 'done',
    },
    {
      title: 'Ideation & concept exploration',
      body: 'Explored layout variations and interaction concepts for housing comparison experiences.',
      aiNote: 'Rapidly generated and evaluated interface concepts with the help of Figma Make (AI).',
      status: 'done',
    },
    {
      title: 'Branding & design direction',
      body: "Defined Housingkind's visual identity — mark, blue palette, and typography.",
      status: 'done',
    },
    {
      title: 'Prototype & presentation',
      body: 'Built the prototype and presented it to developers, city alders, and advocates at Transcend.',
      status: 'done',
    },
    {
      title: 'Final refinement & case study',
      body: 'Refining the prototype and completing case study documentation for the portfolio.',
      status: 'in-progress',
    },
  ] satisfies RoadmapStep[],

  buildingIt: {
    intro:
      "Alongside the academic project, I've been personally extending Housingkind into a working front-end build — bringing the prototype from Figma into real, responsive code.",
    features: [
      {
        title: 'React + TypeScript',
        body: 'Rebuilding the core experience as a typed, componentized React app instead of a static prototype.',
      },
      {
        title: 'Hand-written CSS',
        body: 'Translating the Figma design system into real, responsive styles.',
      },
      {
        title: 'Azure AI chatbot',
        body: 'Prototyping a Microsoft Azure AI–powered chatbot so residents can ask plain-language questions about a proposal instead of parsing policy text.',
      },
    ],
  },

  decisionNarrative: {
    body: [
      'When taking on the design lead role for Housingkind, my main goal was to keep everything clear, straightforward, and approachable. Since the topic of housing can feel complicated or even intimidating, I wanted the site to feel easy to understand for both residents and developers, no matter their background or familiarity with the topic.',
      "Visually, I made intentional decisions to keep the design friendly and engaging. I introduced a pop of orange in the titles and key phrases to help guide the user's attention and highlight important ideas — adding personality without relying on long blocks of text.",
    ],
    questions: [
      'Is this easy to follow at a glance?',
      'Would someone unfamiliar with housing understand this?',
      'Does this feel welcoming rather than overwhelming?',
    ],
    mockups: [
      { caption: '"We\'re working to shift perception, not advocate for density" — mindset page' },
      { caption: '"Listen & Read: Every neighborhood has a story" — neighbor stories page' },
    ],
  },

  testingFeedback: {
    stats: [
      { value: '[XX]%', label: 'Users understood missing middle housing after interacting with the platform for the first time.' },
      { value: '[X.X]/5', label: 'Average ease-of-use rating from stakeholders navigating the prototype independently.' },
      { value: '[XX]%', label: 'Stakeholders who felt less intimidated by density after seeing the neighborhood visualizations.' },
    ] satisfies Stat[],
    quotes: [
      { quote: 'This could genuinely change how communities...' },
      { quote: "You've done a great job translating systems thinking..." },
      { quote: 'It feels like a real tool developers and communities...' },
    ] satisfies Quote[],
  },

  recognition: {
    body: 'Housingkind was presented at the Transcend Competition, an annual showcase where graduate students pitch real-world design solutions to a panel of CEOs and business leaders across Wisconsin. Competing against teams from across the program, our solution stood out for its clarity, research depth, and real-world applicability. Out of all competing teams, I was individually awarded Best User Experience Design — recognized for delivering a design that was not only visually compelling but grounded in genuine community research and systems thinking.',
    photoCaption: 'Presenting Housingkind at the Transcend Competition with my teammates.',
  },

  outcomes: {
    synthesis:
      "Across 15+ interviews and stakeholder sessions, three consistent themes emerged: people couldn't visualize density, abstract policy language created resistance, and real examples shifted perspective more than data ever could.",
    infoCards: [
      { label: 'Interviews', body: 'With residents, advocates, and developers' },
      { label: 'Partner organizations', body: 'Including VIA CDC, AARP, and Startingblock' },
      { label: 'Stakeholder groups', body: 'Residents, developers, city council, and advocates' },
      { label: 'Recognition', body: 'Tool of its kind presented at the Transcend Competition' },
    ],
    quote: {
      quote: 'People fear what they cannot see.',
      attribution: 'David Gordon, Accessible Housing Developer — key insight from stakeholder interviews',
    } satisfies Quote,
    stats: [
      { value: '[XX]%', label: 'Felt the platform reduced housing confusion' },
      { value: '[XX]%', label: 'Said visuals shifted their perception of density' },
    ] satisfies Stat[],
  },

  reflection: {
    paragraphs: [
      "As this project came together, I've been reflecting on how much this process shaped my understanding of design. Working on a complex, real-world issue like the housing crisis pushed me to think beyond just the interface and consider systems, stakeholders, and the impact of design decisions.",
      "I've learned the importance of grounding design in research and real conversations, especially when dealing with topics that involve community trust and differing perspectives. This project also challenged me to simplify complex ideas and make them more accessible through visualization and interaction.",
      'Throughout the project, I also explored how AI-powered tools such as Figma Make can support the design process — leveraging AI for rapid concept generation and iteration let me explore multiple interface directions more efficiently, evaluate ideas quickly, and focus more time on refining solutions based on research and feedback.',
    ],
    highlight:
      "Successful design is not just about creating interfaces — it's about using the right tools, research, and processes to help people better understand complex challenges and make informed decisions.",
  },
}
