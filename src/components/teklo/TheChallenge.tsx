import { Compass, DollarSign, ShieldAlert } from 'lucide-react'
import { motion } from 'framer-motion'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const iconMap = { DollarSign, ShieldAlert, Compass }
const baseRotate = [-1.5, 0, 1.5]

export function TheChallenge() {
  const { lead, items } = teklo.challenge

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="The challenge" title="Three barriers, one root cause." className="mb-12 max-w-2xl" />

        <div className="grid gap-8 pt-3 sm:grid-cols-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <Reveal key={item.number} delay={index * 0.08} className="h-full">
                <motion.div
                  initial={{ rotate: baseRotate[index] }}
                  whileHover={{ y: -8, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group relative flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-6 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.6)] transition-[border-color,box-shadow] duration-300 hover:border-mint/50 hover:shadow-[0_25px_55px_-20px_rgba(59,130,246,0.35)]"
                >
                  <span className="absolute -top-3 right-5 rounded-full bg-mint px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink shadow-md">
                    Barrier {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint/10 text-mint transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-muted">{item.body}</p>

                  <div
                    aria-hidden
                    className="mt-auto h-3 w-full rounded-sm opacity-30"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, var(--color-fg) 0px, var(--color-fg) 2px, transparent 2px, transparent 5px, var(--color-fg) 5px, var(--color-fg) 6px, transparent 6px, transparent 10px)',
                    }}
                  />
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-center font-display text-xl leading-snug sm:text-2xl">"{lead}"</p>
        </Reveal>
      </div>
    </section>
  )
}
