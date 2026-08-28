import { ArrowRight } from 'lucide-react'
import type { bumbleConcept } from '@/data/bumbleConcept'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import bffBillboard from '@/assets/images/projects/bumble-bff-concept/bff-billboard.png'

type Decisions = (typeof bumbleConcept)['designDecisions']

export function DesignDecisions({ decisions }: { decisions: Decisions }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={decisions.kicker} title={decisions.title} description={decisions.intro} className="mb-12" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <img src={bffBillboard} alt="Billboard for the campaign" className="h-auto w-full" loading="lazy" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-5">
              {decisions.palette.map((item) => (
                <div key={item.name} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-4 w-4 shrink-0 rounded border border-line"
                      style={{ backgroundColor: item.hex, opacity: 'opacity' in item ? item.opacity : 1 }}
                    />
                    <span className="font-medium">{item.name}</span>
                    <span className="font-mono text-xs text-fg-muted">{item.hex}</span>
                  </div>
                  <p className="flex items-start gap-1.5 text-sm leading-relaxed text-fg-muted">
                    <ArrowRight size={14} className="mt-0.5 shrink-0 text-violet-tint" />
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
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
