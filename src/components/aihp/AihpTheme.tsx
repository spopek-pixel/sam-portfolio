import type { CSSProperties, ReactNode } from 'react'

// Archival, apothecary-inspired palette: brass/gold, oxblood, and sage,
// remapped over the shared violet/acid/mint accent variables.
const theme: CSSProperties = {
  ['--color-violet' as string]: '#C4952F',
  ['--color-violet-deep' as string]: '#7C5A1E',
  ['--color-violet-tint' as string]: '#E6BD6C',
  ['--color-acid' as string]: '#9A4B41',
  ['--color-mint' as string]: '#6E8368',
}

export function AihpTheme({ children }: { children: ReactNode }) {
  return <div style={theme}>{children}</div>
}
