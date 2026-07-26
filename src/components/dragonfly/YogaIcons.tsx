import { useRef, type SVGProps } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

function TreePose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="3.5" r="1.6" />
      <line x1="12" y1="5" x2="12" y2="13" />
      <line x1="12" y1="13" x2="9.5" y2="20" />
      <path d="M12 13c-1 1.5-3.5 1-3-2" />
      <path d="M12 7c-2.5-2-5 .5-3 3" />
      <path d="M12 7c2.5-2 5 .5 3 3" />
    </svg>
  )
}

function LotusPose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="4" r="1.6" />
      <line x1="12" y1="5.5" x2="12" y2="12" />
      <path d="M6 13c0 2 2.5 3 6 3s6-1 6-3" />
      <path d="M9 8l-2 3" />
      <path d="M15 8l2 3" />
    </svg>
  )
}

function WarriorPose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="4" r="1.6" />
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="12" y1="6" x2="12" y2="12" />
      <line x1="12" y1="12" x2="8" y2="20" />
      <line x1="12" y1="12" x2="16" y2="20" />
    </svg>
  )
}

const poses = [TreePose, LotusPose, WarriorPose]

export function YogaIconRail({ side, className }: { side: 'left' | 'right'; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-24, 24])

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        'pointer-events-none absolute top-0 hidden h-full w-14 lg:block',
        side === 'left' ? 'left-[-3.5rem]' : 'right-[-3.5rem]',
        className,
      )}
    >
      <motion.div style={{ y }} className="flex h-full flex-col items-center justify-around py-6 text-violet-tint/25">
        {poses.map((Pose, i) => (
          <Pose key={i} className={cn('h-8 w-8', i % 2 === 0 ? '-rotate-6' : 'rotate-6')} />
        ))}
      </motion.div>
    </div>
  )
}
