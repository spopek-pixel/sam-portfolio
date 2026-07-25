import { Quote } from 'lucide-react'
import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function OutfrontTestimonials() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="From clients" title="What they said." className="mb-10 max-w-2xl" />

        <div className="grid gap-5 sm:grid-cols-2">
          {outfront.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.client} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-surface/40 p-8">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold text-ink"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.initial}
                  </span>
                  <Quote size={18} className="text-fg-muted/40" />
                </div>
                <p className="font-display text-lg leading-snug sm:text-xl">&ldquo;{testimonial.quote}&rdquo;</p>
                <span className="mt-auto font-mono text-xs uppercase tracking-wider text-fg-muted">{testimonial.client}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
