import { useRef, useState, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  tiltStrength?: number
  glowColor?: string
}

export function SpotlightCard({
  children,
  className,
  tiltStrength = 6,
  glowColor = '166,255,77',
}: SpotlightCardProps) {
  const reducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 50, y: 50, opacity: 0 })
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 260, damping: 22 })
  const springRotateY = useSpring(rotateY, { stiffness: 260, damping: 22 })

  const handleMouseMove = (event: React.MouseEvent) => {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = (event.clientX - rect.left) / rect.width
    const relY = (event.clientY - rect.top) / rect.height
    setSpot({ x: relX * 100, y: relY * 100, opacity: 1 })
    rotateY.set((relX - 0.5) * tiltStrength)
    rotateX.set((relY - 0.5) * -tiltStrength)
  }

  const handleMouseLeave = () => {
    setSpot((s) => ({ ...s, opacity: 0 }))
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reducedMotion ? undefined : { scale: 1.02, borderColor: `rgba(${glowColor},0.4)` }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ rotateX: springRotateX, rotateY: springRotateY, perspective: 800 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]',
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: reducedMotion ? 0 : spot.opacity,
          background: `radial-gradient(360px circle at ${spot.x}% ${spot.y}%, rgba(${glowColor},0.14), transparent 60%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  )
}
