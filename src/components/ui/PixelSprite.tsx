import { useMemo, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

export interface PixelSpriteProps {
  grid: string[]
  palette: Record<string, string>
  className?: string
  style?: CSSProperties
  title?: string
}

interface Block {
  x: number
  y: number
  w: number
  h: number
  fill: string
}

function buildBlocks(grid: string[], palette: Record<string, string>): { blocks: Block[]; cols: number; rows: number } {
  const cols = Math.max(...grid.map((row) => row.length))
  const rows = grid.length
  const blocks: Block[] = []

  for (let y = 0; y < rows; y++) {
    const row = grid[y].padEnd(cols, '.')
    let runStart = 0
    let runColor: string | null = palette[row[0]] ?? null
    for (let x = 1; x <= cols; x++) {
      const color: string | null = x < cols ? (palette[row[x]] ?? null) : null
      const boundary = x === cols || color !== runColor
      if (boundary) {
        if (runColor) blocks.push({ x: runStart, y, w: x - runStart, h: 1, fill: runColor })
        runStart = x
        runColor = color
      }
    }
  }

  return { blocks, cols, rows }
}

/** Renders ASCII-grid pixel art as crisp, scalable SVG rects — no raster assets needed. */
export function PixelSprite({ grid, palette, className, style, title }: PixelSpriteProps) {
  const { blocks, cols, rows } = useMemo(() => buildBlocks(grid, palette), [grid, palette])

  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      className={cn('block', className)}
      style={style}
      shapeRendering="crispEdges"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      {blocks.map((block, index) => (
        <rect key={index} x={block.x} y={block.y} width={block.w} height={block.h} fill={block.fill} />
      ))}
    </svg>
  )
}
