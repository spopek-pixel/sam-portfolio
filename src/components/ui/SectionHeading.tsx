import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  kicker: string
  title: ReactNode
  description?: ReactNode
  descriptionClassName?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  kicker,
  title,
  description,
  descriptionClassName,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-5', align === 'center' && 'items-center text-center', className)}>
      <Reveal>
        <span className="kicker">{kicker}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              'text-lg text-fg-muted',
              align === 'center' && 'mx-auto',
              descriptionClassName ?? 'max-w-xl',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
