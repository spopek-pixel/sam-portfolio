import { Workflow } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from './ArtifactPlaceholder'
import systemMappingDiagram from '@/assets/images/projects/housingkind/system-mapping.png'

export function SystemsMap() {
  const { caption, insights, opportunities } = housingkind.systemsMap

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Systems thinking" title="Mapping the housing ecosystem." className="mb-8" />

        <Reveal>
          <figure className="mx-auto max-w-3xl">
            <ArtifactPlaceholder
              image={systemMappingDiagram}
              label="Systems map diagram — Balancing Loop of the Missing Middle"
              icon={Workflow}
              className="aspect-[16/10] w-full"
              bgClassName="bg-[#f4f3ef]"
              imgClassName="object-contain p-4"
            />
            <figcaption className="mt-3 text-sm text-fg-muted">{caption}</figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:gap-12">
          <Reveal delay={0.08}>
            <div>
              <h3 className="kicker mb-4">Key insights</h3>
              <ul className="flex flex-col gap-3">
                {insights.map((insight) => (
                  <li key={insight} className="flex gap-3 text-fg-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-tint" />
                    {insight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div>
              <h3 className="kicker mb-4 text-acid">Where design can intervene</h3>
              <ul className="flex flex-col gap-3">
                {opportunities.map((item) => (
                  <li key={item} className="flex gap-3 text-fg-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-acid" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
