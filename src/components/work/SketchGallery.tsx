import type { LowFidelityData } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'

export function SketchGallery({ data }: { data: LowFidelityData }) {
  if (data.sketches.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading kicker="Low-fidelity prototype" title="From sketch to structure." />

        <div className="flex flex-col gap-4">
          {data.description.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
              <p className="max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          {data.sketches.map((sketch, index) => (
            <Reveal key={sketch.src} delay={index * 0.08}>
              <div className="flex flex-col gap-3">
                <Lightbox src={sketch.src} alt={sketch.caption}>
                  <div className="mx-auto max-h-[280px] overflow-hidden rounded-xl border border-line bg-white">
                    <img src={sketch.src} alt="" className="h-full w-full object-contain" loading="lazy" />
                  </div>
                </Lightbox>
                <p className="text-center text-sm text-fg-muted">{sketch.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
