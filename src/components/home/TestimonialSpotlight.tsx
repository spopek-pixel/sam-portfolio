import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const stats = [
  { value: '5', label: 'Case studies shipped' },
  { value: '15+', label: 'Stakeholder interviews, Housingkind' },
  { value: '1', label: 'Best UX award, Transcend' },
  { value: '3', label: 'Real client partnerships' },
]

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
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10">
        <SectionHeading
          kicker="Kind words"
          title={
            <>
              From the people I've <span className="text-gradient">worked with.</span>
            </>
          }
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-2 rounded-3xl border border-line p-6">
                <span className="font-display text-4xl text-gradient sm:text-5xl">{stat.value}</span>
                <span className="text-sm text-fg-muted">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-12 overflow-hidden border-y border-line py-8">
        <div className="flex w-max animate-[marquee_50s_linear_infinite] gap-6 [animation-play-state:running] hover:[animation-play-state:paused] motion-reduce:animate-none">
          {doubled.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex w-[340px] shrink-0 flex-col gap-4 rounded-3xl border border-line bg-surface/60 p-6"
            >
              <Quote className="text-violet-tint" size={24} />
              <p className="text-sm leading-relaxed text-fg-muted">{testimonial.quote}</p>
              <div>
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
