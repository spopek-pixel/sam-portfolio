export const bumbleConcept = {
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
