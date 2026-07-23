import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/work/ProjectCard'
import { LinkButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export function FeaturedWork() {
  const featured = projects.filter((project) => project.featured)

  return (
    <section id="work" className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Selected work"
            title="Case studies, not just screens."
            description="Three projects that show the full arc — research, decisions, and the interface that came out of them."
          />
          <Reveal delay={0.1}>
            <LinkButton href="/work" variant="secondary" className="whitespace-nowrap">
              View all work
            </LinkButton>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
