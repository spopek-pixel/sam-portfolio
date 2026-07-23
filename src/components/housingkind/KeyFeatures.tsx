import { BookOpenText, Bot, Library, Map, MonitorSmartphone, Scale } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const featureIcons = [Bot, Map, BookOpenText, Scale, Library, MonitorSmartphone]

export function KeyFeatures() {
  const features = housingkind.keyFeatures

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Key features" title="What Housingkind does." className="mb-8" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <Reveal key={feature.title} delay={index * 0.06} className="h-full">
                <div className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-violet-tint/50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-violet-tint transition-colors group-hover:border-violet-tint/50">
                    <Icon size={20} />
                  </span>
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
