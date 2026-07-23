import { Bot, Brain, Cloud, MessagesSquare, PenTool, Telescope } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import chatBotVideo from '@/assets/images/projects/housingkind/chat-bot.mp4'

const cardIcons = [Cloud, Bot, MessagesSquare, PenTool, Brain, Telescope]

export function BuildingWithAI() {
  const { intro, cards, chatCaption } = housingkind.aiExperience

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Building with AI" title="AI is part of the product." description={intro} className="mb-8" />

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:gap-10">
          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = cardIcons[index]
              const isVision = index === cards.length - 1
              return (
                <Reveal key={card.title} delay={index * 0.06} className="h-full">
                  <div
                    className={
                      isVision
                        ? 'flex h-full flex-col gap-2 rounded-2xl border border-violet-tint/40 bg-violet/10 p-4'
                        : 'flex h-full flex-col gap-2 rounded-2xl border border-line bg-surface/60 p-4'
                    }
                  >
                    <Icon size={18} className={isVision ? 'text-violet-tint' : 'text-acid'} />
                    <h3 className="text-sm font-medium">{card.title}</h3>
                    <p className="text-xs leading-relaxed text-fg-muted">{card.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.15}>
            <figure className="mx-auto w-full max-w-[300px]">
              <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
                <video
                  src={chatBotVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label="Screen recording of the Housingkind AI chat assistant"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-fg-muted">{chatCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
