import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  kicker: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ kicker, title, description, align = 'left', className }: SectionHeadingProps) {
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
          <p className={cn('max-w-xl text-lg text-fg-muted', align === 'center' && 'mx-auto')}>{description}</p>
        </Reveal>
      )}
    </div>
  )
}
