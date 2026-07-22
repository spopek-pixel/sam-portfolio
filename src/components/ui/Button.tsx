import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const MotionLink = motion(Link)

type Variant = 'primary' | 'secondary' | 'ghost'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-violet text-fg shadow-[0_0_0_1px_rgba(124,92,255,0.4)] hover:shadow-[0_0_30px_rgba(124,92,255,0.55)]',
  secondary:
    'bg-transparent text-fg border border-line hover:border-violet-tint',
  ghost: 'bg-transparent text-fg-muted hover:text-fg',
}

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

function useMagnetic(strength = 18) {
  const ref = useRef<HTMLElement | null>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMouseMove = (event: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = event.clientX - rect.left - rect.width / 2
    const relY = event.clientY - rect.top - rect.height / 2
    setOffset({ x: (relX / rect.width) * strength, y: (relY / rect.height) * strength })
  }

  const onMouseLeave = () => setOffset({ x: 0, y: 0 })

  return { ref, offset, onMouseMove, onMouseLeave }
}

type ButtonProps = {
  variant?: Variant
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className, ...props }, forwardedRef) => {
    const magnetic = useMagnetic()

    return (
      <motion.button
        ref={(node) => {
          magnetic.ref.current = node
          if (typeof forwardedRef === 'function') forwardedRef(node)
          else if (forwardedRef) forwardedRef.current = node
        }}
        onMouseMove={magnetic.onMouseMove}
        onMouseLeave={magnetic.onMouseLeave}
        animate={{ x: magnetic.offset.x, y: magnetic.offset.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.4 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium tracking-tight transition-colors duration-300',
          variantClasses[variant],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)
Button.displayName = 'Button'

type LinkButtonProps = {
  variant?: Variant
  children: ReactNode
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = 'primary', children, className, href = '', target, ...props }, forwardedRef) => {
    const magnetic = useMagnetic()
    const isInternal = href.startsWith('/') && target !== '_blank'

    const sharedProps = {
      onMouseMove: magnetic.onMouseMove,
      onMouseLeave: magnetic.onMouseLeave,
      animate: { x: magnetic.offset.x, y: magnetic.offset.y },
      transition: { type: 'spring' as const, stiffness: 200, damping: 15, mass: 0.4 },
      whileTap: { scale: 0.96 },
      className: cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium tracking-tight transition-colors duration-300',
        variantClasses[variant],
        className,
      ),
    }

    if (isInternal) {
      return (
        <MotionLink
          ref={(node: HTMLAnchorElement | null) => {
            magnetic.ref.current = node
            if (typeof forwardedRef === 'function') forwardedRef(node)
            else if (forwardedRef) forwardedRef.current = node
          }}
          to={href}
          {...sharedProps}
          {...props}
        >
          {children}
        </MotionLink>
      )
    }

    return (
      <motion.a
        ref={(node) => {
          magnetic.ref.current = node
          if (typeof forwardedRef === 'function') forwardedRef(node)
          else if (forwardedRef) forwardedRef.current = node
        }}
        href={href}
        target={target}
        {...sharedProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  },
)
LinkButton.displayName = 'LinkButton'

export type { MagneticProps }
