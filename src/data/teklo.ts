export const teklo = {
  hero: {
    description:
      'Redesigning Teklo — a tech marketplace built to make affordable, trustworthy technology easy to find, compare, and buy.',
  },

  overview: {
    intro: [
      "Teklo started as an undergraduate project framed around the UN's \"No Poverty\" Sustainable Development Goal: reliable technology has become a precondition for education and work, but the people who need it most are priced out of the primary market. For this portfolio, I revisited the concept from scratch — sharper research, a real design system, and decisions grounded in what actually changed people's minds in interviews, not just the original brief.",
      'The result is a community marketplace where students and budget-conscious buyers can search, compare, and buy technology across a range of price points — without the trust problems that usually come with buying anything secondhand.',
    ],
    hmw: 'How might we help budget-conscious buyers find and trust affordable technology, without the anxiety that usually comes with buying used?',
  },

  challenge: {
    lead: 'Affordability gets someone to the listing. Trust is what gets them to actually buy.',
    items: [
      {
        number: '01',
        icon: 'DollarSign',
        title: 'The cost barrier is real',
        body: 'Reliable technology is a precondition for school and work, but full retail price puts it out of reach for the students and budget-conscious buyers who need it most.',
      },
      {
        number: '02',
        icon: 'ShieldAlert',
        title: 'Trust breaks down on used devices',
        body: 'Every interview surfaced the same fear: getting scammed on a used device with no way to check its condition beforehand. Price wasn\'t the only blocker — trust was.',
      },
      {
        number: '03',
        icon: 'Compass',
        title: 'Existing marketplaces assume expertise',
        body: "Craigslist-era listings assume the buyer already knows what to look for. First-time buyers don't, and that gap is exactly where trust collapses.",
      },
    ],
  },

  research: {
    intro:
      'Before sketching anything, I talked to the two groups Teklo is actually built for — students juggling a tight budget and budget-conscious buyers shopping outside the primary retail market.',
    segments: [
      {
        icon: 'GraduationCap',
        title: 'Students & young adults',
        body: 'Need affordable laptops, tablets, and accessories for school — but rarely have full retail purchasing power.',
      },
      {
        icon: 'Wallet',
        title: 'Budget-conscious buyers',
        body: 'Want dependable technology at a lower price for work or daily life, without gambling on a listing that might not be what it claims.',
      },
    ],
    interviews: [
      {
        role: 'Student, regular tech buyer',
        question: 'What stops you from buying used tech?',
        quote:
          "I want to save money, but I've been burned before — there's no way to know if a used laptop actually works until it's too late.",
      },
      {
        role: 'Budget-conscious buyer',
        question: 'What would make you trust a marketplace listing?',
        quote:
          "If I could see the actual condition and know someone already checked it out, I'd trust it a lot more than just a photo and a price.",
      },
    ],
    takeaway:
      'Both interviews came back to the same thing: affordability gets people looking, but trust is what gets them to buy.',
  },

  discovery: {
    affinity: {
      title: 'Affinity diagram',
      body: "I grouped every interview response into clusters instead of treating them as a list of individual complaints. Three themes kept surfacing — affordability, trust in a device's condition, and wanting the buying process to be simple — and those three became the literal backbone of the feature list that followed.",
    },
    persona: {
      title: 'User persona',
      body: 'I built two personas directly from interview language rather than assumed demographics, so later feature debates could be settled by asking "would this person actually do this" instead of guessing. Both centered on the same tension: wanting a good deal without wanting to gamble on it.',
    },
  },

  process: {
    stages: [
      {
        icon: 'Lightbulb',
        title: 'Ideation & concept exploration',
        body: 'Before wireframing anything, I mapped out what a buying-only vs. a two-sided marketplace would each require — and how much of the trust problem a two-sided model would actually solve. That comparison is what led to cutting the selling side later.',
      },
      {
        icon: 'LayoutTemplate',
        title: 'Low-fidelity wireframes',
        body: 'Wireframed the core structure and flows — browsing, item detail, cart — before any visual polish, so early feedback stayed focused on whether the buying flow made sense at all, not on color.',
      },
      {
        icon: 'Palette',
        title: 'High-fidelity design system',
        body: 'Refined typography, spacing, and a full component system in Figma once the underlying flows were validated, so visual design was finishing a decision the wireframes had already made, not making a new one.',
      },
    ],
  },

  features: [
    {
      title: 'Search & browse',
      body: 'Fast product discovery across price points, with condition and trust signals surfaced before price on every listing.',
    },
    {
      title: 'Favorites',
      body: 'Save listings to compare later — built for buyers comparing five tabs at once, not committing on the spot.',
    },
    {
      title: 'Cart & checkout',
      body: 'A streamlined checkout with the minimum number of steps that still lets a price-sensitive buyer feel confident — not just the minimum that looked simplest in a wireframe.',
    },
    {
      title: 'Condition transparency',
      body: 'Every listing leads with verified condition details, because the research said trust was the actual blocker, not affordability alone.',
    },
  ],

  prototype: {
    body: 'The high-fidelity Figma prototype walks through the full buying journey — searching, favoriting, adding to cart, and checking out — built to feel like a real marketplace app, not a wireframe with color added.',
  },

  outcomes: {
    intro:
      'Cutting the selling side of the marketplace was the single decision that changed the most — a buying-only platform let every design decision optimize for one job instead of two competing ones.',
    solved: [
      'Priced-out buyers now have a marketplace built around their price range, not the primary retail market',
      'Trust signals — condition, verification — surface before price on every listing',
      'A two-sided marketplace that diluted trust on both sides got cut down to one focused job: buying',
    ],
    benefits: [
      'A search-to-checkout flow that stays simple even for a first-time buyer',
      'Favoriting for buyers comparing options instead of committing immediately',
      'Condition transparency that replaces the old "hope for the best" resale experience',
    ],
    whatsNext: [
      'A full design system ready to extend past this first version',
      'A validated case for scope-cutting as a design decision, not just a compromise',
      'Usability testing the buying-only flow next, with real budget-conscious buyers',
    ],
  },

  reflection: {
    lessonsLearned: [
      "Simplicity and clarity in UX design matter as much as any single feature — someone already anxious about tech costs doesn't need one more complicated interface on top of it.",
      'Interviews and affinity mapping directly translated into design decisions — every major feature traces back to a specific line someone said in a session.',
    ],
    whatIdImprove: [
      'Usability test the buying-only flow with real budget-conscious buyers before calling any screen final.',
      'Pressure-test the condition-verification flow further — trust was the biggest research finding, and it deserves more than one feature.',
    ],
    keyTakeaways: [
      "Good design isn't about adding more — cutting the selling side is what made the rest of the product make sense.",
      'Removing scope can be a design decision in its own right, not just a compromise.',
    ],
  },
}
