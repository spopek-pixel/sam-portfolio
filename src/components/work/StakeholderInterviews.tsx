import { ArrowUpRight } from 'lucide-react'
import type { InterviewCard } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function StakeholderInterviews({ interviews }: { interviews: InterviewCard[] }) {
  if (interviews.length === 0) return null

  const doubled = [...interviews, ...interviews]

  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-14">
        <SectionHeading
          kicker="Internal stakeholder interviews"
          title="One card per team."
          description="The question asked, the response in their words, and the opportunity it points to."
          className="mb-12"
        />
      </div>

      <div className="relative overflow-hidden border-y border-line py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />

        <div className="flex w-max animate-[marquee_45s_linear_infinite] gap-6 [animation-play-state:running] hover:[animation-play-state:paused] motion-reduce:animate-none">
          {doubled.map((card, index) => (
            <article
              key={`${card.team}-${index}`}
              className="flex h-full w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface/60"
            >
              <div className="flex items-baseline gap-3 border-b border-line bg-violet/10 px-5 py-4">
                <span className="font-mono text-xs tabular-nums text-violet-tint">
                  {String((index % interviews.length) + 1).padStart(2, '0')}
                </span>
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
          ))}
        </div>
      </div>
    </section>
  )
}
