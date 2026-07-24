import housingkindTitleVisual from '@/assets/images/projects/housingkind/house-lap-1.png'

export type Accent = 'violet' | 'acid' | 'mint'
export type Category = 'Product' | 'Research' | 'Visual'
export type Variant = 'case-study' | 'gallery'

export interface ProcessStep {
  title: string
  body: string
  aiNote?: string
  status?: 'done' | 'in-progress'
}

export interface Project {
  slug: string
  title: string
  tagline: string
  description?: string
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
  titleVisual?: string
  deliverables?: string[]
  links?: { label: string; href: string }[]
}

const modules = import.meta.glob<{ default: string }>('@/assets/images/projects/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
})

function imagesFor(slug: string, primary?: string, exclude: string[] = []) {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/projects/${slug}/`) && !exclude.some((name) => path.endsWith(name)))
    .sort(([a], [b]) => {
      if (primary) {
        if (a.endsWith(primary)) return -1
        if (b.endsWith(primary)) return 1
      }
      return a.localeCompare(b)
    })
    .map(([, mod]) => mod.default)
}

export const projects: Project[] = [
  {
    slug: 'housingkind',
    title: 'Housingkind',
    tagline: 'Making invisible housing policy visible.',
    description:
      'Housingkind is a community-focused platform that combines interactive visualization and AI to make gentle density more approachable and easier to understand.',
    category: ['Research', 'Product'],
    role: 'Product Designer & Design Engineer',
    timeline: 'Aug 2025 — Present',
    team: 'Samantha Popek, Lucy Murdock, Jaden Radcliff, Obid Ochilov — with ViaCDC, AARP & Startingblock',
    tools: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Azure OpenAI', 'GitHub', 'Vercel'],
    accent: 'mint',
    variant: 'case-study',
    featured: true,
    // TODO: placeholder hrefs — swap in the real URLs when ready
    links: [
      { label: 'Live Site', href: '#' },
      { label: 'Figma', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
    problem:
      "Communities say they want walkable, affordable neighborhoods — then organize against the very housing that would make that possible. Across fifteen-plus interviews with developers, city council members, advocates, and residents, one line kept surfacing, almost word for word: people fear what they cannot see. Developers had the data. Residents had the anxiety. Nobody had a shared way to picture what missing-middle housing would actually look like on their own block, so every zoning meeting turned into a fight over imagination instead of a conversation about design.",
    research: [
      '15+ stakeholder interviews spanning developers, city council members, housing advocates, and residents — deliberately including people on both sides of the same rezoning fights',
      'Field visits to ViaCDC, CR8TV House, and a Milwaukee church-to-housing conversion, to ground the research in buildings that already exist rather than renderings that don\'t',
      'Systems mapping across the full development pipeline — financing, permitting, community input, construction — to find exactly where trust breaks down between developers and residents',
      'A comparative teardown of existing housing-visualization tools, most of which turned out to be built for planners, not for the residents who actually show up to public meetings',
    ],
    process: [
      {
        title: 'Research & field engagement',
        body: 'Stakeholder interviews, secondary research, field visits to ViaCDC and CR8TV House.',
        aiNote: 'Synthesized interview themes and identified recurring patterns across sources with the help of Claude.',
      },
      {
        title: 'Systems mapping & personas',
        body: 'Mapped the housing ecosystem and created personas for residents, developers, and advocates.',
        aiNote: 'Pressure-tested persona assumptions and surfaced blind spots with the help of ChatGPT.',
      },
      {
        title: 'Ideation & concept exploration',
        body: 'Explored layout variations and interaction concepts for housing-comparison experiences.',
        aiNote: 'Rapidly generated and evaluated interface concepts with the help of Figma Make (AI).',
      },
      {
        title: 'Branding & design direction',
        body: "Defined Housingkind's visual identity — mark, blue palette, and typography.",
      },
      {
        title: 'Building it',
        body: 'Brought the prototype to life with React, TypeScript, and CSS.',
        aiNote:
          'Used Claude as a coding partner to move fast without losing control of the architecture, and layered in a Microsoft Azure AI–powered chatbot so residents can ask plain-language questions.',
      },
      {
        title: 'Prototype & presentation',
        body: 'Built the prototype and presented it to developers, city alders, and advocates at Transcend.',
        aiNote: 'Structured the stakeholder presentation narrative with the help of Claude as a PM thinking partner.',
      },
      {
        title: 'Usability testing',
        body: "Testing the prototype with real users to catch what the presentation couldn't — where the interface still asks too much of someone seeing it for the first time.",
        status: 'in-progress',
      },
    ],
    decisions: [
      'Orange accents cut through text-heavy housing policy, giving the eye somewhere to land in a domain that\'s usually all paragraphs',
      'Every screen had to pass one test: would someone with zero housing-policy background understand it in five seconds — because that\'s roughly how long people actually spend on a city council handout',
      'Prioritized accessibility and glanceability over comprehensive detail, even when it meant leaving out information a planner would want, because planners weren\'t the audience losing trust',
      'Kept the visualization grounded in real, existing buildings from the Milwaukee and ViaCDC site visits rather than idealized renderings, so skepticism had less to grab onto',
    ],
    outcome:
      "The result is an interactive visualization platform that lets residents step through how missing-middle housing actually fits their block — not a polished rendering, but something closer to a rehearsal for the conversation they're about to have at a public meeting. It was presented at Transcend, UW–Madison's annual graduate showcase, and awarded Best User Experience Design by a panel of startup CEOs — recognized specifically for how directly the research translated into the interface, not for visual polish alone.",
    reflection:
      "This project pushed me past interface design into systems design: stakeholder ecosystems, policy language, the specific mechanics of trust. The real lesson wasn't about UI at all — it was that giving people the right tool to understand something they'd been afraid of can change a mind faster than any amount of persuasive copy.",
    images: imagesFor('housingkind', 'house-lap.png', ['house-lap-1.png']),
    titleVisual: housingkindTitleVisual,
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
      'React',
      'TypeScript',
      'CSS',
      'Microsoft Azure AI',
    ],
  },
  {
    slug: 'dragonfly-yoga',
    title: 'Dragonfly Yoga',
    tagline: 'Turning a dead-end booking flow into a system that keeps people coming back.',
    description:
      'A calm, personalized redesign of Dragonfly Hot Yoga\'s booking app — reimagining onboarding, booking, and waitlists around building a consistent practice.',
    category: ['Product'],
    role: 'UX Designer, Product Designer',
    team: 'Solo project',
    timeline: 'Jan 2026 — Present',
    tools: ['Figma', 'FigJam', 'Claude', 'ChatGPT', 'Miro'],
    accent: 'violet',
    variant: 'case-study',
    featured: true,
    problem:
      "Dragonfly's booking app worked fine right up until a class filled up — and then it just stopped. No waitlist, no suggested alternative, no acknowledgment that the member had shown up at all. That dead end, more than any single interface complaint, was quietly costing the studio its most valuable behavior: people building a consistent practice. How might we help members book and manage classes so they stay motivated to keep showing up, not just today, but next month?",
    research: [
      'Quick access to schedules, live availability, and instructor bios was the #1 mobile ask — most sessions were under 90 seconds, booked between other tasks',
      'Cancellations, reminders, and confirmations were the single biggest source of confusion in a review of member support requests',
      'New members had no clear on-ramp into class types, difficulty levels, or membership options — the app assumed a familiarity with the studio that first-timers simply didn\'t have',
    ],
    process: [
      {
        title: 'Ideation with an AI thinking partner',
        body: "Used Claude to pressure-test problem framings before committing to a direction — deliberately asking it to argue the power user's perspective and the first-timer's perspective back to back, which surfaced edge cases a single-perspective brainstorm would have missed.",
      },
      {
        title: 'Storyboarding',
        body: "Mapped the emotional arc of a first-time attendee, not just their clicks. The anxiety starts before the app is even open — will I be behind everyone else, do I have the right shoes, is this actually the beginner class — and a redesign that only fixed the booking flow would have missed where the real friction started.",
      },
      {
        title: 'Task flows, then wireframes',
        body: 'Sketched five core task flows in FigJam — onboarding, booking a recommended class, handling a full class, managing an existing booking, exploring something new — then wireframed low-fidelity before any visual design, specifically to keep the team arguing about flow instead of color.',
      },
      {
        title: 'High-fidelity, explainability last',
        body: 'Refined the AI recommendation surfaces only once the underlying flows were solid, so "smart" features were explaining a booking flow that already worked, rather than covering for one that didn\'t.',
      },
    ],
    decisions: [
      'Built a "Suggested for You" feed instead of trying to fix every identified problem at once — personalization was the single change most likely to reduce the overwhelm new members reported',
      'Waitlists always pair with a real, bookable alternative class, so hitting a full class is a redirect, not a dead end',
      'Every AI recommendation shows its reasoning in plain language — "Because you\'ve booked Core Flow 4 times this month" — because a recommendation a member doesn\'t trust is worse than no recommendation at all',
      'Kept the visual design deliberately calm — soft palette, generous whitespace, consistent component placement — to match the pace of the activity the app exists to support',
    ],
    outcome:
      'The result is a high-fidelity prototype spanning onboarding, booking, and full-class flows, built mobile-first to match how members actually use it — in short sessions, between other things. Next: usability testing with real Dragonfly members, and refining the recommendation engine\'s explainability before it ever touches production data.',
    reflection:
      "The biggest shift in my own thinking: reducing uncertainty turned out to matter as much as reducing clicks. A member who feels confident walking into a beginner class is a retention outcome, not just a nicety. AI was most useful here as a sparring partner for the thinking — pressure-testing assumptions — not as a shortcut past doing the thinking myself.",
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
      "IU's official safety alerts read as vague — timestamped, jargon-heavy texts that told students something had happened without telling them what to do about it. Existing tools like SafeRide and the campus blue-light network went underused, not because they didn't work, but because most students didn't know they existed or how to reach them under stress. The result: nighttime walks across campus stayed genuinely anxious, for students and for the parents who couldn't see any of it happening.",
    research: [
      'Interviewed students, parents, and university safety authorities in parallel, deliberately looking for where their mental models of "safety" diverged rather than converged',
      "Benchmarked SafeRide, IUPD's 24/7 presence, and IU's existing safety websites to map what already existed before proposing anything new",
      'Ran a manual workaround test before designing anything: two students, iMessage standing in for the eventual app, a real walk across campus at night, real periodic check-ins — to find the emotional and logistical pain points a paper prototype would have missed entirely',
    ],
    process: [
      {
        title: 'Personas',
        body: 'Built two personas around a real tension rather than a generic archetype: the student who wants independence and resents being tracked, and the parent who wants reassurance without a play-by-play. Every later feature decision got run against both.',
      },
      {
        title: 'Low-fidelity',
        body: "Prototypes centered on one non-negotiable: an SOS button that's impossible to miss, even one-handed, even in a panic. Everything else in the layout deferred to that.",
      },
      {
        title: 'High-fidelity',
        body: "Refined for information hierarchy that holds up under stress — bigger targets, fewer decisions per screen, status always visible — because a design that only works when the user is calm doesn't actually work.",
      },
    ],
    decisions: [
      'The buddy system became the differentiator after the workaround test: mark yourself available, request a walk, exchange a meeting point, get periodic "are you okay?" check-ins with automatic escalation to a real contact if you don\'t respond',
      "Verification via mutual campus connections or university ID, because a safety feature that isn't trustworthy just adds a new anxiety on top of the old one",
      'Proposed enhancements came directly from workaround-test friction: customizable meeting points restricted to well-lit, high-traffic locations; matching filters for walking pace, dorm, and major; escalating notification intensity if a check-in goes unanswered',
    ],
    outcome:
      "IUSafe integrates real-time safety alerts, a safe-route and crime map, an emergency contact directory, tip-line reporting, and the buddy system into a single app students would actually open — not a fourth safety tool competing with the three nobody used, but a replacement for all three.",
    reflection:
      "Safety design turned out to be emotional design first and functional design second. The iteration that changed the most about my thinking happened after watching two actors fumble through a fake walk home — not during any whiteboard session.",
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
      "Framed around the UN's 'No Poverty' goal: reliable technology has become a precondition for education and work, but the students and budget-conscious buyers who need it most are priced out of the primary market and underserved by a resale market built on Craigslist-era trust assumptions. The real barrier wasn't just price — interviews kept surfacing the same fear: getting scammed on a used device with no way to check it beforehand.",
    research: [
      'Interviewed students and budget-conscious buyers who regularly shop for used tech, specifically probing for the moment trust breaks down in an existing transaction',
      'Affinity-mapped every response into three clusters — affordability, trust in used-device condition, and desire for a simple buying process — which became the literal backbone of the feature list',
      'Built two personas directly from interview language rather than assumed demographics, so feature debates could be settled by asking "would this person actually do this" instead of guessing',
    ],
    process: [
      {
        title: 'Low-fidelity',
        body: 'Wireframed structure and flow first, deliberately withholding visual polish so early feedback sessions stayed focused on whether the browsing and checkout logic made sense at all.',
      },
      {
        title: 'High-fidelity',
        body: 'Refined in Figma — typography, spacing, and a full component system — once the underlying flows had already been validated, so visual design was finishing a decision, not making one.',
      },
    ],
    decisions: [
      'Cut the selling side of the marketplace entirely partway through — a bidirectional marketplace diluted trust on both sides, and a buying-only platform let every design decision optimize for one job instead of two competing ones',
      'Surfaced product condition and trust signals before price on every listing, because the research said trust was the actual blocker, not affordability alone',
      'Streamlined checkout to the minimum number of steps that still let a price-sensitive buyer feel confident, rather than the minimum that just looked simplest in a wireframe',
    ],
    outcome:
      'The result is a streamlined marketplace for browsing, favoriting, and checking out affordable tech, backed by a full design system — built to prove that removing scope can be a design decision in its own right, not just a compromise.',
    reflection:
      "Good design isn't about adding more. Cutting the selling flow was the single decision that made the rest of the product make sense — everything downstream got simpler once that one thing was gone.",
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
      "Out-of-home advertising gives you one constraint that overrides everything else: a seven-second glance from a moving bus, or a few seconds at a red light. If a design doesn't land instantly — no time to read a paragraph, no time to squint at a logo — it doesn't work, regardless of how it looks in a portfolio.",
    research: [],
    process: [
      {
        title: 'Ting Internet',
        body: 'Bus king ads for NYC transit placements, pairing "fast, reliable internet" messaging with transit-native language like "All Aboard" and "Next Stop" across four colorways.',
      },
      {
        title: 'Law Office of Jack Brackney',
        body: 'High-impact bus ads designed around one rule: legible and persuasive in the seven seconds it takes a bus to pass a bus stop.',
      },
      {
        title: "It's No Yoke",
        body: 'A product campaign built around balance and functionality, with an interactive QR code tie-in to bridge the physical ad into a digital follow-up.',
      },
      {
        title: 'Pike Nurseries',
        body: 'A month-long, museum-inspired campaign across billboard, liveboard, and bus wrap — landscapes presented as framed artwork rather than typical nursery advertising.',
      },
    ],
    decisions: [],
    outcome: 'Four shipped out-of-home campaigns, each built to a real client brief and a real deadline.',
    reflection:
      "The constraint that shaped every decision that summer: if it didn't land in seven seconds, it didn't work. Client feedback consistently praised clarity over cleverness — a lesson that's shaped how I think about hierarchy in interfaces ever since.",
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
