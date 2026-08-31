import type { bumbleConcept } from '@/data/bumbleConcept'
import { Reveal } from '@/components/ui/Reveal'
import { renderHighlighted } from '@/lib/highlightText'

type Insight = (typeof bumbleConcept)['insight']

export function CampaignInsight({ insight }: { insight: Insight }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-14">
        {insight.beats.map((beat, index) => (
          <Reveal key={beat.title} delay={index * 0.06}>
            <div className="flex flex-col gap-3">
              <span className="kicker">{beat.kicker}</span>
              <h3 className="text-2xl sm:text-3xl">{beat.title}</h3>
              <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{renderHighlighted(beat.body)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
