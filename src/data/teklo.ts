export const teklo = {
  hero: {
    description:
      'Redesigning Teklo: a tech marketplace built to make affordable, trustworthy technology easy to find, compare, and buy.',
  },

  overview: {
    intro: [
      "Teklo started as an undergraduate project framed around the UN's \"No Poverty\" Sustainable Development Goal: reliable technology has become a precondition for education and work, but the people who need it most are priced out of the primary market. For this portfolio, I revisited the concept from scratch: sharper research, a real design system, and decisions grounded in what actually changed people's minds in interviews, not just the original brief.",
      'The result is a community marketplace where students and budget-conscious buyers can search, compare, and buy technology across a range of price points, without the trust problems that usually come with buying anything secondhand.',
      "What follows is the process end to end, in the order it actually happened: who I designed for, what I learned from them, how those patterns became a plan, and how that plan became the product below.",
    ],
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
        body: 'Every interview surfaced the same fear: getting scammed on a used device with no way to check its condition beforehand. Price wasn\'t the only blocker. Trust was.',
      },
      {
        number: '03',
        icon: 'Compass',
        title: 'Existing marketplaces assume expertise',
        body: "Craigslist-era listings assume the buyer already knows what to look for. First-time buyers don't, and that gap is exactly where trust collapses.",
      },
    ],
  },

  understandingUsers: {
    intro:
      "Before anything got designed, I needed to know exactly who Teklo was for and what they were actually afraid of. Two groups kept surfacing in early conversations, and a persona built from their real words kept every later feature debate honest.",
    segments: [
      {
        icon: 'GraduationCap',
        title: 'Students & young adults',
        body: 'Need affordable laptops, tablets, and accessories for school, but rarely have full retail purchasing power.',
      },
      {
        icon: 'Wallet',
        title: 'Budget-conscious buyers',
        body: 'Want dependable technology at a lower price for work or daily life, without gambling on a listing that might not be what it claims.',
      },
    ],
    persona: {
      title: 'User persona',
      body: 'I built the persona directly from interview language rather than assumed demographics, so later feature debates could be settled by asking "would this person actually do this" instead of guessing. Alex centers on one tension: wanting a good deal without wanting to gamble on it.',
    },
  },

  researchAndDiscovery: {
    intro:
      'With the audience defined, I talked to real buyers, primarily students who regularly shop for tech, to hear where trust actually breaks down in a purchase.',
    interviews: [
      {
        name: 'Michael',
        role: 'Regular tech buyer',
        date: '10/25',
        qa: [
          {
            question: 'What frustrates you about buying tech?',
            answer: "There's too many options and prices vary so much, it's confusing.",
          },
          {
            question: 'Do you look for cheaper or secondhand options?',
            answer: "Yeah, but I don't always trust them or know where to look.",
          },
          {
            question: 'What features would make buying easier?',
            answer: 'Good filters and a way to compare options side by side.',
          },
        ],
      },
      {
        name: 'Sarah',
        role: 'Budget-conscious buyer',
        date: '10/24',
        qa: [
          {
            question: 'What challenges do you face when buying tech?',
            answer: 'Everything is so expensive, especially laptops and iPads.',
          },
          {
            question: 'What would make you trust a product more?',
            answer: 'Clear photos, detailed descriptions, and knowing the condition.',
          },
          {
            question: 'What features would you want in a tech marketplace app?',
            answer: 'Filters for price, type, and condition would help a lot.',
          },
        ],
      },
    ],
    takeaway:
      'Both interviews came back to the same thing: affordability gets people looking, but trust is what gets them to buy.',
    affinity: {
      title: 'Synthesis: affinity diagram',
      body: "I grouped every interview response into clusters instead of treating them as a list of individual complaints. Three themes kept surfacing: affordability, trust in a device's condition, and wanting the buying process to be simple. Those three became the literal backbone of the feature list that followed.",
    },
  },

  userFlow: {
    intro:
      "With the research patterns clear, the next step was turning them into a concrete plan: how someone would actually move through the app, every branch off the home hub, from browsing to checkout to managing an order. Laying it out end to end is what made the two-sided marketplace idea feel bloated: the Sell branch competed for the same real estate as the buying flow the research said actually mattered.",
    branches: [
      { title: 'Main', items: ['Notifications', 'New Listings', 'Suggested', 'Previously Viewed'] },
      { title: 'Search', items: ['Catalog', 'Product List', 'Filters', 'Product Page', 'Reviews'] },
      { title: 'Sell', items: ['Product Info', 'Photos', 'Post Listing'], cut: true },
      { title: 'Cart', items: ['Checkout', 'Payment', 'Success'] },
      { title: 'Profile', items: ['Orders', 'Edit Profile', 'Payment', 'Address'] },
    ],
  },

  ideation: {
    body: "Before wireframing anything, I mapped out what a buying-only vs. a two-sided marketplace would each require, and how much of the trust problem a two-sided model would actually solve. That comparison, informed directly by the flow above, is what led to cutting the selling side entirely. No sketches from this stage survived: the real output here was a decision, not a drawing.",
  },

  wireframing: {
    intro:
      'Once the direction was set, wireframes came first: structure and flow only, no visual polish, so early feedback stayed focused on whether the buying flow made sense at all. The high-fidelity design system is that same structure, refined: typography, spacing, and a full component system built once the underlying flows were already validated.',
    lowFi: {
      label: 'Low-fidelity',
      body: 'Wireframed the core structure and flows (browsing, item detail, cart) before any visual polish, so early feedback stayed focused on whether the buying flow made sense at all, not on color.',
    },
    hiFi: {
      label: 'High-fidelity',
      body: 'Refined typography, spacing, and a full component system in Figma once the underlying flows were validated, so visual design was finishing a decision the wireframes had already made, not making a new one.',
    },
  },

  features: [
    {
      title: 'Search & browse',
      body: 'Fast product discovery across price points, with condition and trust signals surfaced before price on every listing.',
    },
    {
      title: 'Favorites',
      body: 'Save listings to compare later, built for buyers comparing five tabs at once, not committing on the spot.',
    },
    {
      title: 'Cart & checkout',
      body: 'A streamlined checkout with the minimum number of steps that still lets a price-sensitive buyer feel confident: promo codes, delivery options, and payment method all in one clear view.',
    },
    {
      title: 'Guided onboarding',
      body: 'A short, visual walkthrough sets expectations before someone even creates an account: curated deals, fast delivery, and smart picks, not a wall of permission requests.',
    },
  ],

  prototype: {
    body: 'The high-fidelity Figma prototype walks through the full buying journey (searching, favoriting, adding to cart, and checking out), built to feel like a real marketplace app, not a wireframe with color added.',
  },

  reflection: {
    lessonsLearned: [
      "Simplicity and clarity in UX design matter as much as any single feature: someone already anxious about tech costs doesn't need one more complicated interface on top of it.",
      'Interviews and affinity mapping directly translated into design decisions: every major feature traces back to a specific line someone said in a session.',
    ],
    whatIdImprove: [
      'Usability test the buying-only flow with real budget-conscious buyers before calling any screen final.',
      'Pressure-test the condition-verification flow further: trust was the biggest research finding, and it deserves more than one feature.',
    ],
    impact: [
      "Priced-out buyers now have a marketplace built around their price range, not the primary retail market",
      'Trust signals (condition, verification) surface before price on every listing, replacing the old "hope for the best" resale experience',
      "Good design isn't about adding more: cutting the selling side is what made the rest of the product make sense, and it's a validated case for scope-cutting as a decision, not a compromise",
    ],
  },
}
