import { aihp } from '@/data/aihp'
import { Reveal } from '@/components/ui/Reveal'

export function AboutAihp() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:max-w-3xl">
          <Reveal>
            <span className="kicker">About AIHP</span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-fg-muted sm:text-xl">{aihp.about.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
