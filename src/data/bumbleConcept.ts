export const bumbleConcept = {
  myStory: {
    kicker: 'Why this project',
    title: "I didn't pick Bumble BFF at random.",
    timeline: [
      {
        label: 'The move',
        title: 'New state, zero friends',
        body: "I moved to Wisconsin for grad school **knowing no one**. My program was small, only about fifteen people, and between classes and everyone already living their own lives, nobody was really looking to build a social life outside of school.",
      },
      {
        label: 'Month one',
        title: "Homesick for a life I hadn't built",
        body: "I spent my first month in a new, unfamiliar city with genuine FOMO: watching everyone else's weekends happen without me, **feeling small in a place that suddenly felt very big**. It's a strange kind of homesick, missing a social life you haven't built yet.",
      },
      {
        label: 'Trying BFF',
        title: "That's how I met Sarah",
        body: "I started messaging people on Bumble BFF, being upfront about wanting real friends, not just acquaintances, and showing up to meet them. **That's how I met Sarah.** She was finishing her senior year studying business while I was starting a master's in technology and design, two completely different worlds, and we became inseparable almost immediately.",
        image: 'instagram-sarah',
        caption: 'My first message to Sarah, after finding her Instagram through her Bumble BFF profile',
      },
      {
        label: 'More than one',
        title: 'Megan, Lexi, and a group chat',
        body: "Through BFF I also met a handful of other amazing women, like **Megan and Lexi**, who I still go out with regularly. What started as one-off meetups turned into **a standing group chat of our own**, the kind where someone asks if anyone's free Friday and three people show up within the hour.",
        image: 'friends',
        caption: 'Two of the friends I matched and connected with',
      },
      {
        label: 'Today',
        title: 'Different city, same friendship',
        body: "Sarah has since graduated and moved to Chicago, and I'm still in Wisconsin, but **we FaceTime every week without fail**. I think about how different that first lonely month would have looked if I'd never opened the app, and I'm genuinely thankful for it, not as a brand I'm pitching to, but as something that changed what my life here actually looks like.",
      },
      {
        label: 'Why this campaign',
        title: 'Lived it, not guessed it',
        body: "That's the real reason I wanted to design something for this feature instead of picking a product I don't actually use: **I've lived exactly the problem BFF mode solves.** The campaign below isn't guesswork about what a lonely grad student might feel. It's what I felt, translated into a few lines of copy.",
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
      why: "At OUTFRONT Media I learned that a commuter passing a billboard has about seven seconds to actually notice it, so the tagline has to stick immediately. That's why \"Find your group chat IRL.\" stays short and repeats across every execution. I used a real text thread instead of stock ad copy, so what someone catches in those seven seconds actually feels true.",
    },
    {
      id: 'ooh-buswrap',
      channel: 'OOH — Bus wrap',
      format: 'billboard' as const,
      image: 'bff-buswrap.png',
      headline: 'Find your group chat IRL.',
      support: '',
      why: "Same seven-second rule, but a bus wrap gets even less of it, competing with real traffic and signage instead of an empty sky. So I kept it straightforward: same headline, same thread, same layout as the billboard, just louder color contrast to grab attention that much faster.",
    },
    {
      id: 'ooh-transit-shelter',
      channel: 'OOH — Transit shelter',
      format: 'billboard' as const,
      image: 'bff-bus-poster.png',
      headline: 'wait... how did we just meet?',
      support: 'find your groupchat IRL',
      why: "A transit shelter is different: people are standing still, waiting for a bus, so they actually have time to read. That's why I added a real photo strip and a QR code that leads straight to the app, on top of the thread, giving someone something to actually look at while they wait.",
    },
    {
      id: 'social',
      channel: 'Social — Post',
      format: 'social' as const,
      image: 'bff-social.png',
      headline: 'Your next inside joke starts here.',
      support: '',
      why: "This one had to be engaging enough to stop a scroll, so I used real conversation texts pulled straight from my own threads with friends, plus a tagline built to catch attention fast.",
    },
  ],

  rationale:
    "I built this because my own Bumble BFF friendships never stayed one-on-one matches. They turned into a group chat almost right away, then a standing plan, then people I actually call every week. So the whole campaign is built around real text threads instead of stock \"let's be friends!\" copy, because that's genuinely what it felt like. The billboard gets room to let a thread breathe; the bus wrap and transit shelter have to grab a faster glance; the social post is styled like something from the group chat, not an ad about one. None of it shows a match screen, because the match was never the interesting part. The conversation after it was.",

  skills: ['Campaign Concepting', 'Copywriting', 'OOH Design', 'Social Content', 'Brand Voice', 'Creative Direction'],
}
