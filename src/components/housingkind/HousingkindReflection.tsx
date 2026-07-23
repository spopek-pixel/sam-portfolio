import { housingkind } from '@/data/housingkind'
import { Reveal } from '@/components/ui/Reveal'

export function HousingkindReflection() {
  const { paragraphs, highlight } = housingkind.reflection

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">Reflection</span>
        </Reveal>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.06 + index * 0.06}>
                <p className="text-fg-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="rounded-2xl border-l-4 border-violet-tint bg-surface/60 p-6 font-display text-2xl leading-snug sm:text-3xl lg:p-8">
              "{highlight}"
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
