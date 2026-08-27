export const bumbleConcept = {
  myStory: {
    kicker: 'Why this project',
    title: "I didn't pick Bumble BFF at random.",
    paragraphs: [
      "I moved to Wisconsin for grad school knowing no one. My program was small, only about fifteen people, and between classes and everyone already living their own lives, nobody was really looking to build a social life outside of school. I spent my first month in a new, unfamiliar city with genuine FOMO: watching everyone else's weekends happen without me, feeling small in a place that suddenly felt very big.",
      "That's when I actually tried Bumble BFF. I started messaging people, being upfront about wanting real friends, not just acquaintances, and showing up to meet them. That's how I met Sarah. She was finishing her senior year studying business while I was starting a master's in technology and design, two completely different worlds, and we became inseparable almost immediately. I don't think I'd have ever met her without that app. Through BFF I also met a handful of other amazing women I still go out with regularly, and I still open the app to meet more people like them.",
      "Sarah has since graduated and moved to Chicago, and I'm still in Wisconsin, but we FaceTime every week without fail. I think about how different that first lonely month would have looked if I'd never opened the app, and I'm genuinely thankful for it, not as a brand I'm pitching to, but as something that changed what my life here actually looks like.",
      "That's the real reason I wanted to design something for this feature instead of picking a product I don't actually use: I've lived exactly the problem BFF mode solves. The campaign below isn't guesswork about what a lonely grad student might feel. It's what I felt, translated into a few lines of copy.",
    ],
    proofCaption: 'Screenshot: my first message to Sarah on Bumble BFF',
  },

  disclaimer:
    "Self-initiated concept project, built to demonstrate campaign thinking for a design + copywriting role. Not commissioned by, affiliated with, endorsed by, or reviewed by Bumble. All copy below is my own, written for this exercise, not final Bumble marketing.",

  bigIdea: 'Making friends shouldn\'t feel like networking.',

  brief:
    "Bumble's BFF mode solves a real, slightly embarrassing problem: making friends as an adult is awkward, and most people would rather not admit they need help with it. I wanted a campaign that names that awkwardness directly instead of hiding behind generic 'meet new people' language, then carries one idea across the channels someone would actually encounter it in a single day.",

  channels: [
    {
      id: 'ooh-primary',
      channel: 'OOH — Transit shelter',
      format: 'billboard' as const,
      headline: "Making friends shouldn't feel like networking.",
      support: 'BFF mode. Because your calendar has enough meetings in it.',
      why: "The primary board just states the idea. No wordplay to parse in a three-second glance, on the platform where the campaign's whole argument gets made once, loudly.",
    },
    {
      id: 'ooh-secondary',
      channel: 'OOH — Billboard',
      format: 'billboard' as const,
      headline: 'Less "we should hang out sometime." More actually hanging out.',
      support: '',
      why: 'A secondary board can afford a beat of rhythm the primary one can\'t. This one plays on a phrase almost everyone has said and never meant.',
    },
    {
      id: 'social',
      channel: 'Social — Caption',
      format: 'social' as const,
      headline: 'POV: you found someone who thinks "let\'s grab coffee" means this week, not never.',
      support: '',
      why: 'Social gets to sound like a text from a friend, not an ad. POV format is native to how this exact feeling already gets posted, so the copy borrows the platform\'s own voice instead of importing a billboard voice into a feed.',
    },
    {
      id: 'push',
      channel: 'Push notification',
      format: 'push' as const,
      headline: 'Your couch has seen enough of you today.',
      support: 'Someone nearby is free tonight too.',
      why: 'A push notification is an interruption, so it has to earn that interruption with a joke, not a pitch. Low-stakes and a little self-aware, the same tone as a friend texting you off your couch.',
    },
  ],

  rationale:
    "I wanted the campaign to acknowledge something a lot of adults quietly deal with: wanting new friendships without wanting the process to feel forced. The voice stays conversational and a little self-aware throughout, but each execution adapts to where someone actually encounters it: a flat, declarative statement on a transit shelter, a wink on a billboard, something that reads like a text from a friend on social, and something short and funny enough to survive being a phone-lock-screen interruption. One idea, four contexts, one voice.",

  skills: ['Campaign Concepting', 'Copywriting', 'OOH Design', 'Social Content', 'Brand Voice', 'Creative Direction'],
}
