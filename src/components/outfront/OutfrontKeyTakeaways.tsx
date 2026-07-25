import { Network, Timer, TrendingUp, Users } from 'lucide-react'
import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const iconMap = { Users, Timer, Network, TrendingUp }

export function OutfrontKeyTakeaways() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Reflection" title="Key takeaways." className="mb-10 max-w-2xl" />

        <div className="grid gap-5 sm:grid-cols-2">
          {outfront.takeaways.map((takeaway, index) => {
            const Icon = iconMap[takeaway.icon as keyof typeof iconMap]
            return (
              <Reveal key={takeaway.title} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-acid/10">
                    <Icon size={20} className="text-acid" />
                  </div>
                  <h3 className="text-lg font-medium">{takeaway.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-muted">{takeaway.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
