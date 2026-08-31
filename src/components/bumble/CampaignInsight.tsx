import { motion } from 'framer-motion'
import type { bumbleConcept } from '@/data/bumbleConcept'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { renderHighlighted } from '@/lib/highlightText'

type Research = (typeof bumbleConcept)['insight']['research']

export function CampaignInsight({ research }: { research: Research }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={research.kicker} title={research.title} className="mb-8" />

        <div className="flex flex-col">
          {research.cards.map((card, index) => (
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
    </section>
  )
}
