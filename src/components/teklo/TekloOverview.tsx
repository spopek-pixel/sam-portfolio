import { teklo } from '@/data/teklo'
import { Reveal } from '@/components/ui/Reveal'

export function TekloOverview() {
  const { intro, hmw } = teklo.overview

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex flex-col gap-4 lg:flex-1">
          <Reveal>
            <span className="kicker">Overview</span>
          </Reveal>
          {intro.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.06 + index * 0.06}>
              <p className="text-lg leading-relaxed text-fg-muted sm:text-xl">{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="lg:flex-1">
          <blockquote className="rounded-2xl border-l-4 border-mint bg-surface/60 p-6 lg:p-8">
            <p className="text-lg leading-relaxed sm:text-xl">"{hmw}"</p>
            <cite className="mt-4 block font-mono text-xs uppercase not-italic tracking-wider text-fg-muted">
              How might we
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
