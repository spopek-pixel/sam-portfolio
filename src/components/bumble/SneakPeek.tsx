import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { bumbleConcept } from '@/data/bumbleConcept'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import bffBillboard from '@/assets/images/projects/bumble-bff-concept/bff-billboard.png'
import bffBuswrap from '@/assets/images/projects/bumble-bff-concept/bff-buswrap.png'
import bffBusPoster from '@/assets/images/projects/bumble-bff-concept/bff-bus-poster.png'
import bffSocial from '@/assets/images/projects/bumble-bff-concept/bff-social.png'

const imageMap: Record<string, string> = {
  'bff-billboard.png': bffBillboard,
  'bff-buswrap.png': bffBuswrap,
  'bff-bus-poster.png': bffBusPoster,
  'bff-social.png': bffSocial,
}

type Channel = (typeof bumbleConcept)['channels'][number]

export function SneakPeek({ channels }: { channels: Channel[] }) {
  const cards = channels.filter((channel) => channel.image)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const reducedMotion = usePrefersReducedMotion()
  const controls = useAnimationControls()

  useLayoutEffect(() => {
    if (!containerRef.current || !trackRef.current) return
    setDistance(Math.max(trackRef.current.scrollWidth - containerRef.current.clientWidth, 0))
  }, [cards.length])

  useEffect(() => {
    if (reducedMotion || distance <= 0) return
    controls.start({
      x: [0, -distance, 0],
      transition: { duration: Math.max(distance / 30, 10), repeat: Infinity, ease: 'easeInOut' },
    })
  }, [distance, reducedMotion, controls])

  return (
    <section className="pb-10 sm:pb-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-14">
        <SectionHeading kicker="A sneak peek" title="Here's what it actually looks like." className="mb-8" />
      </div>

      <div ref={containerRef} className="overflow-hidden border-y border-line py-8">
        <motion.div
          ref={trackRef}
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => {
            if (reducedMotion || distance <= 0) return
            controls.start({
              x: [0, -distance, 0],
              transition: { duration: Math.max(distance / 30, 10), repeat: Infinity, ease: 'easeInOut' },
            })
          }}
          className="flex w-max gap-6 px-6 sm:px-14"
        >
          {cards.map((channel) => (
            <a key={channel.id} href={`#${channel.id}`} className="group flex w-fit shrink-0 flex-col gap-2.5">
              <div className="h-56 w-fit overflow-hidden rounded-xl border border-line shadow-[0_15px_35px_rgba(0,0,0,0.4)] sm:h-64">
                <img
                  src={imageMap[channel.image as string]}
                  alt=""
                  className="h-full w-auto transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted transition-colors group-hover:text-fg">
                See more <ArrowRight size={11} />
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
