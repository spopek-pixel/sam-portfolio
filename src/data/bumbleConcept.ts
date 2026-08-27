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
        title: 'A strange kind of homesick',
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
        title: 'Still calling, still close',
        body: "Sarah has since graduated and moved to Chicago, and I'm still in Wisconsin, but **we FaceTime every week without fail**. I think about how different that first lonely month would have looked if I'd never opened the app, and I'm genuinely thankful for it, not as a brand I'm pitching to, but as something that changed what my life here actually looks like.",
      },
      {
        label: 'Why this campaign',
        title: 'Not guesswork',
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
          caption: 'My birthday, surrounded by the friends Bumble BFF gave me.',
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

  bigIdea: 'Find your group chat IRL.',

  brief:
    "The friendships I actually made through Bumble BFF didn't stay one-on-one, **they turned into a group chat**. So instead of the usual \"meet someone new\" pitch, the campaign leans straight into that: every execution is styled around a real-feeling group chat, and the messages running through them are close to word-for-word from actual threads with friends I met on the app.",

  channels: [
    {
      id: 'ooh-billboard',
      channel: 'OOH — Billboard',
      format: 'billboard' as const,
      image: 'bff-billboard.png',
      headline: 'Find your group chat IRL.',
      support: '',
      why: "A quiet, wide-open backdrop makes a messy, familiar group chat feel like something worth chasing down. The thread on the left ('wanna get food?' / 'I have no money' / 'me neither lol') is close to word-for-word from a real conversation with friends I met through BFF.",
    },
    {
      id: 'ooh-buswrap',
      channel: 'OOH — Bus wrap',
      format: 'billboard' as const,
      image: 'bff-buswrap.png',
      headline: 'Find your group chat IRL.',
      support: '',
      why: 'Same line, a completely different context: a bus wrap competes with an actual moving city instead of an empty skyline, so the chat bubbles have to catch a glance the billboard never had to fight for.',
    },
    {
      id: 'social',
      channel: 'Social — Caption',
      format: 'social' as const,
      image: undefined as string | undefined,
      headline: 'POV: the group chat you built through an app somehow got realer than half the people you already knew.',
      support: '',
      why: 'Social gets to sound like a text from a friend, not an ad. POV format is native to how this exact feeling already gets posted, so the copy borrows the platform\'s own voice instead of importing a billboard voice into a feed.',
    },
    {
      id: 'push',
      channel: 'Push notification',
      format: 'push' as const,
      image: undefined as string | undefined,
      headline: 'Your group chat picked a place without you.',
      support: 'Show up anyway.',
      why: 'A push notification is an interruption, so it has to earn that interruption with a joke, not a pitch. Low-stakes and a little self-aware, the same tone as a friend texting you off your couch.',
    },
  ],

  rationale:
    "Find your group chat IRL came out of noticing that my own Bumble BFF friendships stopped feeling like one-on-one matches almost immediately; they became a group chat, then a standing plan, then people I actually call. The voice stays conversational and a little messy on purpose, the way real group chats are, and each execution adapts to where someone actually encounters it: a billboard with room to let a thread breathe, a bus wrap competing with a real street, something that reads like a text from a friend on social, and something short enough to survive being a phone-lock-screen interruption. One idea, one real feeling, carried across every context.",

  skills: ['Campaign Concepting', 'Copywriting', 'OOH Design', 'Social Content', 'Brand Voice', 'Creative Direction'],
}
