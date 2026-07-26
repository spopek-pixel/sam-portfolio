import { aivy } from '@/data/aivy'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import mirrorBoardImage from '@/assets/images/projects/aivy/miro_aivy.png'

export function MirrorBoard() {
  return (
    <section className="px-6 py-14 sm:px-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={aivy.mirrorBoard.kicker} title={aivy.mirrorBoard.title} className="mb-10" />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="text-lg text-fg-muted">{aivy.mirrorBoard.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
              <Lightbox src={mirrorBoardImage} alt={aivy.mirrorBoard.caption}>
                <img src={mirrorBoardImage} alt={aivy.mirrorBoard.caption} className="w-full object-cover" loading="lazy" />
              </Lightbox>
              <figcaption className="border-t border-line bg-surface/60 px-4 py-3 text-center text-xs text-fg-muted">
                {aivy.mirrorBoard.caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
