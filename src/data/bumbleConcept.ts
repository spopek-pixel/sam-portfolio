export const bumbleConcept = {
  myStory: {
    kicker: 'Why this project',
    title: "I didn't pick Bumble BFF at random.",
    timeline: [
      {
        label: 'The move',
        title: 'New state, zero friends',
        body: "I moved to Wisconsin for grad school **knowing no one**. My program was tiny, and everyone already had their own lives outside of class.",
      },
      {
        label: 'Month one',
        title: "Homesick for a life I hadn't built",
        body: "My first month was genuine FOMO: watching everyone else's weekends happen without me, **feeling small in a place that suddenly felt very big**.",
      },
      {
        label: 'Trying BFF',
        title: "That's how I met Sarah",
        body: "I started messaging people on Bumble BFF, upfront about wanting real friends. **That's how I met Sarah** — a completely different world from mine, and we became inseparable almost immediately.",
        image: 'instagram-sarah',
        caption: 'My first message to Sarah, after finding her Instagram through her Bumble BFF profile',
      },
      {
        label: 'More than one',
        title: 'Megan, Lexi, and a group chat',
        body: "Through BFF I also met **Megan and Lexi**. One-off meetups turned into **a standing group chat of our own** — the kind where someone asks if anyone's free Friday and three people show up.",
        image: 'friends',
        caption: 'Two of the friends I matched and connected with',
      },
      {
        label: 'Today',
        title: 'Different city, same friendship',
        body: "Sarah's since moved to Chicago, but **we FaceTime every week without fail**. I'm genuinely thankful for the app, not as a brand I'm pitching, but for what it actually changed.",
      },
      {
        label: 'Why this campaign',
        title: 'Lived it, not guessed it',
        body: "**I've lived exactly the problem BFF mode solves.** This campaign isn't guesswork about a lonely grad student. It's what I felt, translated into copy.",
      },
    ],
    finale: {
      kicker: 'Where it led',
      title: 'All of us, together.',
      gallery: [
        {
          image: 'nashville-sarah',
          caption: 'Sarah and me on the pig — our Nashville trip.',
        },
        {
          image: 'birthday',
          caption: 'My birthday, surrounded by the friends Bumble BFF gave me — Sarah, Megan, Odessa, and Lexi.',
        },
        {
          image: 'blockparty-megan',
          caption: 'Megan and me at the State Street block party.',
        },
      ],
    },
  },

  disclaimer:
    "Self-initiated concept project, built to demonstrate campaign thinking for a design + copywriting role. Not commissioned by, affiliated with, endorsed by, or reviewed by Bumble. All copy below is my own, written for this exercise, not final Bumble marketing.",

  insight: {
    research: {
      kicker: 'The research',
      title: 'Bumble already believed this. I just designed for it.',
      cards: [
        {
          number: '01',
          title: 'Making the first move',
          body: 'Whoever matches has to message first. Usually framed as dating advice, but really it\'s about **who gets to start the conversation** — and BFF asks the same of you.',
        },
        {
          number: '02',
          title: 'One mission, not just one kind of relationship',
          body: "Their mission: a world where every relationship is healthy, not just romantic ones. **Not a side feature bolted onto a dating app** — the same mission, pointed at friendship.",
        },
        {
          number: '03',
          title: 'Kindness is a feature, not a slogan',
          body: '"Be Kind" prompts, blocking, reporting — none of it\'s just a values page. **It\'s built so people actually want to keep talking**, the exact tone I wanted for the campaign.',
        },
      ],
    },
  },

  bigIdea: 'Find your group chat IRL.',

  brief:
    "My BFF friendships didn't stay one-on-one, **they turned into a group chat**. I pulled the concept straight from my own phone: real texts with Sarah, Megan, Odessa, and Lexi, real slang, real inside jokes, real half-finished sentences, instead of a stock photo of two strangers over coffee. So every execution is styled around that same energy, with messages close to word-for-word from actual conversations. **It's not a mood board. It's my group chat.**",

  designDecisions: {
    kicker: 'Design decisions',
    title: 'Every color has a job.',
    intro:
      "Before any headline went on a billboard, I set rules for how color and type would work across every placement, so the billboard and the bus wrap would feel like the same system in two different settings, not two different ads.",
    image: 'bff-billboard.png',
    palette: [
      {
        name: 'Hive Yellow',
        hex: '#FFF28E',
        role: 'Field color. Full-bleed ground on every placement.',
      },
      {
        name: 'Bubble White',
        hex: '#FFFFFF',
        role: 'Received bubbles and the typing indicator.',
      },
      {
        name: 'Ink Charcoal',
        hex: '#454343',
        role: 'Sent bubbles and the striped edge marker.',
      },
      {
        name: 'True Black',
        hex: '#000000',
        role: 'Headline, logotype and flower mark.',
      },
      {
        name: 'Charcoal 60%',
        hex: '#454343',
        opacity: 0.6,
        role: 'Secondary tagline set beside the logotype.',
      },
    ],
    typography: [
      {
        name: 'Archivo Bold',
        role: 'Header',
        specs: [
          { label: 'Weight', value: '700 Bold' },
          { label: 'Tracking', value: '-3.5%' },
          { label: 'Leading', value: '0.98x — tight, two lines max' },
        ],
      },
      {
        name: 'Work Sans',
        role: 'Headings',
        specs: [
          { label: 'Weights', value: '600 Semibold logotype · 400 Regular in bubbles' },
          { label: 'Case', value: 'Lowercase in message copy, sentence case elsewhere' },
          { label: 'Role', value: 'Subheads, logotype lockup, UI-voice copy' },
        ],
      },
    ],
  },

  channels: [
    {
      id: 'ooh-billboard',
      channel: 'OOH — Billboard',
      format: 'billboard' as const,
      image: 'bff-billboard.png',
      headline: 'Find your group chat IRL.',
      support: '',
      why: "The same commuter sees this billboard twice a day, so I let the full four-message thread play out instead of cutting it to one line. A near-empty sky keeps the focus on the thread instead of competing with it. The messages themselves are close to word-for-word from a real conversation with friends I met through BFF.",
    },
    {
      id: 'ooh-buswrap',
      channel: 'OOH — Bus wrap',
      format: 'billboard' as const,
      image: 'bff-buswrap.png',
      headline: 'Find your group chat IRL.',
      support: '',
      why: "A bus wrap has to compete with real traffic and signage, not empty sky. I kept the same message and layout as the billboard, for consistency, but let the yellow do more of the work here since there's less visual room to spare.",
    },
    {
      id: 'ooh-transit-shelter',
      channel: 'OOH — Transit shelter',
      format: 'billboard' as const,
      image: 'bff-bus-poster.png',
      headline: 'wait... how did we just meet?',
      support: 'find your groupchat IRL',
      why: "This is the only placement where someone's standing still, waiting for a bus, not glancing over from a moving car. That extra time is why this one gets more to look at: a real photo strip and a QR code straight to the group chat, on top of the thread. It gives someone something to actually read while they wait.",
    },
    {
      id: 'social',
      channel: 'Social — Post',
      format: 'social' as const,
      image: 'bff-social.png',
      headline: 'Your next inside joke starts here.',
      support: '',
      why: "An obvious ad gets scrolled past in half a second on social. So this one is built to look like a real post about real friends, inside jokes and all. The small \"bff\" branding is the only thing marking it as an ad at all.",
    },
  ],

  rationale:
    "I built this because my own Bumble BFF friendships never stayed one-on-one matches. They turned into a group chat almost right away, then a standing plan, then people I actually call every week. So the whole campaign is built around real text threads instead of stock \"let's be friends!\" copy, because that's genuinely what it felt like. The billboard gets room to let a thread breathe; the bus wrap and transit shelter have to grab a faster glance; the social post is styled like something from the group chat, not an ad about one. None of it shows a match screen, because the match was never the interesting part. The conversation after it was.",

  skills: ['Campaign Concepting', 'Copywriting', 'OOH Design', 'Social Content', 'Brand Voice', 'Creative Direction'],
}
