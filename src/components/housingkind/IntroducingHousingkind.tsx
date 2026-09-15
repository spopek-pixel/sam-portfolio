import { Building2, Home, Landmark } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { Reveal } from '@/components/ui/Reveal'
import houseFront from '@/assets/images/projects/housingkind/house-front.png'

const audienceIcons = [Home, Building2, Landmark]

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

        <Reveal delay={0.2}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img
              src={houseFront}
              alt="The Housingkind interface, showing a real street with missing middle housing overlaid"
              className="aspect-[20/9] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {forWhom.map((item, index) => {
            const Icon = audienceIcons[index]
            return (
              <Reveal key={item.who} delay={0.3 + index * 0.06}>
                <div className="flex flex-col gap-2.5">
                  <Icon size={22} className="text-violet-tint" />
                  <span className="kicker">{item.who}</span>
                  <p className="text-sm text-fg-muted">{item.value}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.5}>
          <p className="mt-10 max-w-2xl text-fg-muted">{close}</p>
        </Reveal>
      </div>
    </section>
  )
}
