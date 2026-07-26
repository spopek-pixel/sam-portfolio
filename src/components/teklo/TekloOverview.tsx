import { teklo } from '@/data/teklo'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import introImage from '@/assets/images/projects/teklo/intro_teklo.png'

export function TekloOverview() {
  const { intro } = teklo.overview

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        <Reveal>
          <span className="kicker">Overview</span>
        </Reveal>
        {intro.map((paragraph, index) => (
          <Reveal key={paragraph} delay={0.06 + index * 0.06}>
            <p className="text-lg leading-relaxed text-fg-muted sm:text-xl">{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="mx-auto mt-10 max-w-5xl">
          <Lightbox src={introImage} alt="Teklo onboarding — curated deals, one-day delivery, smart picks">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-surface">
              <img src={introImage} alt="" className="h-full w-full object-contain" loading="lazy" />
            </div>
          </Lightbox>
        </div>
      </Reveal>
    </section>
  )
}
