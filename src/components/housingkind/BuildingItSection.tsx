import { Code2, Paintbrush, Bot } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const icons = [Code2, Paintbrush, Bot]

export function BuildingItSection() {
  const { intro, features } = housingkind.buildingIt

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Beyond the academic project"
          title="Building it — bringing Housingkind to code."
          description={intro}
          className="mb-8 max-w-2xl"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                  <Icon size={24} className="text-violet-tint" />
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-fg-muted">{feature.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
