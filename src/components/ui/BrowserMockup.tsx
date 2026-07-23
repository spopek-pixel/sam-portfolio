import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function BrowserMockup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-xl border border-line bg-surface', className)}>
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-raised px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
      </div>
      <div className="relative overflow-hidden">{children}</div>
    </div>
  )
}
