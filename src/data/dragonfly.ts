export const dragonfly = {
  hero: {
    description:
      'Redesigning the Dragonfly Hot Yoga booking app — from a dead end when a class fills up to a calm, personalized path back to the mat.',
  },

  overview: {
    intro: [
      "This redesign makes Dragonfly's booking experience modern, personalized, and easy to navigate — simplifying how members book, set preferences, and handle a full class. Claude and ChatGPT were thinking partners throughout. It's still ongoing: next is the AI recommendation prototype, then usability testing.",
    ],
    hmw: 'How might we help Dragonfly members and newcomers easily explore, book, and manage classes so they feel motivated to maintain a consistent yoga practice?',
  },

  challenge: {
    intro:
      'The existing Dragonfly experience is a video-on-demand site bolted onto a booking flow — not a product built around how members actually decide to show up. It\'s the experience I set out to replace.',
    currentApp: 'Dragonfly Hot Yoga\'s current on-demand and booking experience — the starting point for this redesign.',
    supporting: [
      'The app interface feels outdated and not very user-friendly',
      'Booking a class is more complicated than it should be',
      'Important information is not clearly organized or easy to find',
      'The app lacks personalization (no easy way to set preferences for classes or instructors)',
      'When classes are full, the experience feels like a dead end',
      'Users are not guided toward alternative options or next steps',
    ],
  },

  keyInsights: {
    lead: 'People don\'t abandon a practice because a class was hard. They abandon it because the app made showing up feel harder than it needed to be.',
    items: [
      {
        number: '01',
        title: 'Quick access to class information',
        body: 'Users want to quickly see class schedules, availability, and instructor information on their phones.',
        icon: 'Smartphone',
      },
      {
        number: '02',
        title: 'A confusing booking experience',
        body: 'Booking, cancellations, and class reminders can feel confusing or inconvenient with the current experience.',
        icon: 'CalendarX2',
      },
      {
        number: '03',
        title: 'Onboarding for new members',
        body: 'New members need an easy way to explore class types, membership options, and beginner-friendly sessions.',
        icon: 'UserPlus',
      },
    ],
  },

  designGoals: [
    { title: 'Reduce user frustration', icon: 'Frown' },
    { title: 'Simplify class booking', icon: 'CalendarCheck' },
    { title: 'Improve onboarding', icon: 'Compass' },
    { title: 'Encourage habit building', icon: 'Repeat' },
    { title: 'Create a calming digital experience', icon: 'Flower2' },
  ],

  ideationProcess: {
    earlyIdeation: {
      title: 'Early ideation',
      body: 'I started by reviewing my research and used Claude as a brainstorming partner to rapidly explore problem framings before committing to a direction. I prompted it to challenge my assumptions and suggest edge cases I hadn\'t considered, like how power users versus first-time members would experience the same flow differently. This AI-assisted ideation helped me move faster through divergent thinking so I could spend more time in convergent design decisions. From there, I grouped ideas into themes like scheduling, personalization, and new member support — a wide net of five themes and twenty-five individual ideas — which led to the "Suggested for You" personalized feed concept.',
    },
    conceptExploration: {
      title: 'Concept exploration',
      body: 'Three directions came out of that board worth developing further, each solving a different problem. The work from here was figuring out which problem actually mattered most to members.',
      concepts: [
        {
          name: 'Suggested for You feed',
          status: 'Shipped',
          body: 'Personalizes the home screen around booking history and stated goals. Became the backbone of the final AI recommendations.',
        },
        {
          name: 'Smart Scheduler',
          status: 'Shipped',
          body: 'Availability-based suggestions and recurring bookings, built to remove manual scheduling friction. Folded into the final booking and waitlist flows.',
        },
        {
          name: 'Yoga Challenges with friends',
          status: 'Deprioritized',
          body: 'A social layer to gamify consistency. Cut early — it was solving a different problem than the one members were actually telling me about.',
        },
      ],
    },
    storyboard: {
      title: 'Storyboard',
      body: 'Before I sketched a single screen, I storyboarded the emotional arc of a first-time visitor — from "am I ready for this?" to walking out the door feeling capable. Eight panels trace a member through doubt, checking the app for reassurance, finding beginner-specific guidance, and finally attending class. The anxiety starts well before the booking screen ever loads, which meant the interface had a job to do long before onboarding: reduce the stakes of showing up at all, not just make booking faster.',
      takeaway: 'The interface had a job to do before onboarding even started: lower the emotional stakes of showing up.',
    },
    taskFlows: {
      title: 'Task flows',
      body: 'Mapping the core task flows by hand — onboarding & personalization, booking a class, and managing an existing booking — before touching Figma kept the early debates about structure, not visual polish.',
    },
    sketches: {
      title: 'Screen sketches',
      body: 'These three sketches mapped onboarding, the home feed, and the booking flow before any visual design existed. What changed most between sketch and final: the amount of choice on screen at once — early versions asked for too much, too soon, and each pass cut it down further.',
    },
    wireframe: {
      title: 'Wireframe',
      body: 'Low-fidelity, on purpose. This stage was about experimenting with layout options, testing whether the navigation actually held up across ten-plus screens, and refining interaction patterns — confirmation states, tab structure, card hierarchy — before a single color decision got made.',
      why: 'Grayscale kept feedback sessions focused on whether a flow made sense, not whether someone liked the shade of orange on a button.',
    },
    aiDesign: {
      title: 'AI-powered feature: Smart class recommendations',
      body: 'To bring the AI feature to life, I designed two key screens. On the home screen, an "AI picks for you" badge and a "Why these?" link sit alongside the Suggested for You section, with the top recommendation including a short reasoning line, "Because you\'ve booked Core Flow 4 times this month," so the suggestion feels personal rather than generic. Tapping "Why these?" leads to a dedicated Suggested for You page, where a banner explains the logic in plain language and each class card shows a match percentage alongside a specific reason, such as "Matches your strength goals" or "Good for recovery day."',
      why: 'AI-driven suggestions can feel arbitrary if users don\'t understand why they\'re being shown. Surfacing the reasoning builds trust and gives members a clearer sense of control over their experience.',
    },
  },

  claudeProcess: {
    goal: 'get the AI recommendation feature to feel trustworthy, not just smart.',
    usedFor: [
      'Pressure-testing whether the reasoning copy read as helpful or as surveillance',
      'Exploring how to surface "why this recommendation" without another modal or hidden menu',
      'Iterating on the hotspot-callout pattern used to explain the feature on this page',
    ],
    did: [
      'Rewrote the plain-language reasoning until it sounded like a person, not a data dump',
      'Decided against showing a bare confidence score — a percentage with no explanation is just a bigger "trust me"',
      'Kept the final call on tone and hierarchy — Claude Code proposed options, I picked the one that matched the rest of the app',
    ],
  },

  finalExperience: [
    {
      title: 'Welcome Experience',
      body: 'Illustrated onboarding introduces the studio experience, sets the tone of the brand, and encourages new members to begin their wellness journey.',
    },
    {
      title: 'Personalized Onboarding',
      body: 'New members personalize their experience by selecting their location, fitness goals, and skill level, allowing the app to deliver recommendations tailored to their needs.',
    },
    {
      title: 'AI-Powered Recommendations',
      body: 'Personalized class suggestions are generated using attendance history, fitness goals, and progress to help members discover their next session with confidence.',
    },
    {
      title: 'Effortless Class Booking',
      body: 'A simplified booking flow makes it easy to browse schedules, compare classes, and reserve a spot in just a few taps.',
    },
    {
      title: 'Waitlist Without the Frustration',
      body: 'When classes reach capacity, members can instantly join the waitlist and receive updates instead of repeatedly checking availability.',
    },
    {
      title: 'On-Demand Learning Library & Profile',
      body: 'Members can browse a curated library of free yoga, barre, and wellness videos, check the latest studio events, and manage their profile — preferences, history, and all — in one place.',
    },
  ],

  onboarding: {
    intro:
      'This is where the visual system does its heaviest lifting — nine screens carrying a new member from a cold open to a personalized home feed, using warm illustration, a confident color palette, and copy that sounds like a person instead of a form.',
    captions: [
      'Welcome — the first brand moment a new member sees.',
      'Intro — "Learning to Relax," setting the emotional tone before any sign-up friction.',
      'Intro — "Your Healthy," building toward the habit, not just the class.',
      'Intro — "Your Yoga," finding a pace instead of a pressure.',
      'Sign-up — email, Facebook, or Google, kept to one clear decision.',
      'Account setup — connecting an email without making it feel like paperwork.',
      'Location — choosing a home studio in two taps.',
      'Personalization — "What\'s your goal?" the first input the recommendation engine actually uses.',
      'Personalization — experience level, so day one never feels like a guru\'s class.',
    ],
  },

  designSystem: {
    intro:
      'The direction for this redesign: minimal and clean, reflecting yoga\'s relaxing nature rather than fighting it. Soft color, generous whitespace, and consistent placement everywhere the app asks something of the user.',
    colors: [
      { name: 'Sunset Orange', hex: '#F47B2C' },
      { name: 'Espresso Brown', hex: '#713720' },
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Amber Gold', hex: '#DD9933' },
      { name: 'Stone Gray', hex: '#6D6D6D' },
    ],
    principles: [
      { title: 'Components', body: 'A small, reusable set of cards, pills, and steps — consistent across every flow.' },
      { title: 'Buttons & spacing', body: 'Rounded, touch-friendly targets with generous padding, so nothing feels cramped mid-flow.' },
      { title: 'Accessibility', body: 'Warm, high-contrast text pairings and calm, reduced-motion-aware transitions throughout.' },
    ],
  },

  prototype: {
    body: 'An interactive Figma prototype walks through all three core flows — onboarding, booking, and waitlist management — end to end.',
  },

  impact: {
    intro:
      'This project is still in progress, so "impact" here means what the redesign is built to solve, not a measured result yet.',
    solved: [
      'Replaced the dead-end full-class experience with a real, bookable alternative',
      'Gave new members an actual on-ramp instead of assuming prior familiarity',
      'Made every AI recommendation explain itself in plain language',
    ],
    benefits: [
      'Less anxiety before a class even starts',
      'Fewer abandoned bookings from confusing cancellations and reminders',
      'A faster path from first visit to consistent practice',
    ],
    stakeholderGains: [
      'A prototype the studio can react to and test with real members',
      'A booking flow built to reduce support requests, not just look nicer',
    ],
  },

  reflection: {
    lessonsLearned: [
      'Problem clarity has to come before solutions — I started with a broad problem space and learned to narrow it deliberately before sketching anything.',
      'Iteration beats perfection — staying low-fidelity longer let me explore more directions and gather feedback faster.',
      'AI was most useful as a thinking partner for pressure-testing assumptions, not as a shortcut past doing the thinking myself.',
    ],
    whatIdImprove: [
      'Run real usability testing with Dragonfly members instead of relying on my own experience as a member',
      'Keep refining the AI recommendation logic so the reasoning holds up under more edge cases',
      'Revisit the social "Yoga Challenges" concept once the core flows are validated',
    ],
    keyTakeaways: [
      'Emotional design matters as much as functional design — reducing uncertainty was just as important as completing a task',
      'Explainability is essential any time AI is part of the experience, not a nice-to-have',
      'Balancing user needs with business goals is a skill, not a given',
    ],
  },
}
