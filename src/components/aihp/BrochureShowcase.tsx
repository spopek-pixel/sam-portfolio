import { imageFor } from '@/data/projects'
import { aihp } from '@/data/aihp'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'

// Exact pixel aspect ratios of the real mockup photos, so nothing gets stretched.
const brochures = [
  { key: 'brochure-1', name: 'Direction One', cover: 'aspect-[763/457]', detail: 'aspect-[763/532]' },
  { key: 'brochure-2', name: 'Direction Two', cover: 'aspect-[772/519]', detail: 'aspect-[772/565]' },
]

export function BrochureShowcase() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Brochure Design" title={aihp.brochure.heading} description={aihp.brochure.body} className="mb-12 max-w-2xl" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {brochures.map((brochure, index) => {
            const cover = imageFor('aihp', `${brochure.key}-cover`)
            const detail = imageFor('aihp', `${brochure.key}-detail-1`)
            if (!cover && !detail) return null
            return (
              <Reveal key={brochure.key} delay={index * 0.1} className="flex flex-col gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">{brochure.name}</span>
                {cover && (
                  <Lightbox src={cover} alt={`AIHP brochure concept, ${brochure.name}, cover`} triggerClassName="rounded-2xl block">
                    <div className={`w-full overflow-hidden rounded-2xl border border-line bg-surface ${brochure.cover}`}>
                      <img src={cover} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  </Lightbox>
                )}
                {detail && (
                  <Lightbox src={detail} alt={`${brochure.name}, inside spread`} triggerClassName="rounded-2xl block">
                    <div className={`w-full overflow-hidden rounded-2xl border border-line bg-surface ${brochure.detail}`}>
                      <img src={detail} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </div>
                  </Lightbox>
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{aihp.brochure.explanation}</p>
        </Reveal>
      </div>
    </section>
  )
}
