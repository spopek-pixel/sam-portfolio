import housingkindTitleVisual from '@/assets/images/projects/housingkind/house-lap-1.png'
import aivyHero from '@/assets/images/projects/aivy/aivy-hero.jpg'
import { aivy } from '@/data/aivy'
import { myoutfrontWireframes, type WireframeExplorationData } from '@/data/myoutfrontWireframes'
import { myoutfrontCreativeReview, type CreativeReviewScreen } from '@/data/myoutfrontCreativeReview'
import myoutfrontUserStories from '@/assets/images/projects/myoutfront/user-stories-map.png'
import myoutfrontSketchUpload from '@/assets/images/projects/myoutfront/lofi-sketch-upload-verify.png'
import myoutfrontSketchNotifications from '@/assets/images/projects/myoutfront/lofi-sketch-notifications-timeline.png'
import { bumbleConcept } from '@/data/bumbleConcept'

export type Accent = 'violet' | 'acid' | 'mint'
export type Category = 'Product' | 'Research' | 'Visual'
export type Variant = 'case-study' | 'gallery'

export interface ProcessStep {
  title: string
  body: string
  aiNote?: string
  status?: 'done' | 'in-progress'
}

export interface InterviewCard {
  team: string
  question: string
  response: string
  opportunity?: string
}

export interface SketchItem {
  src: string
  caption: string
}

export interface ProjectSummary {
  problem: string
  challenge: string
  solution: string
}

export interface UserStoriesData {
  description: string[]
  image: string
}

export interface LowFidelityData {
  description: string[]
  sketches: SketchItem[]
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
  hidden?: boolean
  summary?: ProjectSummary
  problem: string
  research: string[]
  process: ProcessStep[]
  decisions: string[]
  outcome: string
  reflection: string
  interviews?: InterviewCard[]
  wireframes?: WireframeExplorationData
  creativeReview?: CreativeReviewScreen[]
  userStories?: UserStoriesData
  lowFidelity?: LowFidelityData
  images: string[]
  titleVisual?: string
  coverVideo?: string
  deliverables?: string[]
  links?: { label: string; href: string }[]
}

