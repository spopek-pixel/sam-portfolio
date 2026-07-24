import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Lightbox } from '@/components/ui/Lightbox'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

const COLS = 4
const ROWS = 2
const PANELS = COLS * ROWS

interface StoryboardRevealProps {
  src: string
  alt: string
  className?: string
}

export function StoryboardReveal({ src, alt, className }: StoryboardRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(-1)
  const reducedMotion = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.25'] })

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value <= 0 || value >= 1) {
      setActive(-1)
      return
    }
    setActive(Math.min(PANELS - 1, Math.floor(value * PANELS)))
  })

  return (
    <div ref={ref} className={cn('relative', className)}>
      <Lightbox src={src} alt={alt} triggerClassName="rounded-2xl border border-line shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
          transition={reducedMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="relative -rotate-1 overflow-hidden rounded-2xl"
        >
          <img src={src} alt={alt} className="w-full" loading="lazy" />
          <div className="pointer-events-none absolute inset-0 grid grid-cols-4 grid-rows-2">
            {Array.from({ length: PANELS }, (_, i) => (
              <div
                key={i}
                className="transition-opacity duration-500"
                style={{ opacity: active === -1 ? 0 : active === i ? 0 : 0.55, backgroundColor: 'var(--color-ink)' }}
              />
            ))}
          </div>
        </motion.div>
      </Lightbox>
    </div>
  )
}
