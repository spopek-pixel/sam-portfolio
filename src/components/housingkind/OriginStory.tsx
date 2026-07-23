import { housingkind } from '@/data/housingkind'
import { Reveal } from '@/components/ui/Reveal'

export function OriginStory() {
  const { body, hmw, hmwAttribution } = housingkind.originStory

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">Where it started</span>
        </Reveal>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col gap-4">
            {body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.06 + index * 0.06}>
                <p className="text-fg-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="h-full">
            <blockquote className="flex h-full flex-col justify-center rounded-2xl border-l-4 border-acid bg-surface/60 p-6 lg:p-8">
              <p className="font-display text-xl leading-snug sm:text-2xl">"{hmw}"</p>
              <cite className="mt-3 block font-mono text-xs uppercase not-italic tracking-wider text-fg-muted">
                {hmwAttribution}
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
