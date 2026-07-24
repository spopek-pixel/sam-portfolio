import type { CSSProperties, ReactNode } from 'react'

const theme: CSSProperties = {
  ['--color-violet' as string]: '#F47B2C',
  ['--color-violet-deep' as string]: '#B85C1E',
  ['--color-violet-tint' as string]: '#FF9B54',
  ['--color-acid' as string]: '#DD9933',
  ['--color-mint' as string]: '#F0C888',
}

export function DragonflyTheme({ children }: { children: ReactNode }) {
  return <div style={theme}>{children}</div>
}
