import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { GradientBlob, NoiseOverlay } from '@/components/ui/GradientBlob'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

const EMAIL = 'hello@sampopek.com'

export function ContactHero() {
  const [copied, setCopied] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (event: React.MouseEvent) => {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 24)
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 24)
  }

  const handleCopy = async (event: React.MouseEvent) => {
    event.preventDefault()
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } finally {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section className="relative flex min-h-[80svh] flex-col justify-center overflow-hidden px-6 pb-16 pt-32 sm:px-10">
      <NoiseOverlay />
      <GradientBlob tone="mixed" className="left-1/2 top-1/3 h-[460px] w-[460px] -translate-x-1/2" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="kicker">Let's talk</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="text-[clamp(2rem,6vw,4rem)]">Tell me what you're building.</h1>
        </Reveal>

        <Reveal delay={0.16}>
          <motion.a
            ref={ref}
            href={`mailto:${EMAIL}`}
            onClick={handleCopy}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              x.set(0)
              y.set(0)
            }}
            style={{ x: springX, y: springY }}
            className="group relative inline-flex items-center gap-3 rounded-full border border-line px-8 py-5 text-2xl transition-colors hover:border-acid sm:text-4xl"
          >
            {EMAIL}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-acid text-ink transition-transform group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </motion.a>
        </Reveal>

        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-acid"
            >
              <Check size={14} /> Copied to clipboard
            </motion.span>
          )}
          {!copied && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-muted"
            >
              <Copy size={12} /> Click to copy &amp; email
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
