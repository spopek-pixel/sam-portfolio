import { Quote } from 'lucide-react'
import type { Project } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function ClientTestimonials({ project }: { project: Project }) {
  const testimonials = project.testimonials ?? []
  if (testimonials.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="From clients" title="What they said." className="mb-8" />
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.client} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                <Quote size={18} className="text-acid" />
                <p className="text-fg-muted italic">"{testimonial.quote}"</p>
                <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">{testimonial.client}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
