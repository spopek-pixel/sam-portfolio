import { Quote } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

function StatRing({ value, percent }: { value: string; percent: number }) {
  const clamped = Math.max(0, Math.min(100, percent))

  return (
    <div
      className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(var(--color-acid) ${clamped * 3.6}deg, rgba(244,243,247,0.08) 0deg)`,
      }}
    >
      <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-ink">
        <span className="font-display text-xl text-gradient">{value}</span>
      </div>
    </div>
  )
}

export function TestingFeedback() {
  const { intro, stats, quotes } = housingkind.testingFeedback

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Usability testing" title="Testing & feedback." description={intro} className="mb-8 max-w-3xl" />

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="h-full">
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-line p-6 text-center">
                <StatRing value={stat.value} percent={stat.percent ?? 100} />
                <span className="text-sm text-fg-muted">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {quotes.map((quote, index) => (
            <Reveal key={quote.quote} delay={0.1 + index * 0.06}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-surface/60 p-6">
                <Quote size={18} className="text-violet-tint" />
                <p className="text-sm italic text-fg-muted">"{quote.quote}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
