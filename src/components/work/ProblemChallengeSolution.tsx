import { CircleAlert, Lightbulb, Target } from 'lucide-react'
import type { ProjectSummary } from '@/data/projects'
import { Reveal } from '@/components/ui/Reveal'

const rows = (summary: ProjectSummary) => [
  { label: 'Problem', icon: CircleAlert, body: summary.problem },
  { label: 'Challenge', icon: Target, body: summary.challenge },
  { label: 'Solution', icon: Lightbulb, body: summary.solution },
]

export function ProblemChallengeSolution({ summary }: { summary: ProjectSummary }) {
  return (
    <section className="px-6 pb-4 pt-2 sm:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-3">
          {rows(summary).map((row, index) => (
            <Reveal key={row.label} delay={index * 0.06}>
              <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-line bg-surface/60 p-6">
                <div className="flex items-center gap-2">
                  <row.icon size={15} className="text-violet-tint" />
                  <span className="kicker">{row.label}</span>
                </div>
                <p className="text-sm leading-relaxed text-fg sm:text-[15px]">{row.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
