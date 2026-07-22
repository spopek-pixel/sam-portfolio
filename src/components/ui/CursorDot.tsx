import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

export function CursorDot() {
  const reducedMotion = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFinePointer && !reducedMotion)
  }, [reducedMotion])

  useEffect(() => {
    if (!enabled) return

    const moveHandler = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    const overHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      setHovering(Boolean(target.closest('a, button, [data-cursor="hover"]')))
    }

    window.addEventListener('mousemove', moveHandler)
    window.addEventListener('mouseover', overHandler)
    return () => {
      window.removeEventListener('mousemove', moveHandler)
      window.removeEventListener('mouseover', overHandler)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        animate={{ width: hovering ? 40 : 10, height: hovering ? 40 : 10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full bg-fg"
      />
    </motion.div>
  )
}
