export type Accent = 'violet' | 'acid' | 'mint'
export type Category = 'Product' | 'Research' | 'Visual'
export type Variant = 'case-study' | 'gallery'

export interface ProcessStep {
  title: string
  body: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  category: Category[]
  role: string
  timeline: string
  team?: string
  tools: string[]
  accent: Accent
  variant: Variant
  featured: boolean
  problem: string
  research: string[]
  process: ProcessStep[]
  decisions: string[]
  outcome: string
  reflection: string
  images: string[]
}

const modules = import.meta.glob<{ default: string }>('@/assets/images/projects/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
})

function imagesFor(slug: string) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/projects/${slug}/`))
    .map(([, mod]) => mod.default)
}

export const projects: Project[] = [
  {
    slug: 'housingkind',
    title: 'Housingkind',
    tagline: 'Making invisible housing policy visible — and winning Best UX at Transcend.',
    category: ['Research', 'Product'],
    role: 'UX Design & Research',
    timeline: 'Aug 2025 — Present',
    team: 'Samantha Popek, Lucy Murdock, Jaden Radcliff, Obid Ochilov — with ViaCDC, AARP & Startingblock',
    tools: ['Figma', 'Figma Make', 'Systems Mapping', 'Stakeholder Interviews'],
    accent: 'mint',
    variant: 'case-study',
    featured: true,
    problem:
      "Communities say they want walkable, affordable neighborhoods — then fight the housing that makes them possible. Fifteen-plus interviews with developers, council members, and residents pointed to one root cause: people fear what they cannot see.",
    research: [
      '15+ stakeholder interviews across developers, city council, advocates, and residents',
      'Field visits to ViaCDC, CR8TV House, and a Milwaukee church-to-housing conversion',
      'Systems mapping to expose exactly where trust breaks down between developers and residents',
    ],
    process: [
      {
        title: 'Systems & strategy',
        body: 'Mapped the full stakeholder ecosystem to find where design could actually intervene, not just where it looked good.',
      },
      {
        title: 'Branding',
        body: 'Two houses and a heart: an identity built on trust, not blueprints. Layered blues for reliability, clean type for approachability.',
      },
      {
        title: 'AI-assisted exploration',
        body: 'Used Figma Make to rapid-test layout and visualization directions — every concept still evaluated against research, never on autopilot.',
      },
    ],
    decisions: [
      'Orange accents cut through text-heavy housing policy, guiding the eye to what actually matters',
      'Every screen had to pass one test: would someone with zero housing-policy background get it in five seconds?',
      'Prioritized accessibility and glanceability over comprehensive detail',
    ],
    outcome:
      "An interactive visualization platform that lets residents see how missing-middle housing actually fits their block — not a rendering, a rehearsal for the conversation. Presented at Transcend, awarded Best User Experience Design by a CEO panel.",
    reflection:
      "This one stretched me past interfaces into systems: stakeholder ecosystems, policy language, trust design. Good design here wasn't about the UI — it was about giving people the right tool to understand something they'd been afraid of.",
    images: imagesFor('housingkind'),
  },
  {
    slug: 'dragonfly-yoga',
    title: 'Dragonfly Yoga',
    tagline: 'Turning a dead-end booking flow into a system that keeps people coming back.',
    category: ['Product'],
    role: 'UX Designer, Product Designer — Solo',
    timeline: 'Jan 2026 — Present',
    tools: ['Figma', 'FigJam', 'Claude', 'Miro'],
    accent: 'violet',
    variant: 'case-study',
    featured: true,
    problem:
      "Dragonfly's booking app hit a wall the moment a class filled up — no waitlist, no alternative, just a dead end. HMW help members book and manage classes so they stay motivated to keep showing up?",
    research: [
      'Quick access to schedules and instructor info was the #1 mobile ask',
      'Cancellations, reminders, and confirmations were a recurring confusion hotspot',
      'New members had no clear on-ramp into class types or memberships',
    ],
    process: [
      {
        title: 'Ideation with an AI thinking partner',
        body: 'Used Claude to pressure-test edge cases between power users and first-timers before committing to a direction.',
      },
      {
        title: 'Storyboarding',
        body: 'Mapped the emotional journey of a first-time attendee — the anxiety starts before they even open the app.',
      },
      {
        title: 'Flows, then wireframes',
        body: 'Sketched five core task flows in FigJam, then wireframed low-fidelity before touching any visual design.',
      },
    ],
    decisions: [
      'Built a "Suggested for You" feed instead of trying to solve every problem at once',
      'Waitlists come with real alternatives, so a full class is never a dead end',
      'Every AI recommendation shows its reasoning ("Because you\'ve booked Core Flow 4 times this month") — trust requires explainability',
    ],
    outcome:
      'A high-fidelity prototype spanning onboarding, booking, and full-class flows — calm, minimal, and mobile-first, matching yoga\'s own pace.',
    reflection:
      'Reducing uncertainty turned out to matter as much as reducing clicks. AI was a sparring partner for the thinking, not a shortcut past it.',
    images: imagesFor('dragonfly-yoga'),
  },
  {
    slug: 'iusafe',
    title: 'IUSafe',
    tagline: 'A campus safety app built around the walk home, not just the alert.',
    category: ['Research', 'Product'],
    role: 'UX / Product Designer',
    timeline: 'Jan — May 2025 · HCI Capstone',
    team: 'Sam Popek, Sui Sung, Kerem Keskin',
    tools: ['Figma', 'FigJam', 'Miro'],
    accent: 'violet',
    variant: 'case-study',
    featured: true,
    problem:
      "IU's safety texts read as vague, the tools that already existed went unused, and nighttime walks across campus stayed genuinely anxious — for students and their parents both.",
    research: [
      'Interviewed students, parents, and university authorities in parallel to find where their needs diverged',
      'Benchmarked SafeRide, IUPD, and IU\'s existing safety sites',
      'Ran a manual workaround test: two students, iMessage standing in for the app, a real walk, real check-ins — to pressure-test the buddy system before building it',
    ],
    process: [
      {
        title: 'Personas',
        body: 'Split the tension precisely: students wanting independence, parents wanting reassurance without overload.',
      },
      {
        title: 'Low-fidelity',
        body: 'Prototypes centered one thing — an SOS button you literally cannot miss.',
      },
      {
        title: 'High-fidelity',
        body: 'Refined for one job: information hierarchy that works when you\'re stressed, not just when you\'re calm.',
      },
    ],
    decisions: [
      'The buddy system became the differentiator: mark yourself available, request a walk, get periodic "are you okay?" check-ins with automatic escalation if you don\'t answer',
      'Verification via mutual connections or university ID — trustworthy, not just fast',
    ],
    outcome:
      'IUSafe integrates real-time alerts, safe-route maps, a crime map, emergency contacts, tip reporting, and the buddy system into one place students actually open.',
    reflection:
      "Safety design isn't just functional design — it's emotional design. The iteration that mattered most happened after watching two actors fumble through a fake walk home.",
    images: imagesFor('iusafe'),
  },
  {
    slug: 'teklo',
    title: 'Teklo',
    tagline: 'Cutting a marketplace in half to make it trustworthy.',
    category: ['Research', 'Product'],
    role: 'UX Design & Research',
    timeline: 'Aug 2025 — Present',
    team: 'Sam Popek, Evan Cass',
    tools: ['Figma', 'FigJam', 'Miro'],
    accent: 'mint',
    variant: 'case-study',
    featured: false,
    problem:
      "Framed around the UN's 'No Poverty' goal: reliable technology is priced out of reach for the people who most need it to access education and work.",
    research: [
      'Interviews with students and budget-conscious buyers surfaced one theme repeatedly: trust when buying used devices',
      'Affinity mapping grouped responses into affordability, trust, and a simple buying process',
      'Two personas built directly from interview language, not assumptions',
    ],
    process: [
      {
        title: 'Low-fidelity',
        body: 'Wireframes focused purely on structure and flow before any visual decisions.',
      },
      {
        title: 'High-fidelity',
        body: 'Refined in Figma — typography, spacing, and a full component system.',
      },
    ],
    decisions: [
      'Cut the selling side entirely — a bidirectional marketplace diluted trust, a buying-only platform sharpened it',
      'Product information surfaced up front, because trust was the research finding, not an afterthought',
    ],
    outcome:
      'A streamlined marketplace for browsing, favoriting, and checking out affordable tech — with a full design system behind it.',
    reflection:
      "Good design isn't about adding more. Cutting the selling flow was the single decision that made the rest of the product make sense.",
    images: imagesFor('teklo'),
  },
  {
    slug: 'outfront-media-graphics',
    title: 'OUTFRONT Media Graphics',
    tagline: 'Four brands, four out-of-home campaigns, one summer.',
    category: ['Visual'],
    role: 'Graphic Design Intern',
    timeline: 'Summer 2023',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    accent: 'acid',
    variant: 'gallery',
    featured: false,
    problem:
      'Out-of-home advertising gives you one constraint that overrides everything else: a 7-second glance from a moving bus. If it doesn\'t land instantly, it doesn\'t work.',
    research: [],
    process: [
      { title: 'Ting Internet', body: 'Bus king ads for NYC transit — "All Aboard" messaging across four colorways.' },
      { title: 'Law Office of Jack Brackney', body: 'High-impact bus ads designed to read clearly in a 7-second window.' },
      { title: "It's No Yoke", body: 'Product campaign built around balance, with an interactive QR code tie-in.' },
      { title: 'Pike Nurseries', body: 'Month-long, museum-inspired campaign across billboard, liveboard, and bus wrap.' },
    ],
    decisions: [],
    outcome: 'Four shipped out-of-home campaigns, each built to a real client brief and a real deadline.',
    reflection: 'The constraint that shaped everything: if it didn\'t land in 7 seconds, it didn\'t work.',
    images: imagesFor('outfront-media-graphics'),
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
