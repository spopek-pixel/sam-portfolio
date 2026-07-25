import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

export function DesignExplorations() {
  const { intro, concepts } = outfront.explorations

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Design explorations" title="Four colorways, one final direction." description={intro} className="mb-10 max-w-2xl" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map((concept, index) => (
            <Reveal key={concept.label} delay={index * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className={cn(
                  'flex h-full flex-col gap-4 rounded-2xl border p-5',
                  concept.final ? 'border-acid/40 bg-acid/[0.06] shadow-[0_20px_50px_-20px_rgba(166,255,77,0.25)]' : 'border-line bg-surface/40',
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider',
                      concept.final ? 'bg-acid/15 text-acid' : 'bg-fg-muted/10 text-fg-muted',
                    )}
                  >
                    {concept.label}
                  </span>
                  {concept.final && <CheckCircle2 size={16} className="text-acid" />}
                </div>

                <div
                  className="flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-xl p-4"
                  style={{ backgroundColor: concept.color }}
                >
                  <p className="font-display text-sm font-semibold leading-snug text-ink sm:text-base">{concept.headline}</p>
                </div>

                <p className={cn('text-xs', concept.final ? 'text-fg' : 'text-fg-muted')}>
                  {concept.final ? 'Shipped to NYC bus kings' : 'Explored, not selected'}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
