import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

export function UserFlowDiagram() {
  const { intro, branches } = teklo.userFlow

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Defining the experience"
          title="Mapping every path through the app."
          description={intro}
          className="mb-8 max-w-2xl"
        />

        <div className="relative rounded-3xl border border-line bg-surface/40 p-6 sm:p-10">
          <Reveal>
            <div className="mb-4 flex justify-center">
              <span className="rounded-2xl border-2 border-mint bg-mint/10 px-6 py-3 font-display text-lg font-semibold text-mint">
                Teklo
              </span>
            </div>
          </Reveal>

          <div className="mx-auto mb-2 hidden h-px w-full max-w-4xl bg-line sm:block" />

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {branches.map((branch, index) => (
              <Reveal key={branch.title} delay={index * 0.06}>
                <div className="flex flex-col items-center gap-3">
                  <div className={cn('hidden h-6 w-px sm:block', branch.cut ? 'bg-line/40' : 'bg-line')} />
                  <span
                    className={cn(
                      'rounded-full px-4 py-1.5 text-center font-mono text-xs uppercase tracking-wider',
                      branch.cut ? 'bg-fg-muted/10 text-fg-muted line-through decoration-1' : 'bg-mint/15 text-mint',
                    )}
                  >
                    {branch.title}
                  </span>

                  <div className="flex flex-col items-center gap-2">
                    {branch.items.map((item, i) => (
                      <div key={item} className="flex flex-col items-center">
                        {i > 0 && <span className={cn('h-2 w-px', branch.cut ? 'bg-line/30' : 'bg-line/60')} />}
                        <span
                          className={cn(
                            'rounded-full border px-3 py-1 text-center text-[11px] leading-tight',
                            branch.cut ? 'border-line/40 text-fg-muted/40 line-through' : 'border-line text-fg-muted',
                          )}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {branch.cut && (
                    <span className="mt-1 rounded-full bg-violet/10 px-2.5 py-1 text-center font-mono text-[9px] uppercase tracking-wider text-violet-tint">
                      Cut in scoping
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
