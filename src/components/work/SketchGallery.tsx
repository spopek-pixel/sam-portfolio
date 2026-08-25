import type { LowFidelityData } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function SketchGallery({ data }: { data: LowFidelityData }) {
  if (data.sketches.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading kicker="Low-fidelity prototype" title="From sketch to structure." />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="flex flex-col gap-5">
            {data.sketches.map((sketch, index) => (
              <Reveal key={sketch.src} delay={index * 0.08}>
                <div className="flex flex-col gap-2">
                  <div className="overflow-hidden rounded-xl border border-line bg-white">
                    <img src={sketch.src} alt={sketch.caption} className="h-auto w-full" loading="lazy" />
                  </div>
                  <p className="text-sm text-fg-muted">{sketch.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {data.description.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
