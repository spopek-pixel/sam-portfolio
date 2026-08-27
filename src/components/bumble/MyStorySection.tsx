import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { bumbleConcept } from '@/data/bumbleConcept'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { renderHighlighted } from '@/lib/highlightText'
import { cn } from '@/lib/utils'
import instagramSarah from '@/assets/images/projects/bumble-bff-concept/proof-instagram-sarah.png'
import friends from '@/assets/images/projects/bumble-bff-concept/proof-friends.png'
import birthday from '@/assets/images/projects/bumble-bff-concept/proof-birthday.jpg'
import nashvilleSarah from '@/assets/images/projects/bumble-bff-concept/proof-nashville-sarah.jpg'
import blockpartyMegan from '@/assets/images/projects/bumble-bff-concept/proof-blockparty-megan.jpg'

const imageById: Record<string, string> = {
  'instagram-sarah': instagramSarah,
  friends: friends,
  birthday: birthday,
  'nashville-sarah': nashvilleSarah,
  'blockparty-megan': blockpartyMegan,
}

type Story = (typeof bumbleConcept)['myStory']
type TimelineEntry = Story['timeline'][number]

function TextBlock({ entry }: { entry: TimelineEntry }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-wider text-violet-tint">{entry.label}</span>
      <h3 className="text-xl sm:text-2xl">{entry.title}</h3>
      <p className="text-base leading-relaxed text-fg-muted">{renderHighlighted(entry.body)}</p>
    </div>
  )
}

function ImageBlock({ entry, imageSide }: { entry: TimelineEntry; imageSide: 'left' | 'right' }) {
  if (!('image' in entry) || !entry.image) return null

  const thumb = (
    <div className="w-64 max-w-full">
      <Lightbox src={imageById[entry.image]} alt="">
        <img src={imageById[entry.image]} alt="" className="h-auto w-full rounded-xl border border-line" loading="lazy" />
      </Lightbox>
      {'caption' in entry && entry.caption && (
        <p className="mt-2 text-[11px] leading-snug text-fg-muted">{entry.caption}</p>
      )}
    </div>
  )

  const arrow =
    imageSide === 'left' ? (
      <ArrowRight size={18} className="hidden shrink-0 text-violet-tint sm:block" />
    ) : (
      <ArrowLeft size={18} className="hidden shrink-0 text-violet-tint sm:block" />
    )

  return (
    <div className="mt-4 flex items-center gap-3 sm:mt-0">
      {imageSide === 'left' ? (
        <>
          {thumb}
          {arrow}
        </>
      ) : (
        <>
          {arrow}
          {thumb}
        </>
      )}
    </div>
  )
}

export function MyStorySection({ story }: { story: Story }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.4'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-14">
        <div className="flex flex-col items-center gap-5 text-center">
          <Reveal>
            <span className="kicker">{story.kicker}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl">{story.title}</h2>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative flex flex-col gap-14 pl-10 sm:pl-0">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-[#FFDE3B] sm:left-1/2 sm:-translate-x-1/2"
          />

          {story.timeline.map((entry, index) => {
            const isRight = index % 2 === 1
            const hasImage = 'image' in entry && !!entry.image
            return (
              <Reveal key={entry.title} delay={index * 0.04}>
                <div className="relative">
                  <span className="absolute -left-10 top-1 h-3.5 w-3.5 rounded-full border-2 border-[#FFDE3B] bg-ink sm:hidden" />
                  <span className="absolute left-1/2 top-1 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#FFDE3B] bg-ink sm:block" />

                  <div className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-x-14">
                    <div className={isRight ? 'sm:col-start-2' : 'sm:col-start-1'}>
                      <TextBlock entry={entry} />
                    </div>
                    {hasImage && (
                      <div className={cn('sm:row-start-1', isRight ? 'sm:col-start-1' : 'sm:col-start-2')}>
                        <ImageBlock entry={entry} imageSide={isRight ? 'left' : 'right'} />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col items-center gap-8 pt-4 text-center">
            <div className="flex flex-col gap-2">
              <span className="kicker">{story.finale.kicker}</span>
              <h3 className="text-2xl sm:text-3xl">{story.finale.title}</h3>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-[1fr_2fr_1fr] sm:items-center">
              {story.finale.gallery.map((item) => {
                const isCenter = item.image === 'birthday'
                return (
                  <div key={item.image} className="flex flex-col gap-2">
                    <Lightbox src={imageById[item.image]} alt={item.caption}>
                      {isCenter ? (
                        <img
                          src={imageById[item.image]}
                          alt=""
                          className="h-auto w-full rounded-2xl border border-line shadow-[0_35px_80px_rgba(0,0,0,0.4)]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                          <img src={imageById[item.image]} alt="" className="h-full w-full object-cover" loading="lazy" />
                        </div>
                      )}
                    </Lightbox>
                    <p className="text-xs text-fg-muted">{item.caption}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
