import type { bumbleConcept } from '@/data/bumbleConcept'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { renderHighlighted } from '@/lib/highlightText'

type Insight = (typeof bumbleConcept)['insight']

export function CampaignInsight({ insight }: { insight: Insight }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div>
          <SectionHeading kicker={insight.research.kicker} title={insight.research.title} className="mb-10" />
          <div className="grid gap-5 sm:grid-cols-3">
            {insight.research.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-surface/60 p-6">
                  <h3 className="text-lg font-medium">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-muted">{renderHighlighted(card.body)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col gap-3">
            <span className="kicker">{insight.origin.kicker}</span>
            <h3 className="text-2xl sm:text-3xl">{insight.origin.title}</h3>
            <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{renderHighlighted(insight.origin.body)}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
