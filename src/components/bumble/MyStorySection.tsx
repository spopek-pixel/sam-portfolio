import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { bumbleConcept } from '@/data/bumbleConcept'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { renderHighlighted } from '@/lib/highlightText'
import instagramSarah from '@/assets/images/projects/bumble-bff-concept/proof-instagram-sarah.png'
import friends from '@/assets/images/projects/bumble-bff-concept/proof-friends.png'
import birthday from '@/assets/images/projects/bumble-bff-concept/proof-birthday.jpg'

const imageById: Record<string, string> = {
  'instagram-sarah': instagramSarah,
  friends: friends,
}

type Story = (typeof bumbleConcept)['myStory']

export function MyStorySection({ story }: { story: Story }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.4'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-14">
        <div className="flex flex-col gap-5">
          <Reveal>
            <span className="kicker">{story.kicker}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl">{story.title}</h2>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative flex flex-col gap-10 pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-violet-tint to-acid"
          />

          {story.timeline.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 0.04}>
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                <span className="absolute -left-10 top-1 h-3.5 w-3.5 rounded-full border-2 border-acid bg-ink" />

                <div className="flex-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-violet-tint">{entry.label}</span>
                  <h3 className="mt-2 text-xl sm:text-2xl">{entry.title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-fg-muted">{renderHighlighted(entry.body)}</p>
                </div>

                {'image' in entry && entry.image && (
                  <div className="mx-auto w-40 shrink-0 sm:mx-0">
                    <Lightbox src={imageById[entry.image]} alt="">
                      <img
                        src={imageById[entry.image]}
                        alt=""
                        className="h-auto w-full rounded-xl border border-line"
                        loading="lazy"
                      />
                    </Lightbox>
                    {'caption' in entry && entry.caption && (
                      <p className="mt-2 text-center text-[11px] leading-snug text-fg-muted">{entry.caption}</p>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 pt-4 text-center">
            <div className="flex flex-col gap-2">
              <span className="kicker">{story.finale.kicker}</span>
              <h3 className="text-2xl sm:text-3xl">{story.finale.title}</h3>
            </div>
            <div className="w-full overflow-hidden rounded-3xl border border-line shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
              <img src={birthday} alt={story.finale.caption} className="h-auto w-full" loading="lazy" />
            </div>
            <p className="max-w-md text-fg-muted">{story.finale.caption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
