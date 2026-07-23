import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkButton } from '@/components/ui/Button'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { HeroVisual } from './HeroVisual'
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
      className="relative overflow-hidden px-6 pb-14 pt-32 sm:px-10 sm:pb-20 sm:pt-40"
    >
      <NoiseOverlay />
      <motion.div style={{ x: blobOneX, y: blobOneY }}>
        <GradientBlob tone="mixed" className="left-[-15%] top-[-10%] h-[420px] w-[420px]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="kicker"
          >
            Research · Design · Code · AI
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.75rem,6.5vw,5rem)]"
          >
            Designing what people <span className="text-gradient">actually need.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-lg text-fg-muted"
          >
            I combine UX research, product thinking, front-end development, and AI to turn
            complex ideas into digital products that solve real problems. Every project begins
            with understanding people — not just designing interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <LinkButton href="/work" variant="primary">
              View my work
            </LinkButton>
            <Link to="/contact" className="group flex items-center gap-1.5 font-medium text-fg-muted transition-colors hover:text-fg">
              Get in touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: reducedMotion ? 0 : [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: reducedMotion ? 0 : Infinity, duration: 2, ease: 'easeInOut' } }}
        className="relative z-10 mx-auto mt-4 flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-muted"
      >
        <ArrowDown size={14} /> Scroll
      </motion.div>
    </section>
  )
}
