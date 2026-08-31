import { ArrowDown } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import bffBillboard from '@/assets/images/projects/bumble-bff-concept/bff-billboard.png'
import bffBuswrap from '@/assets/images/projects/bumble-bff-concept/bff-buswrap.png'
import bffBusPoster from '@/assets/images/projects/bumble-bff-concept/bff-bus-poster.png'
import bffSocial from '@/assets/images/projects/bumble-bff-concept/bff-social.png'

const cards = [
  { src: bffBillboard, rotate: '-rotate-6' },
  { src: bffBuswrap, rotate: 'rotate-3' },
  { src: bffBusPoster, rotate: '-rotate-2' },
  { src: bffSocial, rotate: 'rotate-6' },
]

export function SneakPeek() {
  return (
    <section className="px-6 pb-10 sm:px-14 sm:pb-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="kicker">A sneak peek</span>
        </Reveal>

        <div className="flex items-center justify-center py-6">
          {cards.map((card, index) => (
            <Reveal key={card.src} delay={index * 0.06}>
              <div
                className={`${card.rotate} ${index > 0 ? '-ml-8 sm:-ml-10' : ''} h-32 w-24 shrink-0 overflow-hidden rounded-xl border border-line bg-surface shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-0 sm:h-44 sm:w-32`}
              >
                <img src={card.src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href="#executions"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted transition-colors hover:text-fg"
          >
            See the full campaign <ArrowDown size={14} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
