import { aivy } from '@/data/aivy'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import feedbackBoardImage from '@/assets/images/projects/aivy/feedback_miro.png'

export function AdvisorFeedback() {
  return (
    <section className="px-6 py-14 sm:px-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={aivy.advisors.kicker} title={aivy.advisors.title} description={aivy.advisors.body} className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {aivy.advisors.themes.map((theme, index) => (
              <Reveal key={theme.title} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-surface/60 p-6">
                  <h3 className="text-sm font-medium">{theme.title}</h3>
                  <p className="text-sm text-fg-muted">{theme.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
              <Lightbox src={feedbackBoardImage} alt={aivy.advisors.caption}>
                <img src={feedbackBoardImage} alt={aivy.advisors.caption} className="w-full object-cover" loading="lazy" />
              </Lightbox>
              <figcaption className="border-t border-line bg-surface/60 px-4 py-3 text-center text-xs text-fg-muted">
                {aivy.advisors.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
