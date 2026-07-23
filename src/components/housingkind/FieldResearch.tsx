import { Camera } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from './ArtifactPlaceholder'
import tour1 from '@/assets/images/projects/housingkind/tour1.png'
import tour2 from '@/assets/images/projects/housingkind/tour2.png'
import tour3 from '@/assets/images/projects/housingkind/tour3.png'

const tourImages = [tour1, tour2, tour3]

export function FieldResearch() {
  const { body, photos } = housingkind.fieldResearch

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Field research" title="Getting out from behind the desk." className="mb-8" />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center lg:gap-12">
          <div className="flex flex-col gap-4">
            {body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.06}>
                <p className="text-fg-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {photos.map((photo, index) => (
              <Reveal key={photo.caption} delay={0.1 + index * 0.08}>
                <figure className="flex h-full flex-col gap-2">
                  <ArtifactPlaceholder
                    image={tourImages[index]}
                    label={`Field photo ${index + 1}`}
                    icon={Camera}
                    className="aspect-[4/5] w-full"
                  />
                  <figcaption className="text-xs leading-relaxed text-fg-muted">{photo.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
