import type { Accent } from '@/data/projects'
import { cn } from '@/lib/utils'

const accentGradients: Record<Accent, string> = {
  violet: 'from-violet/40 via-violet-deep/30 to-transparent',
  acid: 'from-acid/30 via-mint/20 to-transparent',
  mint: 'from-mint/30 via-violet/20 to-transparent',
}

interface ProjectVisualProps {
  image?: string
  title: string
  accent: Accent
  className?: string
}

export function ProjectVisual({ image, title, accent, className }: ProjectVisualProps) {
  if (image) {
    return (
      <div className={cn('relative overflow-hidden rounded-2xl bg-surface', className)}>
        <img
          src={image}
          alt={`${title} interface preview`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br',
        accentGradients[accent],
        className,
      )}
    >
      <span className="font-display text-2xl font-semibold text-fg/60 sm:text-4xl">{title}</span>
    </div>
  )
}
