import type { CSSProperties, ReactNode } from 'react'

const theme: CSSProperties = {
  ['--color-violet' as string]: '#3F7D4A',
  ['--color-violet-deep' as string]: '#235030',
  ['--color-violet-tint' as string]: '#8FD9A0',
  ['--color-acid' as string]: '#B8F23C',
  ['--color-mint' as string]: '#4ADE80',
}

export function AivyTheme({ children }: { children: ReactNode }) {
  return <div style={theme}>{children}</div>
}
