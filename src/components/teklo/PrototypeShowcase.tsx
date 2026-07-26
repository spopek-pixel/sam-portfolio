import { ArrowUpRight } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { ProjectVisual } from '@/components/ui/ProjectVisual'

const screens = [
  { title: 'Search & browse', rotate: '-rotate-6', shift: 'translate-x-6 translate-y-4', z: 0 },
  { title: 'Item detail', rotate: 'rotate-0', shift: 'translate-y-0', z: 10 },
  { title: 'Checkout', rotate: 'rotate-6', shift: '-translate-x-6 translate-y-4', z: 0 },
]

export function PrototypeShowcase() {
  const { body } = teklo.prototype

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Prototype" title="The prototype, screen by screen." description={body} className="mb-14 max-w-2xl" />

        <div className="relative mx-auto flex max-w-2xl items-end justify-center">
          {screens.map((screen) => (
            <Reveal key={screen.title} className={`relative w-40 shrink-0 sm:w-52 ${screen.rotate} ${screen.shift}`}>
              <div className="relative" style={{ zIndex: screen.z }}>
                <ProjectVisual
                  title={screen.title}
                  accent="mint"
                  className="aspect-[9/16] w-full shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <LinkButton
              href="https://www.figma.com/proto/AxRtilipdp5Y9OSZteljwW/Teklo?node-id=5-122&p=f&t=lIW24nDlfenidhOJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A122"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="px-5 py-2.5 text-sm"
            >
              View interactive prototype <ArrowUpRight size={16} />
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
