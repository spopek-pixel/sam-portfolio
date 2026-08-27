import type { bumbleConcept } from '@/data/bumbleConcept'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'
import instagramSarah from '@/assets/images/projects/bumble-bff-concept/proof-instagram-sarah.png'
import friendMegan from '@/assets/images/projects/bumble-bff-concept/proof-friend-megan.png'
import friendLexi from '@/assets/images/projects/bumble-bff-concept/proof-friend-lexi.png'
import birthday from '@/assets/images/projects/bumble-bff-concept/proof-birthday.jpg'

const imageById: Record<string, string> = {
  'instagram-sarah': instagramSarah,
  'friend-megan': friendMegan,
  'friend-lexi': friendLexi,
}

type Story = (typeof bumbleConcept)['myStory']

function BeatImages({ images }: { images: string[] }) {
  return (
    <div className={cn('flex gap-3', images.length > 1 && 'flex-row')}>
      {images.map((id) => (
        <Lightbox key={id} src={imageById[id]} alt="">
          <div className="overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <img src={imageById[id]} alt="" className="h-auto w-full" loading="lazy" />
          </div>
        </Lightbox>
      ))}
    </div>
  )
}

export function MyStorySection({ story }: { story: Story }) {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="kicker">{story.kicker}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl">{story.title}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{story.intro}</p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-14">
          {story.beats.map((beat, index) => (
            <Reveal key={beat.caption} delay={0.04}>
              <div
                className={cn(
                  'flex flex-col gap-8 md:items-center md:gap-12',
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row',
                )}
              >
                <div className="md:w-1/2">
                  <BeatImages images={beat.images} />
                  <p className="mt-3 text-xs text-fg-muted">{beat.caption}</p>
                </div>
                <div className="md:w-1/2">
                  <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{beat.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {story.closing.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 24)}>
              <p className="max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-3xl border border-line shadow-[0_30px_70px_rgba(0,0,0,0.4)]">
              <img src={birthday} alt={story.finale.caption} className="h-auto w-full" loading="lazy" />
              {story.finale.tags.map((tag, index) => (
                <div
                  key={index}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${tag.xPct}%`, top: `${tag.yPct}%` }}
                >
                  <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-acid/60" />
                  <span className="relative block h-4 w-4 rounded-full border-2 border-ink bg-acid shadow-[0_0_0_2px_rgba(166,255,77,0.4)]" />
                  <span className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full bg-acid px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-fg-muted">{story.finale.caption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
