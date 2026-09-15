import { Quote } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import transcendGroupPhoto from '@/assets/images/projects/housingkind/transcend_group.jpg'

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-full flex-col items-center gap-2 rounded-2xl border border-line p-6 text-center">
      <span className="font-display text-3xl text-gradient sm:text-4xl">{value}</span>
      <span className="text-sm text-fg-muted">{label}</span>
    </div>
  )
}

export function TestingWithRealPeople() {
  const { intro, stats, scopeNote, quotes, recognition, recognitionCaption } = housingkind.testing

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Testing with real people"
          title="Honest evidence, not a highlight reel."
          description={intro}
          descriptionClassName="max-w-none"
          className="mb-8 max-w-3xl"
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="h-full">
              <StatTile value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-fg-muted">{scopeNote}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {quotes.map((quote, index) => (
            <Reveal key={quote.quote} delay={0.2 + index * 0.06}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-surface/60 p-6">
                <Quote size={18} className="text-violet-tint" />
                <p className="text-sm italic text-fg-muted">"{quote.quote}"</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <img src={transcendGroupPhoto} alt="Sam and her teammates at the Transcend Competition" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col gap-3">
              <span className="kicker">Recognition</span>
              <p className="text-fg-muted">{recognition}</p>
              <p className="text-sm text-fg-muted/70">{recognitionCaption}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
