import { aivy } from '@/data/aivy'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import installationImage from '@/assets/images/projects/aivy/visual_installation.png'
import sketchImage from '@/assets/images/projects/aivy/aivy_sketch.jpg'

export function AivyInstallation() {
  return (
    <section className="px-6 py-14 sm:px-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading kicker={aivy.installation.kicker} title={aivy.installation.title} description={aivy.installation.body} className="max-w-2xl" />
          <span className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-mint">
            {aivy.installation.dimensions}
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
          <Reveal>
            <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
              <Lightbox src={sketchImage} alt={aivy.installation.sketchCaption}>
                <img src={sketchImage} alt={aivy.installation.sketchCaption} className="w-full object-cover" loading="lazy" />
              </Lightbox>
              <figcaption className="border-t border-line px-4 py-3 text-xs text-fg-muted">{aivy.installation.sketchCaption}</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
              <Lightbox src={installationImage} alt="AIVY installation concept — floor plan, elevations, and experience journey">
                <img
                  src={installationImage}
                  alt="AIVY installation concept — floor plan, elevations, and experience journey"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </Lightbox>
            </figure>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <p className="mt-4 text-center text-xs text-fg-muted">{aivy.installation.renderCaption}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {aivy.installation.zones.map((zone, index) => (
            <Reveal key={zone.name} delay={index * 0.08}>
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-surface/60 p-6">
                <h3 className="text-sm font-medium text-mint">{zone.name}</h3>
                <p className="text-sm text-fg-muted">{zone.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-surface/60 p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">The experience journey</span>
          <div className="mt-5 grid gap-5 sm:grid-cols-5">
            {aivy.installation.journey.map((moment, index) => (
              <Reveal key={moment.step} delay={index * 0.06}>
                <div className="flex flex-col gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint/15 font-mono text-xs text-mint">
                    {index + 1}
                  </span>
                  <h4 className="text-sm font-medium">{moment.step}</h4>
                  <p className="text-xs text-fg-muted">{moment.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap gap-2">
            {aivy.installation.materials.map((material) => (
              <span
                key={material}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted"
              >
                {material}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
