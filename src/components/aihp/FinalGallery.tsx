import { imageFor } from '@/data/projects'
import { Reveal } from '@/components/ui/Reveal'
import { ImageSlot } from './ImageSlot'
import { cn } from '@/lib/utils'

type Tone = 'violet' | 'acid' | 'mint'

const tones: Tone[] = ['violet', 'acid', 'mint']

const spans = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
]

// No captions here on purpose — the brief for this section is "let the work speak for itself."
export function FinalGallery() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="kicker">More Work</span>
        </Reveal>

        <div className="mt-8 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4 sm:[grid-auto-flow:dense]">
          {spans.map((span, index) => {
            const file = `gallery-${index + 1}`
            return (
              <Reveal key={file} delay={(index % 8) * 0.05} className={cn('h-full', span)}>
                <ImageSlot
                  src={imageFor('aihp', file)}
                  alt="Additional AIHP design work"
                  hint={`${file}.jpg`}
                  tone={tones[index % tones.length]}
                  aspect="h-full"
                  className="h-full"
                />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
