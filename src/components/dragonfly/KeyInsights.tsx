import { CalendarX2, Smartphone, UserPlus } from 'lucide-react'
import { motion } from 'framer-motion'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const iconMap = { Smartphone, CalendarX2, UserPlus }

export function KeyInsights() {
  const { lead, items } = dragonfly.keyInsights

  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="What I heard" title="Three problems, everywhere I looked." className="mb-10 max-w-2xl" />

        <div className="flex flex-col">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <Reveal key={item.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group flex items-center justify-between gap-6 border-b border-line py-7 last:border-b-0"
                >
                  <div className="flex items-baseline gap-5 sm:gap-8">
                    <span className="font-display text-4xl text-line transition-colors duration-300 group-hover:text-gradient sm:text-5xl">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium sm:text-xl">{item.title}</h3>
                      <p className="mt-1.5 max-w-xl text-sm text-fg-muted sm:text-base">{item.body}</p>
                    </div>
                  </div>
                  <Icon
                    size={56}
                    strokeWidth={1.25}
                    className="hidden shrink-0 text-fg-muted/15 transition-colors duration-300 group-hover:text-violet-tint/40 sm:block"
                  />
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl leading-snug sm:text-2xl">"{lead}"</p>
        </Reveal>
      </div>
    </section>
  )
}
