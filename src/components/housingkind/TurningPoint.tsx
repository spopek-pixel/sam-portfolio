import { housingkind } from '@/data/housingkind'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob } from '@/components/ui/GradientBlob'
import boardGame from '@/assets/images/projects/housingkind/board-game.jpg'

export function TurningPoint() {
  const { quote, attribution, body, bridgeCaption } = housingkind.turningPoint

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-14 sm:py-28">
      <GradientBlob tone="mint" className="left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="kicker">The turning point</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-balance font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">"{quote}"</p>
        </Reveal>
        <Reveal delay={0.2}>
          <cite className="mt-6 block font-mono text-xs not-italic uppercase tracking-wider text-fg-muted">{attribution}</cite>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-fg-muted">{body}</p>
        </Reveal>
      </div>

      <Reveal delay={0.36}>
        <figure className="relative mx-auto mt-16 max-w-xl">
          <div className="overflow-hidden rounded-2xl border border-line">
            <img src={boardGame} alt="A 3D boardgame model showing what gentle density could look like in a neighborhood" className="w-full object-cover" loading="lazy" />
          </div>
          <figcaption className="mt-3 text-center text-sm text-fg-muted">{bridgeCaption}</figcaption>
        </figure>
      </Reveal>
    </section>
  )
}
