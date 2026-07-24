import { Bot, CalendarCheck, CalendarClock, ListRestart, UserRound, Waypoints } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from '@/components/housingkind/ArtifactPlaceholder'

const icons = [Waypoints, CalendarCheck, Bot, ListRestart, CalendarClock, UserRound]

export function FinalExperience() {
  const features = dragonfly.finalExperience

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="The final experience" title="What the redesign actually does." className="mb-10" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={feature.title} delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface p-5 shadow-[0_16px_40px_rgba(59,50,45,0.06)]">
                  <ArtifactPlaceholder label={`${feature.title} screen`} icon={Icon} className="aspect-[4/3] w-full" />
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-fg-muted">{feature.body}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
