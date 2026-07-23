import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const entries = [
  {
    year: 'Grade school',
    title: '96 words per minute',
    body: "Won my school's typing competition before I understood it meant anything. In hindsight — the first sign I was a computer kid.",
  },
  {
    year: 'Growing up',
    title: 'A 3D ocean, not a poster',
    body: 'My mom pushed ambitious school projects over easy ones. Creativity became the default setting, not the exception.',
  },
  {
    year: 'Middle school',
    title: 'Rearranging HUDs before I knew the word "UX"',
    body: "I was the kid tweaking inventory menus and HUD layouts before I'd even beaten the tutorial. I didn't have language for it yet, but I already noticed when a screen made a game feel effortless — and when it made me want to throw the controller. That gap is basically still my whole job.",
  },
  {
    year: 'Teenage years',
    title: 'The family tech support',
    body: 'As a first-generation kid, I became the one who helped parents and grandparents navigate technology. My first real look at the accessibility gap.',
  },
  {
    year: 'Indiana University',
    title: 'Finding UX',
    body: 'Studied HCI, shipped IUSafe, and realized UX was the one field that actually merged creativity, problem-solving, and helping people.',
  },
  {
    year: 'UW–Madison, now',
    title: 'Design + Innovation',
    body: 'Graduate studies pairing rigorous research with things I build myself — Housingkind, Dragonfly Yoga, Teklo, and this site.',
  },
]

export function InteractiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.4'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading kicker="The timeline" title="Every stop on the way here." className="mb-14" />

        <div ref={containerRef} className="relative flex flex-col gap-12 pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-violet-tint to-acid"
          />

          {entries.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 0.05}>
              <div className="relative">
                <span className="absolute -left-10 top-1 h-3.5 w-3.5 rounded-full border-2 border-acid bg-ink" />
                <span className="font-mono text-xs uppercase tracking-wider text-violet-tint">{entry.year}</span>
                <h3 className="mt-2 text-xl sm:text-2xl">{entry.title}</h3>
                <p className="mt-2 text-fg-muted">{entry.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
