import { GraduationCap, Quote, Wallet } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const iconMap = { GraduationCap, Wallet }

export function ResearchDiscovery() {
  const { intro, segments, interviews, takeaway } = teklo.research

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Research & discovery" title="Two audiences, one shared fear." description={intro} className="mb-10 max-w-2xl" />

        <div className="grid gap-4 sm:grid-cols-2">
          {segments.map((segment, index) => {
            const Icon = iconMap[segment.icon as keyof typeof iconMap]
            return (
              <Reveal key={segment.title} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/10">
                    <Icon size={20} className="text-mint" />
                  </div>
                  <h3 className="text-lg font-medium">{segment.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-muted">{segment.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <Reveal>
            <h3 className="kicker mb-6">What I heard</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {interviews.map((interview, index) => (
              <Reveal key={interview.name} delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium">{interview.name}</span>
                      <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                        {interview.role}
                      </span>
                    </div>
                    <Quote size={16} className="shrink-0 text-mint/50" />
                  </div>
                  <div className="flex flex-col gap-3">
                    {interview.qa.map((qa) => (
                      <div key={qa.question} className="flex flex-col gap-1">
                        <p className="text-xs text-fg-muted">{qa.question}</p>
                        <p className="text-sm leading-relaxed">&ldquo;{qa.answer}&rdquo;</p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-auto font-mono text-[10px] uppercase tracking-wider text-fg-muted/60">Interviewed {interview.date}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl leading-snug sm:text-2xl">{takeaway}</p>
        </Reveal>
      </div>
    </section>
  )
}
