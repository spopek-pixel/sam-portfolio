import { ImageOff } from 'lucide-react'
import { aivy } from '@/data/aivy'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function MirrorBoard() {
  return (
    <section className="px-6 py-14 sm:px-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={aivy.mirrorBoard.kicker} title={aivy.mirrorBoard.title} className="mb-10" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-lg text-fg-muted">{aivy.mirrorBoard.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl border border-dashed border-line bg-surface/40">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 p-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-fg-muted">
                  <ImageOff size={20} />
                </span>
                <p className="text-sm font-medium text-fg-muted">Mirror board photo — add here</p>
                <p className="max-w-xs text-xs text-fg-muted/70">
                  The themes explored before narrowing to "Connection Beyond Humans."
                </p>
              </div>
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
