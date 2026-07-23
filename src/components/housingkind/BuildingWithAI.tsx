import { Bot, Brain, Cloud, MessagesSquare, PenTool, Telescope } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from './ArtifactPlaceholder'

const cardIcons = [Cloud, Bot, MessagesSquare, PenTool, Brain, Telescope]

export function BuildingWithAI() {
  const { intro, cards, chatCaption } = housingkind.aiExperience

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Building with AI" title="AI is part of the product." description={intro} className="mb-8" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = cardIcons[index]
            const isVision = index === cards.length - 1
            return (
              <Reveal key={card.title} delay={index * 0.06} className="h-full">
                <div
                  className={
                    isVision
                      ? 'flex h-full flex-col gap-3 rounded-2xl border border-violet-tint/40 bg-violet/10 p-6'
                      : 'flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6'
                  }
                >
                  <Icon size={22} className={isVision ? 'text-violet-tint' : 'text-acid'} />
                  <h3 className="font-medium">{card.title}</h3>
                  <p className="text-sm text-fg-muted">{card.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <figure className="mx-auto mt-10 max-w-3xl">
            <ArtifactPlaceholder label="AI chat assistant screenshot" icon={Bot} className="aspect-[16/9] w-full" />
            <figcaption className="mt-3 text-sm text-fg-muted">{chatCaption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
