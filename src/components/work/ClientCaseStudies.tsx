import type { Project } from '@/data/projects'
import { imagesForClient } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import { Reveal } from '@/components/ui/Reveal'

export function ClientCaseStudies({ project }: { project: Project }) {
  const clients = project.clients ?? []
  if (clients.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading kicker="The campaigns" title="Four briefs, four solutions." />

        {clients.map((client, index) => {
          const images = imagesForClient(project.slug, client.folder)

          return (
            <Reveal key={client.name} delay={index * 0.06}>
              <div className="flex flex-col gap-8 border-t border-line pt-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_240px]">
                  <div className="flex flex-col gap-6">
                    <h3 className="text-3xl sm:text-4xl">{client.name}</h3>
                    <div className="flex flex-col gap-2">
                      <span className="kicker">Overview</span>
                      <p className="max-w-2xl text-fg-muted">{client.overview}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="kicker">What I did</span>
                      <p className="max-w-2xl text-fg-muted">{client.whatIDid}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 lg:pt-14">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Tools used</span>
                      <span className="text-sm sm:text-base">{client.tools.join(', ')}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Timeline</span>
                      <span className="text-sm sm:text-base">{client.timeline}</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[0, 1].map((slot) => (
                    <ProjectVisual
                      key={slot}
                      image={images[slot]}
                      title={client.name}
                      accent={project.accent}
                      className="aspect-[16/10] w-full"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
