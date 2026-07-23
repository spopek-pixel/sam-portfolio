import { Users, BookOpen, GitCompare, Waypoints, Camera } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from './ArtifactPlaceholder'
import houseMeetPhoto from '@/assets/images/projects/housingkind/house_meet.png'

const icons = [Users, BookOpen, GitCompare, Waypoints]

export function ResearchMethods() {
  const { methods, photoCaption } = housingkind.researchMethods

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Research" title="Research methods." className="mb-8" />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="flex flex-col gap-5">
            {methods.map((method, index) => {
              const Icon = icons[index]
              return (
                <Reveal key={method.title} delay={index * 0.06}>
                  <div className="flex gap-4">
                    <Icon size={22} className="mt-1 shrink-0 text-violet-tint" />
                    <div>
                      <h3 className="font-medium">{method.title}</h3>
                      <p className="mt-1 text-sm text-fg-muted">{method.body}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.2} className="h-full">
            <figure className="flex h-full flex-col">
              <ArtifactPlaceholder
                image={houseMeetPhoto}
                label="Ideation session photo"
                icon={Camera}
                className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-0 lg:flex-1"
              />
              <figcaption className="mt-3 shrink-0 text-sm text-fg-muted">{photoCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
