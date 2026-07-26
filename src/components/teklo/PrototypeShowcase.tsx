import { ArrowUpRight } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { Lightbox } from '@/components/ui/Lightbox'
import introImage from '@/assets/images/projects/teklo/intro_1.png'
import homeImage from '@/assets/images/projects/teklo/home.png'
import checkoutImage from '@/assets/images/projects/teklo/checkout1.png'

const screens = [
  { title: 'Onboarding', src: introImage, rotate: '-rotate-6', shift: 'translate-x-6 translate-y-4', z: 0 },
  { title: 'Home', src: homeImage, rotate: 'rotate-0', shift: 'translate-y-0', z: 10 },
  { title: 'Checkout', src: checkoutImage, rotate: 'rotate-6', shift: '-translate-x-6 translate-y-4', z: 0 },
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
                <Lightbox src={screen.src} alt={`Teklo ${screen.title} screen`}>
                  <div className="aspect-[9/16] w-full overflow-hidden rounded-[1.5rem] border border-line bg-white p-1 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                    <img src={screen.src} alt="" className="h-full w-full rounded-[1.1rem] object-contain" loading="lazy" />
                  </div>
                </Lightbox>
                <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-fg-muted">{screen.title}</p>
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
