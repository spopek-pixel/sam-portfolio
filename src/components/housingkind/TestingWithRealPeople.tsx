import { Award, Quote } from 'lucide-react'
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
        <SectionHeading kicker="Testing with real people" title="Honest evidence, not a highlight reel." description={intro} className="mb-8 max-w-3xl" />

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06} className="h-full">
              <StatTile value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-2xl text-fg-muted">{scopeNote}</p>
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

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-center gap-3 rounded-2xl border border-acid/30 bg-acid/5 p-6 lg:p-8">
              <Award size={24} className="shrink-0 text-acid" />
              <p className="text-fg-muted">{recognition}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <figure className="flex h-full flex-col">
              <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-line bg-surface/60">
                <img src={transcendGroupPhoto} alt="Sam and her teammates at the Transcend Competition" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <figcaption className="mt-3 shrink-0 text-sm text-fg-muted">{recognitionCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
