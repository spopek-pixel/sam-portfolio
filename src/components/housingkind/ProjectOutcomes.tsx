import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function ProjectOutcomes() {
  const { synthesis, infoCards, quote, usersGained } = housingkind.outcomes

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Impact" title="What it changed." description={synthesis} className="mb-8 max-w-3xl" />

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

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {usersGained.map((item, index) => (
            <Reveal key={item} delay={0.16 + index * 0.05} className="h-full">
              <div className="flex h-full items-start gap-3 rounded-2xl bg-surface/60 p-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                <p className="text-sm text-fg-muted">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
