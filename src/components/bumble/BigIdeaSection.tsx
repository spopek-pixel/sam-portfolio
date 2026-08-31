import { Reveal } from '@/components/ui/Reveal'
import { renderHighlighted } from '@/lib/highlightText'

interface Origin {
  kicker: string
  title: string
  body: string
  pullQuote: string
}

export function BigIdeaSection({ idea, brief, origin }: { idea: string; brief: string; origin: Origin }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Reveal>
          <span className="kicker">The big idea</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display text-3xl leading-snug sm:text-4xl md:text-5xl">"{idea}"</p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{renderHighlighted(brief)}</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal delay={0.06}>
          <div className="flex flex-col gap-3">
            <span className="kicker">{origin.kicker}</span>
            <h3 className="text-2xl sm:text-3xl">{origin.title}</h3>
            <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{renderHighlighted(origin.body)}</p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="h-full">
          <blockquote className="flex h-full flex-col justify-center rounded-2xl border-l-4 border-acid bg-surface/60 p-6 lg:p-8">
            <p className="font-display text-2xl leading-snug sm:text-3xl">&ldquo;{origin.pullQuote}&rdquo;</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
