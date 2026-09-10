import { Workflow } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from './ArtifactPlaceholder'
import systemMappingDiagram from '@/assets/images/projects/housingkind/system-mapping.png'

export function SeeingTheSystem() {
  const { lede, insights, bridge } = housingkind.system

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Zooming out"
          title="Seeing the whole system."
          description={lede}
          descriptionClassName="max-w-none"
          className="mb-8"
        />

        <Reveal>
          <figure className="mx-auto max-w-3xl">
            <ArtifactPlaceholder
              image={systemMappingDiagram}
              label="Systems map diagram: Balancing Loop of the Missing Middle"
              icon={Workflow}
              className="aspect-[16/10] w-full"
              bgClassName="bg-[#f4f3ef]"
              imgClassName="object-contain p-4"
            />
          </figure>
        </Reveal>

        <div className="mt-8">
          <ul className="flex flex-col gap-3">
            {insights.map((insight) => (
              <li key={insight} className="flex gap-3 text-fg-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-tint" />
                {insight}
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-none text-lg">{bridge}</p>
        </Reveal>
      </div>
    </section>
  )
}
