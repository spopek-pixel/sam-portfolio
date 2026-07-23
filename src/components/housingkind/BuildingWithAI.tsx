import { Bot, Brain, Cloud, MessagesSquare, PenTool, Telescope } from 'lucide-react'
import { motion } from 'framer-motion'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob } from '@/components/ui/GradientBlob'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import chatBotVideo from '@/assets/images/projects/housingkind/chat-bot.mp4'

const cardIcons = [Cloud, Bot, MessagesSquare, PenTool, Brain, Telescope]

export function BuildingWithAI() {
  const { intro, cards, chatCaption } = housingkind.aiExperience
  const reducedMotion = usePrefersReducedMotion()

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
            <figure className="relative mx-auto w-full max-w-[300px]">
              <GradientBlob
                tone="violet"
                className="left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2"
              />
              <GradientBlob tone="acid" className="-bottom-10 -right-8 h-[180px] w-[180px] opacity-20" />

              <motion.div
                className="relative"
                animate={reducedMotion ? undefined : { y: [0, -7, 0] }}
                transition={reducedMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="overflow-hidden rounded-2xl border border-violet-tint/30 bg-surface/60 shadow-[0_0_45px_rgba(124,92,255,0.28)]">
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

                <div className="absolute -right-3 -top-3 flex items-center gap-2 rounded-full border border-line bg-ink/90 px-3 py-1.5 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    {!reducedMotion && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid/60" />
                    )}
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">Live demo</span>
                </div>
              </motion.div>

              <figcaption className="relative mt-4 text-center text-xs text-fg-muted">{chatCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
