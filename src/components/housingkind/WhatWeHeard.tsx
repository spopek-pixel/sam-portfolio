import { Quote } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from './ArtifactPlaceholder'
import tour1 from '@/assets/images/projects/housingkind/tour1.png'
import tour3 from '@/assets/images/projects/housingkind/tour3.png'

const fieldImages = [tour1, tour3]

export function WhatWeHeard() {
  const { ledeHighlight, ledeRest, quotes, fieldTitle, fieldChallenge, field, fieldCaption, pivot } = housingkind.whatWeHeard

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="What we heard"
          title="Not opposition. A missing picture."
          description={
            <>
              <strong className="font-semibold text-fg">{ledeHighlight}</strong> {ledeRest}
            </>
          }
          descriptionClassName="max-w-none"
          className="mb-10"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {quotes.map((item, index) => (
            <Reveal key={item.quote} delay={(index % 4) * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                <Quote size={18} className="shrink-0 text-violet-tint" />
                <p className="flex-1 text-sm italic leading-relaxed text-fg-muted">"{item.quote}"</p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted/60">{item.attribution}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Reveal>
            <h3 className="text-2xl font-medium sm:text-3xl">{fieldTitle}</h3>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-12">
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="text-fg-muted">{fieldChallenge}</p>
            </Reveal>
            <Reveal delay={0.04}>
              <p className="text-fg-muted">{field}</p>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <figure>
              <div className="grid grid-cols-2 gap-4">
                {fieldImages.map((src, index) => (
                  <ArtifactPlaceholder key={index} image={src} label={`Field photo ${index + 1}`} className="aspect-[4/5] w-full" />
                ))}
              </div>
              <figcaption className="mt-3 text-sm text-fg-muted">{fieldCaption}</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg">{pivot}</p>
        </Reveal>
      </div>
    </section>
  )
}
