import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function ProjectOutcomes() {
  const { synthesis, infoCards, quote, stats } = housingkind.outcomes

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="The outcome" title="Project outcomes." description={synthesis} className="mb-8 max-w-3xl" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.05}>
              <div className="flex h-full flex-col gap-1 rounded-2xl border border-line bg-surface/60 p-5">
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{card.label}</span>
                <span className="text-sm">{card.body}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <blockquote className="mt-8 rounded-2xl bg-surface/60 p-8 text-center">
            <p className="font-display text-2xl leading-snug sm:text-3xl">"{quote.quote}"</p>
            <cite className="mt-3 block text-sm not-italic text-fg-muted">{quote.attribution}</cite>
          </blockquote>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={0.1 + index * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl border border-line p-5">
                <span className="font-display text-3xl text-gradient">{stat.value}</span>
                <span className="text-sm text-fg-muted">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
