import { housingkind } from '@/data/housingkind'
import { Reveal } from '@/components/ui/Reveal'
import houseFront from '@/assets/images/projects/housingkind/house-front.png'

export function IntroducingHousingkind() {
  const { body, forWhom, close } = housingkind.intro

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">The idea</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-3xl text-4xl sm:text-5xl md:text-6xl">Introducing Housingkind.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-lg text-fg-muted">{body}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {forWhom.map((item, index) => (
            <Reveal key={item.who} delay={0.16 + index * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-surface/60 p-5">
                <span className="kicker">{item.who}</span>
                <p className="text-sm text-fg-muted">{item.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img src={houseFront} alt="The Housingkind interface, showing a real street with missing middle housing overlaid" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="mt-8 text-center text-fg-muted">{close}</p>
        </Reveal>
      </div>
    </section>
  )
}
