import type { bumbleConcept } from '@/data/bumbleConcept'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

type Decisions = (typeof bumbleConcept)['designDecisions']

export function DesignDecisions({ decisions }: { decisions: Decisions }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={decisions.kicker} title={decisions.title} description={decisions.intro} className="mb-12" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {decisions.palette.map((item, index) => (
            <Reveal key={item.name} delay={0.04 * index}>
              <div className="flex flex-col gap-3">
                <div
                  className="aspect-square w-full rounded-2xl border border-line"
                  style={{ backgroundColor: item.hex, opacity: 'opacity' in item ? item.opacity : 1 }}
                />
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-mono text-xs text-fg-muted">{item.hex}</span>
                  <p className="text-sm leading-relaxed text-fg-muted">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {decisions.typography.map((type, index) => (
            <Reveal key={type.name} delay={0.04 * index}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-lg font-medium">{type.name}</span>
                  <span className="kicker">{type.role}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {type.specs.map((spec) => (
                    <div key={spec.label} className="flex flex-col gap-0.5 text-sm sm:flex-row sm:gap-2">
                      <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-violet-tint">{spec.label}</span>
                      <span className="text-fg-muted">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
