import type { CSSProperties, ReactNode } from 'react'

const theme: CSSProperties = {
  ['--color-violet' as string]: '#E3A69D',
  ['--color-violet-deep' as string]: '#B97D74',
  ['--color-violet-tint' as string]: '#E8B6AE',
  ['--color-acid' as string]: '#A8C08A',
  ['--color-mint' as string]: '#C3D6AC',
}

export function DragonflyTheme({ children }: { children: ReactNode }) {
  return <div style={theme}>{children}</div>
}
