import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { Lightbox } from '@/components/ui/Lightbox'
import introImage from '@/assets/images/projects/teklo/intro_1.png'
import homeImage from '@/assets/images/projects/teklo/home.png'
import checkoutImage from '@/assets/images/projects/teklo/checkout1.png'

const screens = [
  { label: 'Onboarding', src: introImage, alt: 'Teklo onboarding screen' },
  { label: 'Home', src: homeImage, alt: 'Teklo home screen' },
  { label: 'Checkout', src: checkoutImage, alt: 'Teklo checkout screen' },
]

export function PrototypeShowcase() {
  const { body } = teklo.prototype

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Prototype" title="The prototype, screen by screen." description={body} className="mb-14 max-w-2xl" />

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-3">
          {screens.map((screen, index) => (
            <div key={screen.label} className="flex items-center gap-4 sm:gap-3">
              <Reveal delay={index * 0.1}>
                <div className="flex flex-col items-center gap-2">
                  <Lightbox src={screen.src} alt={screen.alt}>
                    <div className="aspect-[9/16] w-36 overflow-hidden rounded-2xl border border-line sm:w-44 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                      <img src={screen.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  </Lightbox>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">{screen.label}</span>
                </div>
              </Reveal>
              {index < screens.length - 1 && <ArrowRight size={20} className="hidden shrink-0 text-mint/50 sm:block" />}
            </div>
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
