import { aivy } from '@/data/aivy'
import { Reveal } from '@/components/ui/Reveal'

export function AivyQuote() {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-balance text-center font-display text-2xl leading-snug sm:text-4xl">
            "<span className="text-gradient">{aivy.quote}</span>"
          </p>
        </Reveal>
      </div>
    </section>
  )
}
