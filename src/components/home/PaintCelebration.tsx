import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

const PARTICLES = [
  { x: -60, y: -40, color: '#a6ff4d', delay: 0 },
  { x: 50, y: -55, color: '#8a6bff', delay: 0.03 },
  { x: -30, y: 45, color: '#a78bfa', delay: 0.06 },
  { x: 65, y: 30, color: '#a6ff4d', delay: 0.09 },
  { x: -75, y: 10, color: '#a78bfa', delay: 0.05 },
  { x: 20, y: -65, color: '#a6ff4d', delay: 0.12 },
  { x: -15, y: 60, color: '#8a6bff', delay: 0.08 },
  { x: 80, y: -10, color: '#a78bfa', delay: 0.14 },
]

/** A one-shot pixel confetti burst — plays once when mounted, doesn't repeat. */
export function PaintCelebration() {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) return null

  return (
    <div aria-hidden className="pointer-events-none absolute left-0 top-1/2 h-0 w-0">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{ opacity: 0, x: p.x, y: p.y, scale: 0.3 }}
          transition={{ duration: 0.7, delay: p.delay, ease: [0.16, 1, 0.3, 1] }}
          className="absolute h-2 w-2 rounded-[2px]"
          style={{ backgroundColor: p.color }}
        />
      ))}
    </div>
  )
}
