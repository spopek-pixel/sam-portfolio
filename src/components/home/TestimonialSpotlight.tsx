import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      "Sam's interface design ability is one of the strongest I've seen from an emerging designer — she doesn't just make things look good, she makes them make sense.",
    name: 'Chad Shackelford',
    role: 'Chief Innovation Officer, OUTFRONT Media',
  },
  {
    quote:
      "She turned a stack of stakeholder interviews into an actual working interface in days, not weeks. The rest of the team was still writing the brief.",
    name: 'Lucy Murdock',
    role: 'Teammate, Housingkind',
  },
  {
    quote:
      'Sam asks the question everyone else in the room is quietly avoiding — and the work is always better for it.',
    name: 'Dr. Renee Aldrich',
    role: 'Faculty Advisor, UW–Madison Design + Innovation',
  },
  {
    quote:
      "What stood out was that she didn't just hand us a Figma file — she understood our booking system well enough to argue with our engineers about it.",
    name: 'Jordan Pak',
    role: 'Stakeholder, Dragonfly Yoga',
  },
  {
    quote:
      "Most designers stop at the mockup. Sam kept going until it was a real, working product she could put in front of us.",
    name: 'Obid Ochilov',
    role: 'Teammate, Housingkind',
  },
]

export function TestimonialSpotlight() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionHeading
          kicker="Kind words"
          title={
            <>
              From the people I've <span className="text-gradient">worked with.</span>
            </>
          }
        />
      </div>

      <div className="relative mt-12 overflow-hidden border-y border-line py-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent sm:w-40" />

        <div className="flex w-max animate-[marquee_50s_linear_infinite] gap-6 [animation-play-state:running] hover:[animation-play-state:paused] motion-reduce:animate-none">
          {doubled.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className={cn(
                'flex w-[360px] shrink-0 flex-col gap-5 rounded-3xl border p-7 shadow-[0_20px_50px_rgba(0,0,0,0.35)]',
                index % 2 === 0
                  ? 'border-violet-tint/30 bg-gradient-to-br from-violet/10 via-surface to-surface'
                  : 'border-acid/30 bg-gradient-to-br from-acid/10 via-surface to-surface',
              )}
            >
              <Quote className={index % 2 === 0 ? 'text-violet-tint' : 'text-acid'} size={30} />
              <p className="font-display text-lg leading-snug text-fg sm:text-xl">{testimonial.quote}</p>
              <div className="mt-auto">
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-xs text-fg-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
