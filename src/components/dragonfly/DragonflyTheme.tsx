import type { CSSProperties, ReactNode } from 'react'

const theme: CSSProperties = {
  ['--color-ink' as string]: '#FBF4EF',
  ['--color-ink-soft' as string]: '#F5ECE4',
  ['--color-surface' as string]: '#FFFDFB',
  ['--color-surface-raised' as string]: '#F6E9E2',
  ['--color-violet' as string]: '#C98A82',
  ['--color-violet-deep' as string]: '#A66760',
  ['--color-violet-tint' as string]: '#B97D74',
  ['--color-acid' as string]: '#7C9163',
  ['--color-mint' as string]: '#93A87C',
  ['--color-fg' as string]: '#3B322D',
  ['--color-fg-muted' as string]: '#8B7F76',
  ['--color-line' as string]: 'rgba(59,50,45,0.14)',
  colorScheme: 'light',
}

export function DragonflyTheme({ children }: { children: ReactNode }) {
  return (
    <div style={theme} className="bg-ink text-fg">
      {children}
    </div>
  )
}
