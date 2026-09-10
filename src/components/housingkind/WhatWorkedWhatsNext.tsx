import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function WhatWorkedWhatsNext() {
  const { changed, limitation, next, highlight } = housingkind.reflection

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Looking back" title="What worked, what didn't, what's next." className="mb-10 max-w-2xl" />

        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="kicker mb-4">What changed</h3>
              <ul className="flex flex-col gap-3">
                {changed.map((item) => (
                  <li key={item} className="flex gap-3 text-fg-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-acid" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <h3 className="kicker mb-4">What limited it</h3>
              <p className="text-fg-muted">{limitation}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-8">
            <h3 className="kicker mb-4">What I'd explore next</h3>
            <ul className="flex flex-col gap-3">
              {next.map((item) => (
                <li key={item} className="flex gap-3 text-fg-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-tint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">"{highlight}"</p>
        </Reveal>
      </div>
    </section>
  )
}
