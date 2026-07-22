import type { Project } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import { Reveal } from '@/components/ui/Reveal'

export function VisualGallery({ project }: { project: Project }) {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading kicker="The campaigns" title="Four briefs, four solutions." />
        <div className="grid gap-6 sm:grid-cols-2">
          {project.process.map((campaign, index) => (
            <Reveal key={campaign.title} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface/60 p-6">
                <ProjectVisual
                  image={project.images[index]}
                  title={campaign.title}
                  accent={project.accent}
                  className="aspect-[4/3] w-full"
                />
                <h3 className="text-xl">{campaign.title}</h3>
                <p className="text-fg-muted">{campaign.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
