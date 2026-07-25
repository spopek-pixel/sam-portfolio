import { Check } from 'lucide-react'
import type { Project } from '@/data/projects'
import { outfront } from '@/data/outfront'
import { Reveal } from '@/components/ui/Reveal'

export function OutfrontOverview({ project }: { project: Project }) {
  const { intro, contribution } = outfront.overview

  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Timeline', value: project.timeline },
    ...(project.team ? [{ label: 'Team', value: project.team }] : []),
    { label: 'Tools', value: project.tools.join(', ') },
  ]

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="kicker">Project overview</span>
          </Reveal>
          <div className="flex flex-col gap-4">
            {intro.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.06 + index * 0.06}>
                <p className="text-lg leading-relaxed text-fg-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-2 flex flex-col gap-3 border-t border-line pt-6">
              <h3 className="kicker">My contribution</h3>
              <ul className="flex flex-col gap-2.5">
                {contribution.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-fg-muted sm:text-base">
                    <Check size={18} className="mt-0.5 shrink-0 text-acid" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="flex flex-col gap-6 rounded-2xl border border-line bg-surface/60 p-6 sm:p-8 lg:sticky lg:top-24">
            {meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5 border-b border-line pb-5 last:border-b-0 last:pb-0">
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{item.label}</span>
                <span className="text-base">{item.value}</span>
              </div>
            ))}
            {project.deliverables && (
              <div className="flex flex-col gap-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Deliverables</span>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
