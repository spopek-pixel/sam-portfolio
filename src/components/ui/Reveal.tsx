import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'span'
}

const easePremium = [0.16, 1, 0.3, 1] as const

export function Reveal({ children, delay = 0, y = 28, className, as = 'div' }: RevealProps) {
  const reducedMotion = usePrefersReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reducedMotion ? 0.2 : 0.7, delay, ease: easePremium },
    },
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}
