import type { Project } from '@/data/projects'
import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ClientCaseStudy } from './ClientCaseStudy'

export function ClientCaseStudies({ project }: { project: Project }) {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <SectionHeading kicker="The campaigns" title="Four briefs, four solutions." className="max-w-2xl" />

        <div className="flex flex-col gap-6">
          {outfront.clients.map((client, index) => (
            <ClientCaseStudy key={client.slug} client={client} slug={project.slug} accent={project.accent} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
