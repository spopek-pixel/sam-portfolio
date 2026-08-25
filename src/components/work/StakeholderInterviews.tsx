import { ArrowUpRight } from 'lucide-react'
import type { InterviewCard } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function StakeholderInterviews({ interviews }: { interviews: InterviewCard[] }) {
  if (interviews.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Internal stakeholder interviews"
          title="One card per team."
          description="The question asked, the response in their words, and the opportunity it points to."
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {interviews.map((card, index) => (
            <Reveal key={card.team} delay={(index % 4) * 0.06}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60">
                <div className="flex items-baseline gap-3 border-b border-line bg-violet/10 px-5 py-4">
                  <span className="font-mono text-xs tabular-nums text-violet-tint">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-sm font-medium leading-snug">{card.team}</h3>
                </div>

                <div className="flex flex-col gap-2 border-b border-line px-5 py-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-violet-tint">Question</span>
                  <p className="text-sm leading-relaxed">&ldquo;{card.question}&rdquo;</p>
                </div>

                <div className="flex flex-1 flex-col gap-2 px-5 py-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">Response</span>
                  <p className="text-sm leading-relaxed text-fg-muted">&ldquo;{card.response}&rdquo;</p>
                </div>

                {card.opportunity && (
                  <div className="mt-auto flex flex-col gap-2 border-t border-line bg-bg/40 px-5 py-4">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-violet-tint">
                      <ArrowUpRight size={12} /> Opportunity
                    </span>
                    <p className="text-sm leading-relaxed">{card.opportunity}</p>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
