import { ArrowRight, Smartphone } from 'lucide-react'
import { SiClaudecode, SiGithub, SiReact, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import type { IconType } from 'react-icons'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import houseVideo from '@/assets/images/projects/housingkind/house-video.mp4'

const stackIcons: (IconType | typeof Smartphone)[] = [
  SiReact,
  SiTypescript,
  SiTailwindcss,
  Smartphone,
  SiGithub,
  SiClaudecode,
  SiVercel,
]

export function BuildingItSection() {
  const { intro, stack, pipeline, screenshotCaption } = housingkind.buildingIt

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Beyond the prototype"
          title="Designed it. Then built it."
          description={intro}
          className="mb-8"
        />

        <Reveal delay={0.08}>
          <figure className="mx-auto mb-10 max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
              <video
                src={houseVideo}
                autoPlay
                muted
                loop
                playsInline
                aria-label="Screen recording of the Housingkind website"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-fg-muted">{screenshotCaption}</figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((tech, index) => {
            const Icon = stackIcons[index]
            return (
              <Reveal key={tech.name} delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-line bg-surface/60 p-5">
                  <Icon size={22} className="text-violet-tint" />
                  <h3 className="text-sm font-medium">{tech.name}</h3>
                  <p className="text-xs leading-relaxed text-fg-muted">{tech.body}</p>
                </div>
              </Reveal>
            )
          })}

          <Reveal delay={stack.length * 0.05} className="h-full sm:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-center gap-1 rounded-2xl border border-acid/40 bg-acid/5 p-5">
              <span className="font-display text-2xl text-acid">Shipped</span>
              <p className="text-xs leading-relaxed text-fg-muted">
                Not a concept — a live, deployed front-end that anyone can open.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {pipeline.map((stage, index) => (
              <div key={stage} className="flex items-center gap-2">
                <span className="rounded-full border border-line bg-surface/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-fg-muted">
                  {stage}
                </span>
                {index < pipeline.length - 1 && <ArrowRight size={14} className="shrink-0 text-fg-muted/70" />}
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
