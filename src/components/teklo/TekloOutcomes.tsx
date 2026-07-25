import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const groups = [
  { key: 'solved', title: 'Problems solved', icon: CheckCircle2 },
  { key: 'benefits', title: 'User benefits', icon: Sparkles },
  { key: 'whatsNext', title: "What's next", icon: ArrowRight },
] as const

export function TekloOutcomes() {
  const { intro, solved, benefits, whatsNext } = teklo.outcomes
  const lists = { solved, benefits, whatsNext }

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Outcomes" title="What this redesign changed." description={intro} className="mb-10 max-w-3xl" />

        <div className="grid gap-6 sm:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.key} delay={index * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-6">
                <div className="flex items-center gap-2.5">
                  <group.icon size={20} className="text-mint" />
                  <h3 className="font-medium">{group.title}</h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {lists[group.key].map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-fg-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-tint" />
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
