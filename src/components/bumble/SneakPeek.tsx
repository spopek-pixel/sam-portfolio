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

  return (
    <section className="px-6 pb-10 sm:px-14 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">A sneak peek</span>
        </Reveal>
      </div>

      <div className="mt-6 overflow-x-auto border-y border-line py-8">
        <div className="mx-auto flex w-max min-w-full justify-center gap-6 px-6">
          {cards.map((channel) => (
            <a
              key={channel.id}
              href={`#${channel.id}`}
              className="group flex w-56 shrink-0 flex-col gap-2.5 sm:w-64"
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
