import { aivy } from '@/data/aivy'
import { Reveal } from '@/components/ui/Reveal'

export function AivyBrief() {
  return (
    <section className="px-6 py-14 sm:px-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <span className="kicker">{aivy.brief.kicker}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-3xl sm:text-4xl">
            "<span className="text-gradient">{aivy.brief.prompt}</span>"
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-col gap-5">
          {aivy.brief.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={0.12 + index * 0.06}>
              <p className="text-lg leading-relaxed text-fg-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
