import { ArrowRight } from 'lucide-react'
import type { bumbleConcept } from '@/data/bumbleConcept'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import bffBillboard from '@/assets/images/projects/bumble-bff-concept/bff-billboard.png'
import bffBuswrap from '@/assets/images/projects/bumble-bff-concept/bff-buswrap.png'

type Decisions = (typeof bumbleConcept)['designDecisions']

export function DesignDecisions({ decisions }: { decisions: Decisions }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={decisions.kicker} title={decisions.title} description={decisions.intro} className="mb-12" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line">
              <img src={bffBillboard} alt="Billboard with color annotations" className="h-auto w-full" loading="lazy" />
              {decisions.palette.map((item, index) => (
                <div
                  key={item.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${item.xPct}%`, top: `${item.yPct}%` }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink bg-[#FFDE3B] font-mono text-xs font-bold text-ink shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-5">
              {decisions.palette.map((item, index) => (
                <div key={item.name} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-[#FFDE3B] font-mono text-xs font-bold text-ink">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
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

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4 border-t border-line pt-10 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:text-left">
            <Lightbox src={bffBuswrap} alt="Bus wrap using the same color and type system">
              <div className="w-full max-w-[280px] overflow-hidden rounded-xl border border-line">
                <img src={bffBuswrap} alt="" className="h-auto w-full" loading="lazy" />
              </div>
            </Lightbox>
            <p className="max-w-md text-sm leading-relaxed text-fg-muted">{decisions.closing}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
