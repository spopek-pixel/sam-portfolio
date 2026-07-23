import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { GradientBlob } from '@/components/ui/GradientBlob'
import { cn } from '@/lib/utils'
import samPhoto from '@/assets/images/about/sam.jpg'
import houseLap from '@/assets/images/projects/housingkind/house-lap.png'

const steps = ['Research', 'Define', 'Design', 'Build']

function PhotoWithProcess({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden rounded-3xl border border-line">
        <img
          src={samPhoto}
          alt="Samantha Popek"
          className="aspect-[4/3] w-full rounded-3xl object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-x-0 bottom-0 rounded-b-3xl bg-gradient-to-t from-ink via-ink/70 to-transparent pt-8">
          <div className="flex items-center justify-center gap-1 px-2 py-2.5 font-mono text-[9px] uppercase tracking-wider text-fg-muted">
            {steps.map((step, index) => (
              <span key={step} className="flex items-center gap-1">
                <span className={index === steps.length - 1 ? 'text-acid' : undefined}>{step}</span>
                {index < steps.length - 1 && <ArrowRight size={8} className="shrink-0 opacity-60" />}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, scale: 0.5, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute -left-4 -top-4 z-10 flex items-center gap-1.5 rounded-2xl rounded-bl-none border border-line bg-surface-raised px-3.5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
      >
        <motion.span
          aria-hidden
          animate={reducedMotion ? undefined : { rotate: [0, 16, -7, 16, -4, 12, 0] }}
          transition={
            reducedMotion ? undefined : { delay: 1.4, duration: 1.4, repeat: Infinity, repeatDelay: 2.6, ease: 'easeInOut' }
          }
          style={{ originX: 0.7, originY: 0.75 }}
          className="text-lg leading-none"
        >
          👋
        </motion.span>
        <span className="text-sm font-medium">Hi, I'm Sam!</span>
      </motion.div>
    </div>
  )
}

function HousingkindCard({ className }: { className?: string }) {
  return (
    <Link to="/work/housingkind" className={cn('group block overflow-hidden rounded-2xl border border-line bg-surface', className)}>
      <div className="overflow-hidden bg-ink">
        <motion.img
          src={houseLap}
          alt="Housingkind interface shown on a laptop"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[4/3] w-full object-contain p-3"
        />
      </div>
      <div className="p-4">
        <p className="font-medium text-fg transition-colors group-hover:text-violet-tint">
          Featured Project — Housingkind
        </p>
        <p className="mt-1 text-sm text-fg-muted">
          Turning complex housing policy into a visual, approachable digital experience.
        </p>
      </div>
    </Link>
  )
}

export function HeroVisual() {
  const reducedMotion = usePrefersReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 90, damping: 22 })
  const springY = useSpring(my, { stiffness: 90, damping: 22 })
  const photoX = useTransform(springX, (v) => v * 14)
  const photoY = useTransform(springY, (v) => v * 14)
  const cardX = useTransform(springX, (v) => v * 6)
  const cardY = useTransform(springY, (v) => v * 6)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    mx.set((event.clientX - rect.left) / rect.width - 0.5)
    my.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div>
      {/* Compact stacked layout below the lg breakpoint */}
      <div className="flex flex-col gap-4 lg:hidden">
        <PhotoWithProcess className="mx-auto w-1/2" />
        <HousingkindCard />
      </div>

      {/* Layered editorial composition at lg+ */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative hidden aspect-[6/5] lg:block"
      >
        <GradientBlob tone="mixed" className="left-[-10%] top-[10%] h-[70%] w-[80%] opacity-20" />

        <motion.div
          style={{ x: photoX, y: photoY }}
          className="absolute right-0 top-0 z-20 w-[58%] rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          <PhotoWithProcess />
        </motion.div>

        <motion.div style={{ x: cardX, y: cardY }} className="absolute left-0 top-[24%] z-0 w-[74%]">
          <HousingkindCard className="shadow-[0_20px_45px_rgba(0,0,0,0.4)]" />
        </motion.div>
      </div>
    </div>
  )
}
