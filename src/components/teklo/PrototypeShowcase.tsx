import { ArrowUpRight } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { Lightbox } from '@/components/ui/Lightbox'
import newTekloImage from '@/assets/images/projects/teklo/new_teklo.png'

export function PrototypeShowcase() {
  const { body } = teklo.prototype

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Prototype" title="The prototype, screen by screen." description={body} className="mb-14 max-w-2xl" />

        <Reveal>
          <Lightbox src={newTekloImage} alt="Teklo prototype: onboarding, home, and search screens">
            <div className="mx-auto max-w-3xl">
              <img
                src={newTekloImage}
                alt="Teklo prototype: onboarding, home, and search screens"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>
          </Lightbox>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
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
