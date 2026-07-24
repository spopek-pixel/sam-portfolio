import { dragonfly } from '@/data/dragonfly'
import { Reveal } from '@/components/ui/Reveal'

export function Overview() {
  const { intro, hmw } = dragonfly.overview

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <Reveal className="lg:flex-1">
          <span className="kicker">Overview</span>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted sm:text-xl">{intro}</p>
        </Reveal>
        <Reveal delay={0.14} className="lg:flex-1">
          <blockquote className="rounded-2xl border-l-4 border-acid bg-surface/60 p-6 lg:p-8">
            <p className="font-display text-xl leading-snug sm:text-2xl">"{hmw}"</p>
            <cite className="mt-4 block font-mono text-xs uppercase not-italic tracking-wider text-fg-muted">
              How might we
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
