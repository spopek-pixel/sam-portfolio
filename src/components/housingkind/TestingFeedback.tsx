import { Quote } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function TestingFeedback() {
  const { stats, quotes } = housingkind.testingFeedback

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Usability testing" title="Testing & feedback." className="mb-8" />

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-line p-6">
                <span className="font-display text-3xl text-gradient">{stat.value}</span>
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
