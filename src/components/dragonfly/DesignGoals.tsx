import { CalendarCheck, Compass, Flower2, Frown, Repeat } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const iconMap = { Frown, CalendarCheck, Compass, Repeat, Flower2 }

export function DesignGoals() {
  const goals = dragonfly.designGoals

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Design goals" title="Five principles, not a paragraph." className="mb-10" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {goals.map((goal, index) => {
            const Icon = iconMap[goal.icon as keyof typeof iconMap]
            return (
              <Reveal key={goal.title} delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col items-center gap-3 rounded-3xl border border-line bg-surface p-6 text-center shadow-[0_16px_40px_rgba(59,50,45,0.06)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-raised text-violet-tint">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-sm font-medium leading-snug">{goal.title}</h3>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
