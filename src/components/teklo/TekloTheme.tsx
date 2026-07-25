import type { CSSProperties, ReactNode } from 'react'

const theme: CSSProperties = {
  ['--color-violet' as string]: '#3B82F6',
  ['--color-violet-deep' as string]: '#1D4ED8',
  ['--color-violet-tint' as string]: '#60A5FA',
  ['--color-acid' as string]: '#38BDF8',
  ['--color-mint' as string]: '#3B82F6',
}

export function TekloTheme({ children }: { children: ReactNode }) {
  return <div style={theme}>{children}</div>
}
