import { ImageOff } from 'lucide-react'
import type { bumbleConcept } from '@/data/bumbleConcept'
import { Reveal } from '@/components/ui/Reveal'

export function MyStorySection({ story }: { story: (typeof bumbleConcept)['myStory'] }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start lg:gap-14">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="kicker">{story.kicker}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl">{story.title}</h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {story.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.06}>
                <p className="max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto flex w-full max-w-[280px] flex-col items-center gap-2 lg:sticky lg:top-24">
            <div className="flex aspect-[9/16] w-full flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-line bg-surface/60 text-fg-muted">
              <ImageOff size={22} className="opacity-50" />
              <span className="px-6 text-center text-xs">{story.proofCaption}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
