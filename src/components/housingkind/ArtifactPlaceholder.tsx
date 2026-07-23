import type { ComponentType } from 'react'
import { Image as ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ArtifactPlaceholderProps {
  image?: string
  label: string
  icon?: ComponentType<{ size?: number; className?: string }>
  className?: string
  imgClassName?: string
  bgClassName?: string
}

export function ArtifactPlaceholder({
  image,
  label,
  icon: Icon = ImageIcon,
  className,
  imgClassName = 'object-cover',
  bgClassName = 'bg-surface',
}: ArtifactPlaceholderProps) {
  if (image) {
    return (
      <div className={cn('overflow-hidden rounded-2xl border border-line', bgClassName, className)}>
        <img src={image} alt={label} className={cn('h-full w-full', imgClassName)} loading="lazy" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line bg-surface/40 p-6 text-center',
        className,
      )}
    >
      <Icon size={28} className="text-fg-muted/60" />
      <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted/70">{label}</span>
    </div>
  )
}
