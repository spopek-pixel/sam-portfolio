import type { SketchItem } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'

export function SketchGallery({ sketches }: { sketches: SketchItem[] }) {
  if (sketches.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Low-fidelity prototype"
          title="From sketch to structure."
          description="User stories mapped end to end, then paper sketches for the core upload flow."
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {sketches.map((sketch, index) => (
            <Reveal key={sketch.src} delay={index * 0.08} className={index === 0 ? 'sm:col-span-2' : undefined}>
              <div className="flex h-full flex-col gap-3">
                <Lightbox src={sketch.src} alt={sketch.caption}>
                  <div className="overflow-hidden rounded-xl border border-line bg-white">
                    <img src={sketch.src} alt="" className="h-full w-full object-contain" loading="lazy" />
                  </div>
                </Lightbox>
                <p className="text-sm text-fg-muted">{sketch.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
