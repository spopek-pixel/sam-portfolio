import { Award, Users } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from './ArtifactPlaceholder'

export function Recognition() {
  const { body, photoCaption } = housingkind.recognition

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Recognition" title="Best User Experience Design — Transcend." className="mb-8" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="flex items-start gap-3 rounded-2xl border border-acid/30 bg-acid/5 p-6">
              <Award size={24} className="mt-0.5 shrink-0 text-acid" />
              <p className="text-fg-muted">{body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure>
              <ArtifactPlaceholder label="Team at Transcend Competition" icon={Users} className="aspect-[4/3] w-full" />
              <figcaption className="mt-3 text-sm text-fg-muted">{photoCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
