import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { PaintColor } from './heroWords'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import paintSplat from '@/assets/images/home/paint-splat.png'

export interface Point {
  x: number
  y: number
}

interface PaintProjectileProps {
  from: Point
  to: Point
  color: PaintColor
  /** Fired the instant paint impacts — this is when the word should transform. */
  onImpact: () => void
  /** Fired once the splat has fully faded — safe to unmount. */
  onDone: () => void
}

const orbColor: Record<PaintColor, string> = {
  violet: 'radial-gradient(circle at 35% 35%, #c9b8ff, #7c5cff 60%, #4c2fcc)',
  acid: 'radial-gradient(circle at 35% 35%, #e4ffb8, #a6ff4d 60%, #7ad633)',
}

type Phase = 'travel' | 'impact' | 'fading'

const TRAVEL_MS = 220
const IMPACT_HOLD_MS = 300
const FADE_MS = 280

export function PaintProjectile({ from, to, color, onImpact, onDone }: PaintProjectileProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [phase, setPhase] = useState<Phase>(reducedMotion ? 'impact' : 'travel')
  const midY = Math.min(from.y, to.y) - 50

  // Drive the sequence on fixed timers rather than animation-complete callbacks,
  // so it's immune to re-renders resetting in-flight Framer Motion animations.
  useEffect(() => {
    if (phase === 'travel') {
      const t = setTimeout(() => setPhase('impact'), TRAVEL_MS)
      return () => clearTimeout(t)
    }
    if (phase === 'impact') {
      onImpact()
      const t = setTimeout(() => setPhase('fading'), IMPACT_HOLD_MS)
      return () => clearTimeout(t)
    }
    if (phase === 'fading') {
      const t = setTimeout(onDone, FADE_MS)
      return () => clearTimeout(t)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  return (
    <>
      {phase === 'travel' && (
        <motion.div
          initial={{ left: from.x, top: from.y, opacity: 1, scale: 0.6 }}
          animate={{ left: [from.x, (from.x + to.x) / 2, to.x], top: [from.y, midY, to.y], scale: [0.6, 1, 0.8] }}
          transition={{ duration: TRAVEL_MS / 1000, ease: [0.3, 0, 0.6, 1] }}
          className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_16px_rgba(166,255,77,0.6)]"
          style={{ backgroundImage: orbColor[color] }}
        />
      )}
      {(phase === 'impact' || phase === 'fading') && (
        <motion.img
          src={paintSplat}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 0.4, rotate: -8 }}
          animate={{
            opacity: phase === 'fading' ? 0 : 1,
            scale: 1,
            rotate: 0,
          }}
          transition={
            phase === 'fading'
              ? { duration: FADE_MS / 1000, ease: 'easeIn' }
              : { duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }
          }
          className="pointer-events-none absolute w-28 -translate-x-1/2 -translate-y-1/2 sm:w-36"
          style={{ left: to.x, top: to.y }}
        />
      )}
    </>
  )
}
