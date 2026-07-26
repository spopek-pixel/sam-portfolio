import { Home, Flower2, Sprout, Users2, TreePine } from 'lucide-react'
import { motion } from 'framer-motion'
import { aivy } from '@/data/aivy'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

const icons = { root: Home, bloom: Flower2, sprout: Sprout, vine: Users2, canopy: TreePine }

export function AivyEcosystem() {
  const reducedMotion = usePrefersReducedMotion()
  const items = aivy.ecosystem

  return (
    <section className="px-6 py-14 sm:px-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="The AIVY ecosystem"
          title="One system, growing together."
          description="Five connected products, inspired by nature and designed to grow together — scroll to see how they link."
          className="mb-14"
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-6 top-6 bottom-6 hidden w-px bg-gradient-to-b from-mint/60 via-mint/20 to-transparent sm:block"
          />

          <div className="flex flex-col gap-6">
            {items.map((item, index) => {
              const Icon = icons[item.id as keyof typeof icons]
              return (
                <Reveal key={item.id} delay={index * 0.1}>
                  <div className="relative flex flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-6 sm:flex-row sm:items-center sm:gap-6 sm:pl-16">
                    <motion.span
                      initial={reducedMotion ? undefined : { scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-6 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-mint/40 bg-ink text-mint shadow-[0_0_0_6px_var(--color-surface)] sm:flex"
                    >
                      <Icon size={20} />
                    </motion.span>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-mint/40 bg-mint/10 text-mint sm:hidden">
                      <Icon size={20} />
                    </span>

                    <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                      <div className="flex items-baseline gap-3 sm:w-40 sm:shrink-0">
                        <h3 className="text-xl font-medium">{item.name}</h3>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-mint">{item.tag}</span>
                      </div>
                      <p className="text-sm text-fg-muted sm:text-base">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
