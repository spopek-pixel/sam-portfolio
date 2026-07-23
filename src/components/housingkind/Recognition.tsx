import { Award } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import transcendGroupPhoto from '@/assets/images/projects/housingkind/transcend_group.png'

export function Recognition() {
  const { body, photoCaption } = housingkind.recognition

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Recognition" title="Best User Experience Design — Transcend." className="mb-8" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-center gap-3 rounded-2xl border border-acid/30 bg-acid/5 p-6 lg:p-8">
              <Award size={24} className="shrink-0 text-acid" />
              <p className="text-fg-muted">{body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <figure className="flex h-full flex-col">
              <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-line bg-surface/60">
                <img
                  src={transcendGroupPhoto}
                  alt="Sam and her teammates at the Transcend Competition"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 shrink-0 text-sm text-fg-muted">{photoCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
