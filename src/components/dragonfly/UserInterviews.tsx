import { CalendarCheck, Quote, Search, Sparkles } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const insightIcons = { Search, CalendarCheck, Sparkles }

export function UserInterviews() {
  const { intro, participants, standoutInsights, takeaway } = dragonfly.userInterviews

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

        <div className="mt-16 border-t border-line pt-12">
          <Reveal>
            <h3 className="kicker mb-8">What stood out most</h3>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-3 sm:divide-x sm:divide-line">
            {standoutInsights.map((insight, index) => {
              const Icon = insightIcons[insight.icon as keyof typeof insightIcons]
              return (
                <Reveal key={insight.title} delay={index * 0.08}>
                  <div className="flex flex-col gap-4 sm:px-8 sm:first:pl-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-acid/10">
                      <Icon size={22} className="text-acid" />
                    </div>
                    <h4 className="text-lg font-medium">{insight.title}</h4>
                    <p className="text-sm leading-relaxed text-fg-muted">{insight.body}</p>
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
