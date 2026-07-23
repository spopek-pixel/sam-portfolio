import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import figmaMakeBefore from '@/assets/images/projects/housingkind/figma_make_before.png'
import figmaAfter from '@/assets/images/projects/housingkind/figma_after.png'

const comparisonImages = { before: figmaMakeBefore, after: figmaAfter }

export function AIProcessSection() {
  const { goal, usedFor, did, flow, comparisonNote, comparison } = housingkind.aiProcess
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="AI-assisted design"
          title="Where AI fit into the process."
          description={
            <>
              <span className="font-medium text-fg">Goal:</span> {goal}
            </>
          }
          className="mb-8"
        />

        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2 lg:gap-12">
          <Reveal delay={0.06}>
            <div>
              <h3 className="kicker mb-3">What I used AI for</h3>
              <ul className="flex flex-col gap-2 text-fg-muted">
                {usedFor.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h3 className="kicker mb-3 text-acid">What I did</h3>
              <ul className="flex flex-col gap-2 text-fg-muted">
                {did.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-2 pb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.14 } } }}
        >
          {flow.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, y: reducedMotion ? 0 : 14, scale: reducedMotion ? 1 : 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <div
                className={cn(
                  'flex min-w-[140px] flex-col gap-0.5 rounded-xl border px-4 py-3',
                  step.highlighted ? 'border-violet-tint bg-violet/10' : 'border-line bg-surface/60',
                )}
              >
                <span className={cn('text-sm font-medium', step.highlighted && 'text-violet-tint')}>{step.title}</span>
                {step.subtitle && <span className="text-xs text-fg-muted">{step.subtitle}</span>}
              </div>
              {index < flow.length - 1 && (
                <motion.span
                  className="shrink-0 text-fg-muted"
                  animate={reducedMotion ? undefined : { x: [0, 4, 0] }}
                  transition={reducedMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-fg-muted">{comparisonNote}</p>
        </Reveal>

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {(['before', 'after'] as const).map((stage, stageIndex) => (
            <Reveal key={stage} delay={0.2 + stageIndex * 0.06}>
              <figure>
                <div className="mb-3 flex items-start gap-2.5">
                  <span
                    className={cn(
                      'mt-2 h-2 w-2 shrink-0 rounded-full',
                      stage === 'before' ? 'bg-violet-tint' : 'bg-acid',
                    )}
                  />
                  <span className="font-medium">{comparison[stage].title}</span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-line">
                  <img
                    src={comparisonImages[stage]}
                    alt={comparison[stage].title}
                    className="aspect-[7/8] w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-fg-muted">{comparison[stage].body}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
