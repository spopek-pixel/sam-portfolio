import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { LinkButton } from '@/components/ui/Button'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

const words = ['see', 'trust', 'navigate', 'return to']

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((index) => (index + 1) % words.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const blobOneX = useTransform(springX, (v) => v * 0.04)
  const blobOneY = useTransform(springY, (v) => v * 0.04)
  const blobTwoX = useTransform(springX, (v) => v * -0.03)
  const blobTwoY = useTransform(springY, (v) => v * -0.03)

  const handleMouseMove = (event: React.MouseEvent) => {
    if (reducedMotion) return
    const { innerWidth, innerHeight } = window
    mouseX.set(event.clientX - innerWidth / 2)
    mouseY.set(event.clientY - innerHeight / 2)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-6 pb-10 pt-32 sm:px-10"
    >
      <NoiseOverlay />
      <motion.div style={{ x: blobOneX, y: blobOneY }}>
        <GradientBlob tone="violet" className="left-[-10%] top-[10%] h-[420px] w-[420px]" />
      </motion.div>
      <motion.div style={{ x: blobTwoX, y: blobTwoY }}>
        <GradientBlob tone="acid" className="right-[-10%] top-[35%] h-[380px] w-[380px]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="kicker"
        >
          UX + Product Design — UW–Madison
        </motion.span>

        <h1 className="max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)] font-semibold">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            I design for what
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            people can't quite{' '}
            <span className="relative inline-block min-w-[1ch] text-gradient">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 16, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: reducedMotion ? 0 : -16, filter: 'blur(6px)' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
              .
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-lg text-fg-muted sm:text-xl"
        >
          I'm Samantha Popek — a UX &amp; Product Designer who pairs rigorous research with front-end craft.
          This site is one of the deliverables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <LinkButton href="/work" variant="primary">
            View my work
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Get in touch
          </LinkButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
        className="relative z-10 mx-auto flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-muted"
      >
        <ArrowDown size={14} /> Scroll
      </motion.div>
    </section>
  )
}
