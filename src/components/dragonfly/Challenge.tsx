import { Check } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import currentApp from '@/assets/images/projects/dragonfly-yoga/dragonfly_current.png'

export function Challenge() {
  const { intro, supporting, currentApp: currentAppCaption } = dragonfly.challenge

  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="The challenge" title="Where the old experience fell apart." className="mb-8" />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-fg-muted">{intro}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="flex flex-col gap-3">
                {supporting.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-fg-muted sm:text-base">
                    <Check size={18} className="mt-0.5 shrink-0 text-violet-tint" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <figure className="overflow-hidden rounded-2xl border border-line">
              <img src={currentApp} alt="The current Dragonfly Hot Yoga digital presence" className="w-full" loading="lazy" />
              <figcaption className="bg-surface/60 px-4 py-3 text-sm text-fg-muted">{currentAppCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
