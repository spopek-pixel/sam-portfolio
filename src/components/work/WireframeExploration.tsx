import { ArrowRight } from 'lucide-react'
import type { WireframeExplorationData } from '@/data/myoutfrontWireframes'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import './wireframeCanvas.css'

export function WireframeExploration({ data }: { data: WireframeExplorationData }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Wireframes" title={data.title} description={data.subtitle} className="mb-12" />

        <div className="flex flex-col gap-12">
          {data.groups.map((group) => (
            <div key={group.name} className="flex flex-col gap-4">
              <span className="kicker">{group.name}</span>
              <div className="grid gap-5 lg:grid-cols-2">
                {group.options.map((option, index) => (
                  <Reveal key={option.id} delay={index * 0.08}>
                    <div className="flex h-full flex-col gap-3">
                      <div className="flex items-baseline gap-2">
                        <span className="rounded bg-violet/15 px-1.5 py-0.5 font-mono text-[11px] text-violet-tint">
                          {option.id}
                        </span>
                        <p className="text-sm text-fg-muted">{option.label}</p>
                      </div>
                      <div className="wf-scope overflow-x-auto rounded-xl border border-line">
                        <div dangerouslySetInnerHTML={{ __html: option.html }} />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {data.synthesis && (
          <Reveal delay={0.12}>
            <div className="mt-12 flex gap-3 rounded-2xl border border-line bg-violet/10 p-6">
              <ArrowRight size={18} className="mt-0.5 shrink-0 text-violet-tint" />
              <p className="text-sm leading-relaxed text-fg">{data.synthesis}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
