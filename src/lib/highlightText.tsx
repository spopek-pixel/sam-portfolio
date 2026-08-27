import type { ReactNode } from 'react'

/** Parses `**phrase**` markers in a string and wraps them in a yellow highlight span. */
export function renderHighlighted(text: string): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="text-acid font-medium">
        {part}
      </span>
    ) : (
      part
    ),
  )
}
