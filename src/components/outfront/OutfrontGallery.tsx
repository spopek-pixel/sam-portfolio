import type { Project } from '@/data/projects'
import { imagesForClient } from '@/data/projects'
import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import { cn } from '@/lib/utils'

const featureSlots = new Set([0])

export function OutfrontGallery({ project }: { project: Project }) {
  const shots = outfront.clients.flatMap((client) =>
    imagesForClient(project.slug, client.slug).map((src) => ({ src, client: client.name })),
  )

  const tiles =
    shots.length > 0
      ? shots
      : outfront.clients.map((client) => ({ src: undefined, client: client.name }))

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Gallery" title="The work, up close." className="mb-10 max-w-2xl" />

        <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4 sm:[grid-auto-flow:dense]">
          {tiles.map((tile, index) => {
            const isFeature = tiles.length > 3 && featureSlots.has(index)
            return (
              <Reveal
                key={`${tile.client}-${index}`}
                delay={(index % 8) * 0.05}
                className={cn('h-full', isFeature && 'col-span-2 row-span-2')}
              >
                {tile.src ? (
                  <Lightbox src={tile.src} alt={`${tile.client} mockup`} className="h-full" triggerClassName="h-full">
                    <div className="h-full w-full overflow-hidden rounded-2xl border border-line bg-surface">
                      <img src={tile.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  </Lightbox>
                ) : (
                  <ProjectVisual title={tile.client} accent={project.accent} className="h-full w-full" />
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