const modules = import.meta.glob<{ default: string }>('@/assets/images/projects/**/*.{png,jpg,jpeg,webp,gif}', {
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
    tagline:
      'Making invisible housing policy visible, with an AI-powered platform that turns missing-middle housing into something residents can actually picture.',
    category: ['Research', 'Product'],
    role: 'Product Designer & Design Engineer',
    timeline: 'Aug 2025 - Present',
    team: 'Samantha Popek, Lucy Murdock, Jaden Radcliff, Obid Ochilov, with ViaCDC, AARP & Startingblock',
    tools: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'Azure OpenAI', 'GitHub', 'Vercel', 'Figma Make', 'Claude Code'],
    accent: 'mint',
    variant: 'case-study',
    featured: true,
    summary: {
      problem:
        "Communities say they want walkable, affordable housing, then organize against the very projects that would build it, because residents can't picture what missing-middle housing would actually look like on their own block.",
      challenge:
        'Give residents, developers, and city officials a shared, credible way to visualize housing options grounded in real buildings, not idealized renderings, understandable with zero policy background in five seconds.',
      solution:
        'An AI-powered interactive visualization platform, backed by 15+ stakeholder interviews and real building data from Milwaukee site visits, that turns abstract zoning debates into something residents can actually see and react to.',
    },
    // TODO: swap in the real GitHub URL when ready
    links: [
      { label: 'Live Site', href: 'https://www.housingkind.org/' },
      {
        label: 'Figma',
        href: 'https://www.figma.com/proto/4f3RqPmsUHkB4WyuQmWT2n/Housingkind--Design-System?node-id=109-659&p=f&t=K32mIy2NFEQV0FCN-1&scaling=scale-down&content-scaling=fixed&page-id=2%3A4&starting-point-node-id=109%3A596',
      },
      { label: 'GitHub', href: '#' },
    ],
    problem:
      "Communities say they want walkable, affordable neighborhoods, then organize against the very housing that would make that possible. Across fifteen-plus interviews with developers, city council members, advocates, and residents, one line kept surfacing, almost word for word: people fear what they cannot see. Developers had the data. Residents had the anxiety. Nobody had a shared way to picture what missing-middle housing would actually look like on their own block, so every zoning meeting turned into a fight over imagination instead of a conversation about design.",
    research: [
      '15+ stakeholder interviews spanning developers, city council members, housing advocates, and residents, deliberately including people on both sides of the same rezoning fights',
      'Field visits to ViaCDC, CR8TV House, and a Milwaukee church-to-housing conversion, to ground the research in buildings that already exist rather than renderings that don\'t',
      'Systems mapping across the full development pipeline (financing, permitting, community input, construction) to find exactly where trust breaks down between developers and residents',
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
        body: "Defined Housingkind's visual identity: mark, blue palette, and typography.",
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
        body: "Testing the prototype with real users to catch what the presentation couldn't: where the interface still asks too much of someone seeing it for the first time.",
        status: 'in-progress',
      },
    ],
    decisions: [
      'Orange accents cut through text-heavy housing policy, giving the eye somewhere to land in a domain that\'s usually all paragraphs',
      'Every screen had to pass one test: would someone with zero housing-policy background understand it in five seconds, because that\'s roughly how long people actually spend on a city council handout',
      'Prioritized accessibility and glanceability over comprehensive detail, even when it meant leaving out information a planner would want, because planners weren\'t the audience losing trust',
      'Kept the visualization grounded in real, existing buildings from the Milwaukee and ViaCDC site visits rather than idealized renderings, so skepticism had less to grab onto',
    ],
    outcome:
      "The result is an interactive visualization platform that lets residents step through how missing-middle housing actually fits their block: not a polished rendering, but something closer to a rehearsal for the conversation they're about to have at a public meeting. It was presented at Transcend, UW–Madison's annual graduate showcase, and awarded Best User Experience Design by a panel of startup CEOs, recognized specifically for how directly the research translated into the interface, not for visual polish alone.",
    reflection:
      "This project pushed me past interface design into systems design: stakeholder ecosystems, policy language, the specific mechanics of trust. The real lesson wasn't about UI at all. It was that giving people the right tool to understand something they'd been afraid of can change a mind faster than any amount of persuasive copy.",
    images: imagesFor('housingkind', 'house-lap.png', ['house-lap-1.png']),
    titleVisual: housingkindTitleVisual,
    deliverables: [
      'Stakeholder Interviews',
      'UX Research',
      'Systems Mapping',
      'Persona Development',
      'Design Strategy',
      'Information Architecture',
      'Product Design',
      'Design Systems',
      'Accessibility (WCAG)',
      'Rapid Prototyping',
      'Figma Make',
      'Cross-functional Collaboration',
      'Operations Management',
      'React',
      'TypeScript',
      'CSS',
      'Microsoft Azure AI',
      'Chatbot Design',
      'Usability Testing',
      'Public Presentation',
    ],
  },
  {
    slug: 'bumble-bff-concept',
    title: 'Bumble BFF — Concept Campaign',
    tagline:
      "A self-initiated concept campaign for Bumble's BFF mode: one idea, adapted across OOH, social, and push. Not commissioned by Bumble.",
    category: ['Visual'],
    role: 'Concept Copywriter & Designer',
    timeline: 'Self-initiated, 2026',
    team: 'Solo, self-initiated',
    tools: ['Figma', 'Copywriting', 'Brand Strategy'],
    accent: 'acid',
    variant: 'gallery',
    featured: true,
    links: [
      {
        label: 'Figma',
        href: 'https://www.figma.com/design/Nq3RO79WiHhQtcsmAAiRiX/Bumble-BFF-Concept-Campaign?node-id=0-1&t=qo65YtxVvInPF5lR-1',
      },
    ],
    problem:
      "Most \"meet new people\" advertising talks around the actual discomfort of making friends as an adult instead of naming it directly.",
    research: [],
    process: [],
    decisions: [],
    outcome:
      'A five-touchpoint concept campaign (billboard, bus wrap, transit shelter, social, and push), one idea carried in one voice across every context, built to demonstrate campaign and copy thinking, not a delivered Bumble asset.',
    reflection: bumbleConcept.rationale,
    images: imagesFor('bumble-bff-concept', 'bff-billboard.png'),
    deliverables: bumbleConcept.skills,
  },
  {
    slug: 'myoutfront',
    title: 'MyOutfront.com',
    tagline:
      "A UX/UI internship project designing MyOutfront.com with OUTFRONT's design team: a self-service ad-submission flow and the payment and account dashboard behind it, so clients stop waiting on internal teams for either.",
    category: ['Product', 'Research'],
    role: 'UX/UI Design Intern',
    timeline: 'June - August 2024',
    team: 'UX Design Team, OUTFRONT Media',
    tools: ['Figma', 'Miro'],
    accent: 'violet',
    variant: 'case-study',
    featured: true,
    links: [
      { label: 'Live Site', href: 'https://myoutfront.com/' },
      {
        label: 'Watch Demo',
        href: 'https://assets.contentstack.io/v3/assets/bltbeaed4aed52c223a/bltb608d2f9587994b5/68cb0bfeedbc2520da407ad0/outfront-payment-portal-demo-v02.mp4',
      },
    ],
    summary: {
      problem:
        'Ad submissions and account management both leaned on internal teams for every check, and eight different departments had a stake in the same client dashboard, often for conflicting reasons.',
      challenge:
        'Design one coherent client platform for two different jobs (submitting ads, managing the account behind them) by reconciling requirements across teams that had never designed for the same screen before.',
      solution:
        'A self-service ad-submission flow and payment/account dashboard, built with the design team from eight rounds of internal interviews to a converged wireframe direction, plus a creative-review flow that treats a failed check as carefully as a passed one.',
    },
    problem:
      "MyOutfront.com had to work as one coherent client platform for two very different jobs: submitting ads, and managing the account behind them (invoices, payment methods, credits, claims, and support). Neither surface could be designed by looking only at what the client saw. I worked with OUTFRONT's design team on both: an ad-submission flow that, at the time, leaned on other internal teams for every sizing check and content review, so a single flagged ad could sit stalled for days; and a payment and account dashboard that eight different internal teams (ad transactions, contracts and payments, campaign management, customer support, creative services, inventory and availability, proof of performance, and account management) all had a stake in, often for conflicting reasons. Getting either surface right meant reconciling requirements across teams that had never had to design for the same screen before.",
    research: [
      "The ad transaction team's actual bottleneck wasn't the upload itself, it was manual content and sizing review; they asked for automated spec validation, not a nicer drag-and-drop screen",
      "Payment confusion traced back to one visible gap: contract line items and the billed amount never appeared side by side anywhere a client could see, so 'why was I charged this' became a support ticket every time",
      "Interviewing all eight internal teams instead of the two our design team usually touched surfaced requirements we would have otherwise missed entirely: live inventory holds, proof-of-performance photo matching, an issues log distinct from a billing dispute",
      "Competitive analysis and benchmarking against other self-service platforms pointed toward the same pattern the internal interviews did: clients trusted real-time status over a polished landing page",
      'Trend and mood-board research set the visual direction: minimal and brand-true, but calm enough to hold dense financial and campaign data without reading like a spreadsheet',
    ],
    process: [
      {
        title: 'Research & inspiration',
        body: 'Gathered competitive, benchmarking, trend, and mood-board research, then brainstormed concepts with the UX design team and presented my own design ideas and inspiration.',
      },
      {
        title: 'Internal stakeholder interviews',
        body: "Interviewed eight internal teams, most of whom our design team had never designed for before, to understand how sizing errors, payments, inventory, proof of performance, and support actually get handled today, not just how the client-facing side was supposed to work.",
      },
      {
        title: 'Low-fidelity prototype',
        body: 'Sketched the core pages, structure, and navigation for ad submissions, contract views, and upload-status tracking, directly informed by the research phase.',
      },
      {
        title: 'User stories & storyboarding',
        body: 'Mapped every branch of the submission journey with the team, including the ideal path (an ad that passes guidelines) and the harder one (an ad that gets flagged, with feedback, guideline links, support access, and a resubmission path).',
      },
      {
        title: 'Dashboard wireframe exploration',
        body: 'Explored two directions per screen for the payment and account dashboard with the team (a dense metrics grid vs. a balance-first view, a stepped wizard vs. a single-page checkout, and more), then converged on one direction per screen based on what clients actually asked for.',
      },
      {
        title: 'High-fidelity prototype',
        body: 'Refined color, typography, and iconography across both surfaces, then built out interactive states for buttons, inputs, and notifications, including how success and error feedback would actually look.',
      },
      {
        title: 'Final presentation',
        body: 'Tested and refined the high-fidelity designs with team feedback, then presented the final prototype to stakeholders.',
      },
    ],
    decisions: [
      "Designed the dashboard and the ad-submission flow as one system, not two, sharing the same navigation, status language, and notification pattern, so moving between 'is my ad live' and 'is my invoice paid' didn't feel like switching products",
      "Interviewed all eight internal teams directly instead of assuming their requirements from documentation, then worked with the design team to reconcile conflicting asks (Support wanted fewer clicks, Payments wanted more confirmation steps) into a single flow",
      "Took the balance-first dashboard direction forward and dropped the denser metrics-grid option: the research kept pointing to one question clients actually had (what do I owe, and can I fix it right now), and that only stayed true when the answer led every screen",
      'Storyboarded the declined-ad path as thoroughly as the successful one, with clear feedback, guideline links, and a direct resubmission flow, so no interaction was left as a dead end',
    ],
    outcome:
      "MyOutfront.com is still in progress at OUTFRONT Media, so only select snippets can be shared rather than the full product. What's shown here spans both surfaces I worked on with the team: the ad-submission flow for a client who meets all guidelines (enhanced notifications, a streamlined upload, and progress tracking from start to finish), and the payment and account dashboard wireframes that came out of reconciling eight internal teams' requirements into one client-facing view.",
    reflection:
      "I genuinely wish I'd had more time in this internship to keep refining the design: tightening sizing, adding features, polishing the overall experience. But designing two connected surfaces alongside a real design team, and reconciling eight internal teams' worth of real, sometimes conflicting requirements, taught me things a solo classroom project couldn't. I enjoyed every step of it.",
    interviews: [
      {
        team: 'Ad Transaction Team',
        question: 'Can you walk me through your current process for handling ad submissions, from start to finish?',
        response:
          'We receive ad submissions through email or our internal system. Our primary challenges include managing sizing errors and conducting manual content reviews. It would be helpful to have an automated validation tool for ad specifications to reduce back-and-forth with clients.',
        opportunity: 'Automated spec validation at upload, with inline error messages instead of email replies.',
      },
      {
        team: 'Contracts and Payment Team',
        question: 'What types of payment issues do you encounter most often?',
        response:
          'Discrepancies between the contract terms and the billed amount, as well as confusion around payment due dates. Clearer invoicing and automated reminders would help reduce these issues.',
        opportunity: 'Invoices that show contract line items side by side, plus scheduled payment reminders.',
      },
      {
        team: 'Campaign Management Team',
        question: 'What information do you need to effectively manage client campaigns through the platform?',
        response:
          'Access to real-time campaign data, including performance metrics, ad placements, and scheduling. It would be great if the platform could provide analytics dashboards and alert us to any underperforming campaigns.',
        opportunity: 'A live campaign dashboard with threshold alerts for underperformance.',
      },
      {
        team: 'Customer Support Team',
        question: 'What are the most common support requests you receive related to the MyOutfront.com platform?',
        response:
          'Clients often ask for help navigating the site, accessing campaign data, or resolving billing issues. Simplifying the UI and providing self-help resources could reduce support tickets.',
        opportunity: 'In-product help centre and guided navigation for the three top ticket types.',
      },
      {
        team: 'Creative Services Team',
        question: 'How do creative assets move between the client and your team today?',
        response:
          "Files arrive as email attachments or shared links, and we rename and re-file every version by hand. We often can't tell which version was approved. A single place to upload, version, and mark artwork as approved would save us hours a week.",
        opportunity: 'Versioned asset library with an explicit approved state visible to both sides.',
      },
      {
        team: 'Inventory and Availability Team',
        question: 'How do you check and communicate what inventory is available?',
        response:
          "We pull availability into a spreadsheet and send it out, but by the time a client responds the holds have changed. We'd like availability the client can see directly, with the hold status shown as it stands right now.",
        opportunity: 'Client-facing availability view with live hold status, replacing emailed spreadsheets.',
      },
      {
        team: 'Proof of Performance Team',
        question: 'What does it take to get proof of posting back to a client?',
        response:
          'Field photos come in from several sources and we assemble decks manually, matching each image to the right site and date. Clients chase us for them. If photos landed against the campaign automatically, the report would build itself.',
        opportunity: 'Photos attached to the campaign record on upload, with a generated proof-of-posting report.',
      },
      {
        team: 'Account Management Team',
        question: 'Where do clients get stuck when they use the platform on their own?',
        response:
          "New users can't find their campaigns or documents without a walkthrough from us, and permissions for their wider team are unclear. A guided first session and clearer roles would let them work without calling.",
        opportunity: 'First-run onboarding tour and a plain-language roles and permissions screen.',
      },
    ],
    wireframes: myoutfrontWireframes,
    creativeReview: myoutfrontCreativeReview,
    userStories: {
      description: [
        "When designing the MyOutfront.com platform, I mapped every step of the user journey so any button or link a client clicked always led somewhere, no dead ends. One key storyboard covered the ad submission process end to end.",
        "A compliant ad flowed straight to a confirmation page with a success message and upload progress. A flagged ad landed on a dedicated feedback page instead: the specific issue, links to guidelines, a support option, and a way to fix and resubmit on the spot, so even the harder path was fully designed, not an afterthought.",
      ],
      image: myoutfrontUserStories,
    },
    lowFidelity: {
      description: [
        "I kicked off the design process with a low-fidelity prototype covering the core pages, structure, and flow: ad submissions, contract views, and upload-status tracking. Competitive analysis and benchmarking pointed me toward proven patterns for self-service tools.",
        "Trend analysis pushed the layout toward something clean and minimal, while mood boarding set the visual direction to match the brand. Sketching it out early made it easy to catch improvements and gather feedback before investing in full fidelity.",
      ],
      sketches: [
        { src: myoutfrontSketchUpload, caption: 'Contract number entry and the drag-and-drop upload screen' },
        { src: myoutfrontSketchNotifications, caption: 'Upload/verify/style stepper and the notifications + ETA timeline' },
      ],
    },
    images: imagesFor('myoutfront', undefined, [
      'user-stories-map.png',
      'lofi-sketch-upload-verify.png',
      'lofi-sketch-notifications-timeline.png',
    ]),
    deliverables: [
      'Competitive Analysis',
      'Benchmarking',
      'Trend Analysis',
      'Mood Boarding',
      'Internal Stakeholder Interviews',
      'User Stories',
      'Storyboarding',
      'Low-Fidelity Wireframes',
      'Dashboard Wireframes',
      'High-Fidelity Prototype',
      'Presenting to Stakeholders',
    ],
  },
  {
    slug: 'dragonfly-yoga',
    title: 'Dragonfly Yoga',
    tagline: 'Turning a dead-end booking flow into a system that keeps people coming back.',
    description:
      'A calm, personalized redesign of Dragonfly Hot Yoga\'s booking app, reimagining onboarding, booking, and waitlists around building a consistent practice.',
    category: ['Product'],
    role: 'UX Designer & Product Strategist',
    team: 'Solo project',
    timeline: 'Jan 2026 - Present',
    tools: ['Figma', 'FigJam', 'Claude', 'ChatGPT', 'Miro'],
    accent: 'violet',
    variant: 'case-study',
    featured: true,
    summary: {
      problem:
        "Dragonfly's booking app had no answer for a full class: no waitlist, no suggested alternative, quietly costing the studio its most valuable behavior, members building a consistent practice.",
      challenge:
        'Redesign booking, onboarding, and waitlists so a full class becomes a redirect instead of a dead end, and new members get an on-ramp the app never gave them.',
      solution:
        'A mobile-first prototype built around a "Suggested for You" feed and waitlists that always pair with a real, bookable alternative, with every AI recommendation showing its reasoning in plain language.',
    },
    problem:
      "Dragonfly's booking app worked fine right up until a class filled up, and then it just stopped. No waitlist, no suggested alternative, no acknowledgment that the member had shown up at all. That dead end, more than any single interface complaint, was quietly costing the studio its most valuable behavior: people building a consistent practice. How might we help members book and manage classes so they stay motivated to keep showing up, not just today, but next month?",
    research: [
      'Quick access to schedules, live availability, and instructor bios was the #1 mobile ask: most sessions were under 90 seconds, booked between other tasks',
      'Cancellations, reminders, and confirmations were the single biggest source of confusion in a review of member support requests',
      'New members had no clear on-ramp into class types, difficulty levels, or membership options. The app assumed a familiarity with the studio that first-timers simply didn\'t have',
    ],
    process: [
      {
        title: 'Ideation with an AI thinking partner',
        body: "Used Claude to pressure-test problem framings before committing to a direction, deliberately asking it to argue the power user's perspective and the first-timer's perspective back to back, which surfaced edge cases a single-perspective brainstorm would have missed.",
      },
      {
        title: 'Storyboarding',
        body: "Mapped the emotional arc of a first-time attendee, not just their clicks. The anxiety starts before the app is even open: will I be behind everyone else? Do I have the right shoes? Is this actually the beginner class? A redesign that only fixed the booking flow would have missed where the real friction started.",
      },
      {
        title: 'Task flows, then wireframes',
        body: 'Sketched five core task flows in FigJam (onboarding, booking a recommended class, handling a full class, managing an existing booking, exploring something new), then wireframed low-fidelity before any visual design, specifically to keep the team arguing about flow instead of color.',
      },
      {
        title: 'High-fidelity, explainability last',
        body: 'Refined the AI recommendation surfaces only once the underlying flows were solid, so "smart" features were explaining a booking flow that already worked, rather than covering for one that didn\'t.',
      },
    ],
    decisions: [
      'Built a "Suggested for You" feed instead of trying to fix every identified problem at once: personalization was the single change most likely to reduce the overwhelm new members reported',
      'Waitlists always pair with a real, bookable alternative class, so hitting a full class is a redirect, not a dead end',
      'Every AI recommendation shows its reasoning in plain language, like "Because you\'ve booked Core Flow 4 times this month," because a recommendation a member doesn\'t trust is worse than no recommendation at all',
      'Kept the visual design deliberately calm (soft palette, generous whitespace, consistent component placement) to match the pace of the activity the app exists to support',
    ],
    outcome:
      'The result is a high-fidelity prototype spanning onboarding, booking, and full-class flows, built mobile-first to match how members actually use it, in short sessions, between other things. Next: usability testing with real Dragonfly members, and refining the recommendation engine\'s explainability before it ever touches production data.',
    reflection:
      "The biggest shift in my own thinking: reducing uncertainty turned out to matter as much as reducing clicks. A member who feels confident walking into a beginner class is a retention outcome, not just a nicety. AI was most useful here as a sparring partner for the thinking (pressure-testing assumptions), not as a shortcut past doing the thinking myself.",
    images: imagesFor('dragonfly-yoga', 'dragon_home_1.png', ['dragon-home-case.png']),
  },
  {
    slug: 'aivy',
    title: 'AIVY',
    tagline:
      "A speculative AI ecosystem built with PBS Wisconsin, exploring the question 'What if things turn out okay?' It imagines a future where technology helps people reconnect with each other and the living world around them.",
    description:
      'A speculative ecosystem of AI-powered products, set in 2046, exploring how technology can strengthen relationships between people, communities, and the natural world.',
    category: ['Research', 'Product'],
    role: 'Speculative Product Designer',
    timeline: '3-Week Design Sprint',
    team: 'Sam Popek, Mya Lovett, Erin Grisar',
    tools: ['Figma', 'FigJam', 'Miro', 'React', 'Claude Code'],
    accent: 'mint',
    variant: 'case-study',
    featured: true,
    summary: {
      problem:
        "PBS Wisconsin's brief wasn't a feature list, it was a question: what if things turn out okay? Most speculative-future work defaults to human-to-human connection and stops there.",
      challenge:
        "Push past the obvious answer to imagine what it would mean for AI to build a relationship between people and the natural world instead, then make that concept physical, not just a slide deck.",
      solution:
        'AIVY: a five-product AI ecosystem (Root, Bloom, Sprout, Vine, Canopy) plus a walk-through installation design, shaped directly by three installation-art advisors who pushed the team toward reciprocity over monitoring and pacing that respects how slowly plants actually communicate.',
    },
    problem: aivy.challenge.body,
    research: [],
    process: aivy.process,
    decisions: [],
    outcome: aivy.outcome,
    reflection: aivy.reflection,
    images: imagesFor('aivy', '/aivy.png'),
    titleVisual: aivyHero,
  },
  {
    slug: 'teklo',
    title: 'Teklo',
    tagline:
      'Redesigned a marketplace by simplifying complex shopping decisions, increasing user trust, and creating a faster product discovery experience through research-driven design.',
    category: ['Research', 'Product'],
    role: 'Lead UX Designer & UX Researcher',
    timeline: 'Sept 2024 - Dec 2024',
    team: 'Sam Popek, Evan Cass',
    tools: ['Figma', 'FigJam', 'Miro'],
    accent: 'mint',
    variant: 'case-study',
    featured: true,
    summary: {
      problem:
        'Budget-conscious buyers who most needed reliable tech were priced out of the primary market and underserved by a resale market built on Craigslist-era trust assumptions, afraid of getting scammed with no way to check a device beforehand.',
      challenge:
        'Build trust into a resale marketplace before affordability, without the scope of a full two-sided platform diluting the experience for either side.',
      solution:
        'A buying-only marketplace that surfaces condition and trust signals before price on every listing, the direct result of cutting the selling side entirely partway through the project.',
    },
    links: [
      {
        label: 'Figma Prototype',
        href: 'https://www.figma.com/proto/AxRtilipdp5Y9OSZteljwW/Teklo?node-id=5-122&p=f&t=lIW24nDlfenidhOJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A122',
      },
    ],
    deliverables: [
      'User Interviews',
      'User Personas',
      'User Journey Mapping',
      'Low-Fidelity Wireframes',
      'High-Fidelity UI Design',
      'Interactive Figma Prototype',
      'Design System',
    ],
    problem:
      "Framed around the UN's 'No Poverty' goal: reliable technology has become a precondition for education and work, but the students and budget-conscious buyers who need it most are priced out of the primary market and underserved by a resale market built on Craigslist-era trust assumptions. The real barrier wasn't just price. Interviews kept surfacing the same fear: getting scammed on a used device with no way to check it beforehand.",
    research: [
      'Interviewed students and budget-conscious buyers who regularly shop for used tech, specifically probing for the moment trust breaks down in an existing transaction',
      'Affinity-mapped every response into three clusters (affordability, trust in used-device condition, and desire for a simple buying process), which became the literal backbone of the feature list',
      'Built two personas directly from interview language rather than assumed demographics, so feature debates could be settled by asking "would this person actually do this" instead of guessing',
    ],
    process: [
      {
        title: 'Low-fidelity',
        body: 'Wireframed structure and flow first, deliberately withholding visual polish so early feedback sessions stayed focused on whether the browsing and checkout logic made sense at all.',
      },
      {
        title: 'High-fidelity',
        body: 'Refined in Figma (typography, spacing, and a full component system) once the underlying flows had already been validated, so visual design was finishing a decision, not making one.',
      },
    ],
    decisions: [
      'Cut the selling side of the marketplace entirely partway through: a bidirectional marketplace diluted trust on both sides, and a buying-only platform let every design decision optimize for one job instead of two competing ones',
      'Surfaced product condition and trust signals before price on every listing, because the research said trust was the actual blocker, not affordability alone',
      'Streamlined checkout to the minimum number of steps that still let a price-sensitive buyer feel confident, rather than the minimum that just looked simplest in a wireframe',
    ],
    outcome:
      'The result is a streamlined marketplace for browsing, favoriting, and checking out affordable tech, backed by a full design system, built to prove that removing scope can be a design decision in its own right, not just a compromise.',
    reflection:
      "Good design isn't about adding more. Cutting the selling flow was the single decision that made the rest of the product make sense. Everything downstream got simpler once that one thing was gone.",
    images: imagesFor('teklo', 'teklo_home.png'),
  },
  {
    slug: 'outfront-media-graphics',
    title: 'OUTFRONT Media Graphics',
    tagline: 'Four brands, four out-of-home campaigns, one summer.',
    category: ['Visual'],
    role: 'Graphic Design Intern',
    timeline: 'Summer 2023',
    team: 'Solo per client, collaborating with a multi-region graphic design team on Pike Nurseries',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    accent: 'acid',
    variant: 'gallery',
    featured: false,
    summary: {
      problem:
        'Out-of-home advertising gives you one constraint that overrides everything else: a seven-second glance from a moving bus. Four different clients, four different briefs, one summer to ship all of them.',
      challenge:
        'Design for instant legibility on real transit placements, not portfolio polish, across brands with nothing in common but the deadline.',
      solution:
        'Four shipped campaigns (bus kings, a billboard, an animated liveboard, a bus wrap), each built to a real client brief and running on actual New York City buses within the summer.',
    },
    problem:
      "Out-of-home advertising gives you one constraint that overrides everything else: a seven-second glance from a moving bus, or a few seconds at a red light. If a design doesn't land instantly (no time to read a paragraph, no time to squint at a logo), it doesn't work, regardless of how it looks in a portfolio.",
    research: [],
    process: [],
    decisions: [],
    outcome: 'Four shipped out-of-home campaigns, each built to a real client brief and a real deadline.',
    reflection:
      "This internship shaped how I approach design today. Seeing four campaigns actually running on New York City buses taught me to think past visuals and toward clear communication under a real constraint: if it didn't land in seven seconds, it didn't work.",
    images: imagesFor('outfront-media-graphics', 'outfront.jpg'),
    deliverables: ['Bus king ads', 'Bus rear king', 'Billboard', 'Animated liveboard', 'Bus wrap', 'Mobile ads'],
  },

]

export const visibleProjects = projects.filter((project) => !project.hidden)

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProject(slug: string) {
  const index = visibleProjects.findIndex((project) => project.slug === slug)
  if (index === -1) return visibleProjects[0]
  return visibleProjects[(index + 1) % visibleProjects.length]
}
