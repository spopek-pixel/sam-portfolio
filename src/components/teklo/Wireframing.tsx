import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'
import wireframeImage from '@/assets/images/projects/teklo/wireframe_teklo.png'
import hiFiImage from '@/assets/images/projects/teklo/high_fidelity_teklo.png'

interface StageCardProps {
  label: string
  labelTone: 'muted' | 'mint'
  body: string
  image: string
  alt: string
  imageFirst?: boolean
}

function StageCard({ label, labelTone, body, image, alt, imageFirst }: StageCardProps) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className={cn('flex flex-col gap-3', imageFirst && 'lg:order-2')}>
            <span
              className={cn(
                'w-fit rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider',
                labelTone === 'mint' ? 'bg-mint/15 text-mint' : 'bg-fg-muted/10 text-fg-muted',
              )}
            >
              {label}
            </span>
            <p className="text-sm leading-relaxed text-fg-muted">{body}</p>
          </div>
          <Lightbox src={image} alt={alt} triggerClassName={cn(imageFirst && 'lg:order-1')}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-ink">
              <img src={image} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
            </div>
          </Lightbox>
        </div>
      </div>
    </Reveal>
  )
}

export function Wireframing() {
  const { intro, lowFi, hiFi } = teklo.wireframing

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Wireframing" title="From structure to system." description={intro} className="mb-10 max-w-2xl" />

        <div className="flex flex-col gap-6">
          <StageCard label={lowFi.label} labelTone="muted" body={lowFi.body} image={wireframeImage} alt="Teklo low-fidelity wireframe kit" />
          <StageCard label={hiFi.label} labelTone="mint" body={hiFi.body} image={hiFiImage} alt="Teklo high-fidelity design system" imageFirst />
        </div>
      </div>
    </section>
  )
}
