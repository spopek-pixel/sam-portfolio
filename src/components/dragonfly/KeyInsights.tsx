import { motion } from 'framer-motion'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function KeyInsights() {
  const { lead, items } = dragonfly.keyInsights

  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="What I heard" title="Three problems, everywhere I looked." className="mb-10 max-w-2xl" />

        <div className="flex flex-col">
          {items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="group flex items-baseline gap-5 border-b border-line py-6 last:border-b-0 sm:gap-8"
              >
                <span className="font-display text-4xl text-line transition-colors duration-300 group-hover:text-gradient sm:text-5xl">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-medium sm:text-xl">{item.title}</h3>
                  <p className="mt-1.5 max-w-xl text-sm text-fg-muted sm:text-base">{item.body}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl leading-snug sm:text-2xl">"{lead}"</p>
        </Reveal>
      </div>
    </section>
  )
}
