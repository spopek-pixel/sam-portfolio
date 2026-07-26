import { teklo } from '@/data/teklo'
import { Reveal } from '@/components/ui/Reveal'

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
    </section>
  )
}
