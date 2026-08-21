import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { PixelAccent } from '@/components/ui/PixelAccent'
import pixelSam from '@/assets/images/home/pixel-sam.png'

interface PixelSamProps {
  recoilKey: number
  celebrate?: boolean
}

/**
 * The character's blaster muzzle sits at roughly this position within the
 * cropped sprite — used as the paint projectile's launch point.
 */
const MUZZLE_POSITION = { leftPct: 3.3, topPct: 40 }

export const PixelSam = forwardRef<HTMLDivElement, PixelSamProps>(function PixelSam({ recoilKey, celebrate }, muzzleRef) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: reducedMotion ? 0.4 : 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:ml-auto"
    >
      {/* Colored ground glow so she reads as standing in a lit spot, not floating */}
      <motion.div
        aria-hidden
        animate={reducedMotion ? undefined : { opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-[2%] bottom-[4%] h-28 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(166,255,77,0.55)_0%,rgba(124,92,255,0.5)_45%,transparent_72%)] blur-lg"
      />

      {/* Floating pixel accents — kept clear of the art's own baked-in speech bubble/sparkles */}
      <PixelAccent icon="sparkle" color="#a78bfa" size={22} duration={3.6} delay={0.4} className="absolute right-[6%] top-[4%] z-20" />
      <PixelAccent icon="star" color="#a6ff4d" size={18} duration={4.2} delay={0.8} className="absolute right-[8%] bottom-[10%] z-20" />

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : celebrate
              ? { scale: [1, 1.18, 0.94, 1.06, 1], rotate: [0, -4, 3, -1, 0] }
              : { y: [0, -8, 0], rotate: [0, -0.6, 0, 0.6, 0] }
        }
        transition={celebrate ? { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          key={recoilKey}
          initial={{ x: 0 }}
          animate={reducedMotion ? {} : { x: [0, 6, 0] }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative"
        >
          <img
            src={pixelSam}
            alt="Pixel-art illustration of Samantha, wearing an 'I heart code' shirt, aiming a purple-and-green paint blaster with a speech bubble reading 'Design. Iterate. Repeat.'"
            width={700}
            height={700}
            className="relative z-10 w-full select-none [image-rendering:pixelated]"
            draggable={false}
            loading="eager"
          />
          <div
            ref={muzzleRef}
            aria-hidden
            className="absolute z-10 h-1 w-1"
            style={{ left: `${MUZZLE_POSITION.leftPct}%`, top: `${MUZZLE_POSITION.topPct}%` }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
})
