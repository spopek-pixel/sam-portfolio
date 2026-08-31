import { motion } from 'framer-motion'
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
          <SectionHeading kicker={insight.research.kicker} title={insight.research.title} className="mb-8 max-w-2xl" />

          <div className="flex flex-col">
            {insight.research.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="flex items-baseline gap-5 border-b border-line py-7 last:border-b-0 sm:gap-8"
                >
                  <span className="font-display text-4xl text-line sm:text-5xl">{card.number}</span>
                  <div>
                    <h3 className="text-lg font-medium sm:text-xl">{card.title}</h3>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-fg-muted sm:text-base">
                      {renderHighlighted(card.body)}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <div className="flex h-full flex-col justify-center gap-3">
              <span className="kicker">{insight.origin.kicker}</span>
              <h3 className="text-2xl sm:text-3xl">{insight.origin.title}</h3>
              <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{renderHighlighted(insight.origin.body)}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <blockquote className="flex h-full flex-col justify-center rounded-2xl border-l-4 border-acid bg-surface/60 p-6 lg:p-8">
              <p className="font-display text-2xl leading-snug sm:text-3xl">&ldquo;{insight.origin.pullQuote}&rdquo;</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
