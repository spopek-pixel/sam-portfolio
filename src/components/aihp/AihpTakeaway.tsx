import { aihp } from '@/data/aihp'
import { Reveal } from '@/components/ui/Reveal'

export function AihpTakeaway() {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">The Takeaway</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl md:text-5xl">{aihp.takeaway.heading}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-4xl font-display text-xl leading-snug text-fg-muted sm:text-2xl">{aihp.takeaway.body}</p>
        </Reveal>
      </div>
    </section>
  )
}
