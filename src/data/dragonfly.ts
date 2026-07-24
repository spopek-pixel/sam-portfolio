export const dragonfly = {
  hero: {
    description:
      'Redesigning the Dragonfly Hot Yoga booking app — from a dead end when a class fills up to a calm, personalized path back to the mat.',
  },

  overview: {
    intro:
      "Dragonfly Hot Yoga's booking app worked fine right up until a class filled up — and then it just stopped. No waitlist, no suggested alternative, no acknowledgment that a member had even shown up looking for a spot. This is a solo UX and product redesign of that experience, built around one goal: help people build a consistent practice, not just complete a booking.",
    hmw: 'How might we help Dragonfly members and newcomers easily explore, book, and manage classes so they feel motivated to maintain a consistent yoga practice?',
  },

  challenge: {
    intro: 'The existing app created friction at nearly every step of the booking journey.',
    currentApp: 'Dragonfly Hot Yoga\'s current on-demand and booking experience — the starting point for this redesign.',
    painPoints: [
      {
        title: 'Information access',
        body: 'Members needed fast, mobile access to schedules, live availability, and instructor bios — and didn\'t have it.',
      },
      {
        title: 'Booking confusion',
        body: 'Cancellations, reminders, and confirmations were the single biggest source of confusion in member support requests.',
      },
      {
        title: 'Onboarding gaps',
        body: 'New members had no clear path into class types, difficulty levels, or memberships — the app assumed familiarity a first-timer didn\'t have.',
      },
    ],
    supporting: [
      'Outdated interface that felt unfriendly to use',
      'An overly complicated class-booking process',
      'Poorly organized information hierarchy',
      'No personalization — no saved preferences, no favorite instructors',
      'A hard dead end whenever a class reached capacity',
    ],
  },

  research: {
    cards: [
      {
        title: 'User interviews',
        body: 'Research grounded in my own experience as an active studio member, supplemented by conversations with other regulars and newcomers.',
      },
      {
        title: 'Landscape analysis',
        body: 'A close read of the existing app and comparable studio booking tools to see exactly where the current experience broke down.',
      },
      {
        title: 'Personas',
        body: 'Built around two real tensions: the committed regular optimizing for speed, and the first-timer who needs to be told, not assumed to already know.',
      },
      {
        title: 'Journey mapping',
        body: 'Mapped the emotional arc from opening the app to walking into class — anxiety spikes well before the booking screen ever loads.',
      },
      {
        title: 'Key insights',
        body: 'Three patterns kept surfacing: information access, booking confusion, and onboarding gaps — see The Challenge above.',
      },
    ],
    insight:
      'People don\'t abandon a practice because a class was hard. They abandon it because the app made showing up feel harder than it needed to be.',
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
      body: 'Started broad on Miro — five different thematic directions and twenty-five individual ideas mapped out before narrowing anything down.',
    },
    conceptExploration: {
      title: 'Concept exploration',
      body: 'Narrowed to three directions worth prototyping further.',
      concepts: ['Suggested for You feed', 'Smart Scheduler', 'Yoga Challenges with friends'],
    },
    storyboard: {
      title: 'Storyboard',
      body: 'Storyboarded the emotional arc of a first-time visitor, from opening the app to walking through the studio door — the anxiety starts well before the booking screen loads.',
    },
    taskFlows: {
      title: 'Task flows',
      body: 'Mapped the core task flows by hand before touching Figma: onboarding & personalization, booking a class, and managing an existing booking.',
    },
    sketches: {
      title: 'Screen sketches',
      body: 'Rough hand sketches of the three highest-priority screens, kept loose on purpose so early feedback stayed focused on structure, not polish.',
    },
    wireframe: {
      title: 'Wireframe',
      body: 'Low-fidelity structure built to test information hierarchy and navigation before any visual design decisions entered the picture.',
    },
    aiDesign: {
      title: 'AI-assisted design in Figma',
      body: 'Used AI tooling inside Figma to rapidly generate layout variations for the booking and recommendation screens, which I then evaluated against research, modified, and refined into the final direction — AI accelerated exploration, but every decision that shipped was mine.',
    },
  },

  finalExperience: [
    {
      title: 'Personalized onboarding',
      body: 'New members set goals and experience level up front, so the app can personalize from the very first session instead of the tenth.',
    },
    {
      title: 'Class booking',
      body: 'A streamlined flow with clear CTAs and the class information that actually matters, front and center.',
    },
    {
      title: 'AI recommendations',
      body: 'An "AI picks for you" feed with plain-language reasoning — "Because you\'ve booked Core Flow 4 times this month" — and a page explaining the match.',
    },
    {
      title: 'Waitlist improvements',
      body: 'A full class opens a pop-up with real, bookable alternatives instead of a dead end — the single change built to fix the app\'s biggest complaint.',
    },
    {
      title: 'Schedule management',
      body: 'Reminders, cancellations, and confirmations rebuilt to be unambiguous — no more guessing whether a booking actually went through.',
    },
    {
      title: 'User profile',
      body: 'Preferences, favorite instructors, and booking history in one place, so the app remembers what a member already told it.',
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
