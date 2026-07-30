import { Quote } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function UserQuotes() {
  const { intro, quotes } = housingkind.userQuotes

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="User interviews" title="What residents told us." description={intro} className="mb-8 max-w-3xl" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quotes.map((item, index) => (
            <Reveal key={item.participant} delay={(index % 4) * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                <Quote size={18} className="shrink-0 text-violet-tint" />
                <p className="flex-1 text-sm italic leading-relaxed text-fg-muted">"{item.quote}"</p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted/60">{item.participant}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
