import { ArrowDown, Code2, FlaskConical, Layers, LayoutTemplate, Lightbulb, Search } from 'lucide-react'
import { Home, Users, Brain, MapPinned, HeartHandshake, Compass } from 'lucide-react'
import { motion } from 'framer-motion'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const stepIcons = [Search, Lightbulb, LayoutTemplate, Layers, FlaskConical, Code2]

const floaters = [
  { Icon: Home, side: 'left' as const, top: '2%', tone: 'text-violet-tint', delay: 0 },
  { Icon: Brain, side: 'right' as const, top: '14%', tone: 'text-acid', delay: 0.6 },
  { Icon: Users, side: 'left' as const, top: '34%', tone: 'text-acid', delay: 1.2 },
  { Icon: Compass, side: 'right' as const, top: '48%', tone: 'text-violet-tint', delay: 0.3 },
  { Icon: MapPinned, side: 'left' as const, top: '66%', tone: 'text-violet-tint', delay: 0.9 },
  { Icon: HeartHandshake, side: 'right' as const, top: '82%', tone: 'text-acid', delay: 1.5 },
]

function Floater({ Icon, side, top, tone, delay, reducedMotion }: (typeof floaters)[number] & { reducedMotion: boolean }) {
  return (
    <motion.div
      className={cn('absolute hidden h-12 w-12 items-center justify-center rounded-2xl border border-line bg-surface-raised shadow-[0_8px_24px_rgba(0,0,0,0.35)] lg:flex', tone)}
      style={side === 'left' ? { top, left: '4%' } : { top, right: '4%' }}
      animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
      transition={reducedMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <Icon size={20} />
    </motion.div>
  )
}

export function DesignProcessFlow() {
  const steps = housingkind.designProcess
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Design process" title="How the work moved." className="mb-8" />

        <div className="relative">
          {floaters.map((floater, index) => (
            <Floater key={index} {...floater} reducedMotion={reducedMotion} />
          ))}

          <div className="mx-auto flex max-w-2xl flex-col items-stretch">
            {steps.map((step, index) => {
              const Icon = stepIcons[index]
              const isLast = index === steps.length - 1
              return (
                <div key={step.title} className="flex flex-col items-center">
                  <Reveal delay={index * 0.07} className="w-full">
                    <div
                      className={cn(
                        'flex items-center gap-4 rounded-2xl border p-5',
                        isLast ? 'border-acid/40 bg-acid/5' : 'border-line bg-surface/60',
                      )}
                    >
                      <span
                        className={cn(
                          'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border',
                          isLast ? 'border-acid/40 text-acid' : 'border-line text-violet-tint',
                        )}
                      >
                        <Icon size={20} />
                      </span>
                      <div>
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-xs text-fg-muted">0{index + 1}</span>
                          <h3 className="font-medium">{step.title}</h3>
                        </div>
                        <p className="mt-0.5 text-sm text-fg-muted">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                  {!isLast && (
                    <Reveal delay={index * 0.07 + 0.04} y={8}>
                      <ArrowDown size={18} className="my-2 text-fg-muted/70" />
                    </Reveal>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
