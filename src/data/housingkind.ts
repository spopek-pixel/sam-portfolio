export interface Quote {
  quote: string
  attribution?: string
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  title: string
  research: string
  realization: string
  decision: string
  myCall?: string
  mockupCaption?: string
  demoCaption?: string
}

export const housingkind = {
  problem: {
    lede: "Nobody organizes against affordable housing because they've read the zoning code and disagree with it.",
    ledeRest: "They organize because they can't picture what's being proposed, and the unknown defaults to scary.",
    context:
      "That's the pattern we kept running into researching Wisconsin's housing crisis: communities that say they want walkable, affordable neighborhoods, then show up to fight the very housing that would build one. The people below are who that actually happens to.",
    personaIntro:
      'Three perspectives sit inside this system, often talking past each other: the resident deciding whether to trust what’s being proposed, the developer trying to build it, and the advocate working the space between them.',
    personaRoles: ['Resident', 'Developer', 'Community Advocate'],
    stakes:
      "When none of these three have a shared way to picture the same thing, the result isn't a debate, it's a stalemate. Residents show up to council meetings scared and uninformed. Developers face resistance no matter how strong their plan is. Advocates spend their time translating between two sides that don't trust each other. Every zoning meeting turns into a fight over imagination instead of a conversation about design.",
    framing:
      'So the problem we set out to solve was never "convince people density is good." It was: give someone a way to actually see what’s being proposed before they’re asked to have an opinion about it.',
    hmw: 'How might we design housing solutions that create greater access while supporting dignity and belonging across Wisconsin?',
    hmwAttribution: 'MD+I Design Horizon',
  },

  whatWeHeard: {
    ledeHighlight: 'Across 15+ interviews with residents, developers, city council members, and housing advocates, one thing surprised us.',
    ledeRest: "It wasn't opposition to affordable housing. It was a complete absence of information to picture it with.",
    quotes: [
      {
        quote: "I know affordable housing exists, but I honestly have no idea where it's being built or what those developments actually look like.",
        attribution: 'Participant A',
      },
      {
        quote: "I don't think people necessarily oppose affordable housing, they're just filling in the gaps with their own assumptions.",
        attribution: 'Participant G',
      },
      {
        quote: "There's a lack of transparency. It feels like decisions are made behind closed doors.",
        attribution: 'Participant F',
      },
      {
        quote: "If I could see the plans, photos, and progress, I'd probably feel a lot more comfortable supporting these projects.",
        attribution: 'Participant D',
      },
    ] satisfies Quote[],
    fieldTitle: 'Getting out from behind the desk.',
    fieldChallenge:
      'The challenge we were chasing: give residents, developers, and city officials a shared, credible way to visualize housing options grounded in real buildings, not idealized renderings, understandable with zero policy background in five seconds.',
    field:
      "We didn't want this to be desk research. We went to Milwaukee to see it: touring ViaCDC's work, the CR8TV House, and a church being converted into a community coffee shop, buildings that already exist, not slides in a deck.",
    fieldCaption: 'Field visits to ViaCDC and the CR8TV House grounded the research in real places, not desk research.',
    pivot:
      "That challenged the assumption we'd started with: that better information would fix this. It wouldn't. People weren't short on facts, they were short on a way to see the thing being proposed. Before we could design anything, we needed to understand why that gap existed at a systems level, not just a personal one.",
  },

  system: {
    lede: "To understand why one resident's uncertainty turns into a packed, hostile city council meeting, we mapped the system around them: how developers, policymakers, and neighbors actually interact, not how the process is supposed to work on paper.",
    insights: [
      'Housing resistance is driven more by perception than by policy or cost.',
      'People consistently struggle to picture how new housing fits into the neighborhoods they already know.',
      'Real examples and lived experience move people more than abstract explanations ever do.',
    ],
    bridge:
      'Every tension on this map traced back to the same root cause: nobody in the system, resident, developer, or advocate, had a shared, credible way to picture the same thing.',
  },

  turningPoint: {
    quote: 'People fear what they cannot see.',
    attribution: 'David Gordon, Accessible Housing Developer, stakeholder interview',
    body: "That line reframed the entire project. We'd been treating this as an information problem, more facts, clearer policy language, more data, and none of it was moving the needle. What residents, developers, and advocates all actually needed wasn't more information. It was a way to see the thing being proposed, the way you'd see it if you already lived next door.",
    bridgeCaption:
      'Before anything went digital, a 3D model let us test whether showing gentle density physically actually changed how people reacted to it.',
  },

  intro: {
    body: 'Housingkind is a visualization platform that shows how missing middle housing could actually fit into a real, specific street, grounded in real buildings, not an idealized rendering.',
    forWhom: [
      { who: 'For the resident', value: 'Opens it and sees their own kind of block, with the housing overlaid, instead of a zoning diagram.' },
      { who: 'For the developer', value: 'Gets a shared visual language to bring into a room full of skeptical neighbors.' },
      { who: 'For the city official', value: 'Gets something a resident will actually engage with, instead of ignore.' },
    ],
    close: "That's the idea. What it looks like in practice is the next few features.",
  },

  features: [
    {
      title: 'Interactive Street Visualizations',
      research:
        '"I honestly have no idea what those developments actually look like." · "I’ve never visited one of these developments, so it’s easy to imagine the worst."',
      realization: "People weren't rejecting density. They were rejecting the version of it in their head, because they'd never seen a real one.",
      decision:
        'Ground every visualization in real buildings from the Milwaukee site visits, and keep each screen light enough to scan in five seconds, not read like a policy brief.',
      myCall:
        "I used orange sparingly and deliberately, on the two or three ideas that actually needed to stick. A resident scanning this at 9pm after their kids are asleep isn't going to read paragraphs. If the design demanded more attention than that, it had already failed the person it was supposed to help.",
      mockupCaption: '"We’re working to shift perception, not advocate for density": the mindset page that sets the tone for every visitor.',
    },
    {
      title: 'AI Chat Assistant',
      research: '"There’s a lack of transparency. It feels like decisions are made behind closed doors."',
      realization:
        "Residents didn't want to read policy. They wanted to ask a direct question and get a straight answer, without wading through zoning language to find it.",
      decision:
        'Built on Azure OpenAI, grounded only in Housingkind’s own content (retrieval-augmented, not the open web), tuned to answer in neutral, plain-language terms, informative, never preachy.',
      myCall:
        "I didn't want this to feel like the platform was trying to convince anyone of anything. If someone only reads the headline the assistant gives them, they should still walk away with an accurate idea, not a sales pitch.",
      demoCaption: 'The in-product AI assistant answering a resident’s question in real time.',
    },
    {
      title: 'Neighborhood Stories & Myths vs. Facts',
      research:
        '"I don’t think people necessarily oppose affordable housing, they’re just filling in the gaps with their own assumptions." · "I think people make assumptions because they never actually see what these communities are like."',
      realization: "The gap wasn't going to close with more statistics. It needed real people's lived experience sitting right next to the data.",
      decision:
        'Paired first-person stories from people already living near gentle density with a plain myths-vs-facts reference, so the tool works whether someone wants a story or just a fast, specific answer.',
    },
  ] satisfies Feature[],

  buildingIt: {
    figmaMakeIntro:
      'I started in Figma Make, using it to rapidly explore layout and interaction directions, a fast way to see five ideas instead of one before committing to any of them.',
    comparison: {
      before: { title: 'Before: AI-generated Figma Make concept', body: 'An early concept used to quickly explore possible layouts and interactions.' },
      after: {
        title: 'After: final design refined in Figma',
        body: 'The final design, redesigned and refined by hand using research insights, feedback, and my own UX and visual design decisions.',
      },
    },
    decisionLede: "I didn't want to stop at the Figma file.",
    decisionRest:
      'I was curious to learn new tools, so I brought the design into responsive, production code myself and built Housingkind as a real, working product instead of leaving it as a prototype.',
    screenshotCaption: 'The Housingkind front-end running in the browser, designed and developed by me.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Claude Code', 'Vercel'],
  },

  testing: {
    intro:
      "I walked residents, developers, and city stakeholders through the prototype directly, and watched where it worked and where it didn't. Of the people who walked through it during the program:",
    stats: [
      { value: '92%', label: 'Understood missing middle housing after one walkthrough' },
      { value: '4.8/5', label: 'Average ease-of-use, navigating independently' },
      { value: '91%', label: 'Felt less intimidated by density after seeing it visualized' },
    ] satisfies Stat[],
    scopeNote:
      "That's a real signal, but a small and program-adjacent one: most of the people I tested with were already connected to the program in some way, not a broader public sample. Testing with residents outside that circle is the most important thing left to do before I'd call this validated.",
    quotes: [
      { quote: 'This could genuinely change how communities think about density.' },
      { quote: "You've done a great job translating systems thinking into something residents can actually use." },
      { quote: 'It feels like a real tool developers and communities could both stand behind.' },
    ] satisfies Quote[],
    recognition:
      'The prototype was presented at Transcend, an annual showcase where graduate students pitch real-world solutions to a panel of CEOs and business leaders across Wisconsin. Out of every competing team, I was individually awarded Best User Experience Design.',
    recognitionCaption: 'Presenting Housingkind at the Transcend Competition with my teammates.',
  },

  branding: {
    body: 'Once the concept had traction, it needed to look like one coherent product, not a research prototype. The mark is two houses with a heart above them, different people, coming together, with care at the center. A layered blue palette signals trust and clarity; clean, modern type keeps it approachable.',
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

  reflection: {
    changed: [
      'A way to see density before judging it',
      'Plain-language answers to policy questions, without reading a zoning document',
      'Enough confidence to actually take part in a local housing conversation',
    ],
    limitation:
      "The testing pool skewed toward people already inside the program. I'd want the next round to include residents who've never heard of Housingkind or this research at all, since that's exactly who the tool needs to work for.",
    next: [
      'A dedicated developer/advocate view, built for the room full of skeptical neighbors, not just the resident at home',
      'Neighborhood-specific context in the AI assistant',
      'Street-level 3D or AR visualization of proposed housing',
    ],
    highlight:
      "Successful design isn't just creating interfaces. It's using the right tools, research, and judgment to help people understand something complicated enough that they can actually make up their own mind about it.",
  },
}
