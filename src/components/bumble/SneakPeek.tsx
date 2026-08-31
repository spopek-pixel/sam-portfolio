import { ArrowRight } from 'lucide-react'
import type { bumbleConcept } from '@/data/bumbleConcept'
import { Reveal } from '@/components/ui/Reveal'
import bffBillboard from '@/assets/images/projects/bumble-bff-concept/bff-billboard.png'
import bffBuswrap from '@/assets/images/projects/bumble-bff-concept/bff-buswrap.png'
import bffBusPoster from '@/assets/images/projects/bumble-bff-concept/bff-bus-poster.png'
import bffSocial from '@/assets/images/projects/bumble-bff-concept/bff-social.png'

const imageMap: Record<string, string> = {
  'bff-billboard.png': bffBillboard,
  'bff-buswrap.png': bffBuswrap,
  'bff-bus-poster.png': bffBusPoster,
  'bff-social.png': bffSocial,
}

type Channel = (typeof bumbleConcept)['channels'][number]

export function SneakPeek({ channels }: { channels: Channel[] }) {
  const cards = channels.filter((channel) => channel.image)
  const doubled = [...cards, ...cards]

  return (
    <section className="px-6 pb-10 sm:px-14 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">A sneak peek</span>
        </Reveal>
      </div>

      <div className="relative mt-6 overflow-hidden border-y border-line py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />

        <div className="flex w-max animate-[marquee_36s_linear_infinite] gap-6 [animation-play-state:running] hover:[animation-play-state:paused] motion-reduce:animate-none">
          {doubled.map((channel, index) => (
            <a
              key={`${channel.id}-${index}`}
              href={`#${channel.id}`}
              className="group flex w-40 shrink-0 flex-col gap-2.5 sm:w-48"
            >
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-line shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                <img
                  src={imageMap[channel.image as string]}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted transition-colors group-hover:text-fg">
                See more <ArrowRight size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
