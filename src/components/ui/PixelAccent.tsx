import { motion } from 'framer-motion'
import { PixelSprite } from './PixelSprite'
import { pixelIcons, type PixelIconName } from '@/data/pixelIcons'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface PixelAccentProps {
  icon: PixelIconName
  color?: string
  size?: number
  delay?: number
  duration?: number
  className?: string
}

/** A small floating pixel-art flourish — purely decorative, used sparingly across the site. */
export function PixelAccent({ icon, color = '#a6ff4d', size = 24, delay = 0, duration = 3.2, className }: PixelAccentProps) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <motion.div
      aria-hidden
      className={cn('pointer-events-none inline-block', className)}
      animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 6, 0, -6, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <PixelSprite
        grid={pixelIcons[icon]}
        palette={{ '#': color }}
        style={{ width: size, height: size }}
        className="drop-shadow-[0_0_8px_rgba(166,255,77,0.5)]"
      />
    </motion.div>
  )
}
