import { ArrowDown, Code2, FlaskConical, Layers, LayoutTemplate, Lightbulb, Search } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const stepIcons = [Search, Lightbulb, LayoutTemplate, Layers, FlaskConical, Code2]

export function DesignProcessFlow() {
  const steps = housingkind.designProcess

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Design process" title="How the work moved." className="mb-8" />

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
    </section>
  )
}
