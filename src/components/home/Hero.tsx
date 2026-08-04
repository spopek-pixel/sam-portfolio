import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { PixelHeroStage } from './PixelHeroStage'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const blobOneX = useTransform(springX, (v) => v * 0.03)
  const blobOneY = useTransform(springY, (v) => v * 0.03)

  const handleMouseMove = (event: React.MouseEvent) => {
    if (reducedMotion) return
    const { innerWidth, innerHeight } = window
    mouseX.set(event.clientX - innerWidth / 2)
    mouseY.set(event.clientY - innerHeight / 2)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden px-6 pb-28 pt-32 sm:px-10 sm:pb-36 sm:pt-40"
    >
      <NoiseOverlay />
      <motion.div style={{ x: blobOneX, y: blobOneY }}>
        <GradientBlob tone="mixed" className="left-[-15%] top-[-10%] h-[420px] w-[420px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <PixelHeroStage />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: reducedMotion ? 0 : [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: reducedMotion ? 0 : Infinity, duration: 2, ease: 'easeInOut' } }}
        className="absolute inset-x-0 bottom-4 z-10 mx-auto flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-muted sm:bottom-6"
      >
        <ArrowDown size={14} /> Scroll
      </motion.div>
    </section>
  )
}
