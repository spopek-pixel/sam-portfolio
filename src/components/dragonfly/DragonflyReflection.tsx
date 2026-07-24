import { Lightbulb, ListTree, Wrench } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const groups = [
  { key: 'lessonsLearned', title: 'Lessons learned', icon: Lightbulb },
  { key: 'whatIdImprove', title: "What I'd improve", icon: Wrench },
  { key: 'keyTakeaways', title: 'Key takeaways', icon: ListTree },
] as const

export function DragonflyReflection() {
  const { lessonsLearned, whatIdImprove, keyTakeaways } = dragonfly.reflection
  const lists = { lessonsLearned, whatIdImprove, keyTakeaways }

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Reflection" title="Looking back on the process." className="mb-10" />

        <div className="grid gap-6 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.key} delay={index * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-line bg-surface p-6 shadow-[0_16px_40px_rgba(59,50,45,0.06)]">
                <div className="flex items-center gap-2.5">
                  <group.icon size={20} className="text-violet-tint" />
                  <h3 className="font-medium">{group.title}</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {lists[group.key].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-fg-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-acid" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
