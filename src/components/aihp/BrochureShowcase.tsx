import { imageFor } from '@/data/projects'
import { aihp } from '@/data/aihp'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ImageSlot } from './ImageSlot'

const brochures = [
  { key: 'brochure-1', name: 'Direction One', tone: 'violet' as const },
  { key: 'brochure-2', name: 'Direction Two', tone: 'acid' as const },
  { key: 'brochure-3', name: 'Direction Three', tone: 'mint' as const },
]

export function BrochureShowcase() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Brochure Design" title={aihp.brochure.heading} description={aihp.brochure.body} className="mb-12 max-w-2xl" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {brochures.map((brochure, index) => (
            <Reveal key={brochure.key} delay={index * 0.1} className="flex flex-col gap-4">
              <ImageSlot
                src={imageFor('aihp', `${brochure.key}-cover`)}
                alt={`AIHP brochure concept, ${brochure.name}, cover`}
                label={brochure.name}
                hint={`${brochure.key}-cover.jpg`}
                tone={brochure.tone}
                aspect="aspect-[3/2]"
              />
              <div className="grid grid-cols-2 gap-3">
                <ImageSlot
                  src={imageFor('aihp', `${brochure.key}-detail-1`)}
                  alt={`${brochure.name} close-up, spread detail`}
                  hint={`${brochure.key}-detail-1.jpg`}
                  tone={brochure.tone}
                  aspect="aspect-square"
                />
                <ImageSlot
                  src={imageFor('aihp', `${brochure.key}-detail-2`)}
                  alt={`${brochure.name} close-up, typography detail`}
                  hint={`${brochure.key}-detail-2.jpg`}
                  tone={brochure.tone}
                  aspect="aspect-square"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{aihp.brochure.explanation}</p>
        </Reveal>
      </div>
    </section>
  )
}
