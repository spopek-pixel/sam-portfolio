import type { ReactNode } from 'react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import housingAboutMockup from '@/assets/images/projects/housingkind/housing_about.png'
import chatBotVideo from '@/assets/images/projects/housingkind/chat-bot.mp4'

const beatLabels = ['Research', 'Realization', 'Decision', 'My call'] as const

function FeatureBlock({
  feature,
  index,
  children,
}: {
  feature: (typeof housingkind.features)[number]
  index: number
  children?: ReactNode
}) {
  const rows = [feature.research, feature.realization, feature.decision, feature.myCall].filter(Boolean) as string[]

  return (
    <Reveal delay={index * 0.08}>
      <div className="rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
        <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">
          Feature {index + 1} of {housingkind.features.length}
        </span>
        <h3 className="mt-2 text-2xl font-medium sm:text-3xl">{feature.title}</h3>

        <div className="mt-6 flex flex-col gap-4 border-l-2 border-line pl-5">
          {rows.map((row, rowIndex) => {
            const isVoice = beatLabels[rowIndex] === 'My call'
            return (
              <div key={rowIndex}>
                <span className={isVoice ? 'kicker text-acid' : 'kicker'}>{beatLabels[rowIndex]}</span>
                <p className={isVoice ? 'mt-1 font-display text-lg italic leading-snug' : 'mt-1 text-fg-muted'}>{row}</p>
              </div>
            )
          })}
        </div>

        {children}
      </div>
    </Reveal>
  )
}

export function InsightToExperience() {
  const [visualize, chat, stories] = housingkind.features

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="From insight to experience"
          title="Every feature exists because of something we heard."
          description="Here's how three of the core ones came together."
          className="mb-10 max-w-2xl"
        />

        <div className="flex flex-col gap-8">
          <FeatureBlock feature={visualize} index={0}>
            <figure className="mt-6 flex flex-col">
              <div className="flex max-h-[480px] items-center justify-center overflow-hidden rounded-2xl bg-ink">
                <img src={housingAboutMockup} alt={visualize.mockupCaption} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              <figcaption className="mt-3 text-sm text-fg-muted">{visualize.mockupCaption}</figcaption>
            </figure>
          </FeatureBlock>

          <FeatureBlock feature={chat} index={1}>
            <figure className="mt-6 flex flex-col">
              <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-violet-tint/30 bg-surface/60 shadow-[0_0_45px_rgba(124,92,255,0.28)]">
                <video src={chatBotVideo} autoPlay muted loop playsInline aria-label="Screen recording of the Housingkind AI chat assistant" className="h-auto w-full" />
              </div>
              <figcaption className="mt-3 text-center text-sm text-fg-muted">{chat.demoCaption}</figcaption>
            </figure>
          </FeatureBlock>

          <FeatureBlock feature={stories} index={2} />
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-dashed border-line p-6">
            <span className="kicker">What's next</span>
            <p className="mt-2 max-w-2xl text-sm text-fg-muted">
              Every feature here is built resident-first. A dedicated view for developers and advocates, built for the room full of skeptical
              neighbors rather than the resident at home, is the clearest opportunity ahead, and one I'd want real stakeholder testing before
              claiming it works.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
