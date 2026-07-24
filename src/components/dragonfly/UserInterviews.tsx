import { CalendarCheck, Info, Quote, Search, Sparkles, TrendingUp } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const insightIcons = { Search, CalendarCheck, Sparkles, Info, TrendingUp }

export function UserInterviews() {
  const { intro, participants, insightGroups, takeaway } = dragonfly.userInterviews

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="User research" title="Twelve members, one clear pattern." description={intro} className="mb-10 max-w-2xl" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {participants.map((p, index) => (
            <Reveal key={p.role} delay={(index % 6) * 0.05} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                    {p.role}
                  </span>
                  <Quote size={16} className="shrink-0 text-violet-tint/50" />
                </div>
                <p className="text-xs text-fg-muted">{p.question}</p>
                <p className="text-sm leading-relaxed">&ldquo;{p.quote}&rdquo;</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="kicker mb-6">Key insights pulled from these interviews</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insightGroups.map((group, index) => {
              const Icon = insightIcons[group.icon as keyof typeof insightIcons]
              return (
                <Reveal key={group.title} delay={index * 0.06} className="h-full">
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                    <Icon size={20} className="text-acid" />
                    <h4 className="font-medium">{group.title}</h4>
                    <ul className="flex flex-col gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-fg-muted">
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
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl leading-snug sm:text-2xl">{takeaway}</p>
        </Reveal>
      </div>
    </section>
  )
}
