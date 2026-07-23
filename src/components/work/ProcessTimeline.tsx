import { Sparkles } from 'lucide-react'
import type { ProcessStep } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="The process" title="How it came together." className="mb-12" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const status = step.status ?? 'done'
            return (
              <Reveal key={step.title} delay={(index % 3) * 0.06}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint/15 font-mono text-xs text-mint">
                      {index + 1}
                    </span>
                    <span
                      className={
                        status === 'in-progress'
                          ? 'font-mono text-[10px] uppercase tracking-wider text-acid'
                          : 'font-mono text-[10px] uppercase tracking-wider text-fg-muted'
                      }
                    >
                      {status === 'in-progress' ? 'In progress' : 'Done'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm text-fg-muted">{step.body}</p>
                  </div>

                  {step.aiNote && (
                    <div className="mt-auto flex gap-2 rounded-xl bg-violet/10 p-3">
                      <Sparkles size={16} className="mt-0.5 shrink-0 text-violet-tint" />
                      <p className="text-sm text-fg-muted">{step.aiNote}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
