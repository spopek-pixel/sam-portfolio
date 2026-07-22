import { Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const stats = [
  { value: '5', label: 'Case studies shipped' },
  { value: '15+', label: 'Stakeholder interviews, Housingkind' },
  { value: '1', label: 'Best UX award, Transcend' },
  { value: '3', label: 'Real client partnerships' },
]

export function TestimonialSpotlight() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-3xl border border-line bg-surface/60 p-8 sm:p-10">
            <Quote className="text-violet-tint" size={32} />
            <p className="text-2xl leading-snug sm:text-3xl">
              Sam's interface design ability is one of the strongest I've seen from an emerging designer —
              she doesn't just make things look good, she makes them make sense.
            </p>
            <div>
              <p className="font-medium">Chad Shackelford</p>
              <p className="text-sm text-fg-muted">Chief Innovation Officer, OUTFRONT Media</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
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
    </section>
  )
}
