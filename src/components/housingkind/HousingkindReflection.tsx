import { Footprints, GraduationCap, Sparkles, Wrench } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const groupIcons = [GraduationCap, Wrench, Sparkles, Footprints]

export function HousingkindReflection() {
  const { groups, highlight } = housingkind.reflection

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Reflection" title="Looking back, moving forward." className="mb-8" />

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {groups.map((group, index) => {
            const Icon = groupIcons[index]
            return (
              <Reveal key={group.title} delay={index * 0.07} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-6">
                  <div className="flex items-center gap-2.5">
                    <Icon size={20} className="text-violet-tint" />
                    <h3 className="font-medium">{group.title}</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-fg-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-tint" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-2xl leading-snug sm:text-3xl">
            "{highlight}"
          </p>
        </Reveal>
      </div>
    </section>
  )
}
