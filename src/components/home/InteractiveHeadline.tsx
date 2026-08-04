import { useRef } from 'react'
import { motion } from 'framer-motion'
import { headlineSegments, heroWords, type HeadlineWord } from './heroWords'
import { cn } from '@/lib/utils'

interface InteractiveHeadlineProps {
  hits: Set<string>
  onActivate: (word: HeadlineWord, element: HTMLElement) => void
}

const colorClasses: Record<HeadlineWord['color'], string> = {
  violet: 'text-violet-tint [text-shadow:0_0_24px_rgba(167,139,250,0.45)]',
  acid: 'text-acid [text-shadow:0_0_24px_rgba(166,255,77,0.4)]',
}

function Word({ word, hit, onActivate }: { word: HeadlineWord; hit: boolean; onActivate: (el: HTMLElement) => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  const isPixel = word.variant === 'pixel'

  return (
    <motion.button
      ref={ref}
      type="button"
      tabIndex={hit ? -1 : 0}
      aria-pressed={hit}
      aria-label={hit ? `${word.text} — customized` : `Click to customize the word "${word.text}"`}
      onClick={() => !hit && ref.current && onActivate(ref.current)}
      animate={{ scale: hit && !isPixel ? [0.5, 1.2, 1] : 1 }}
      transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative inline-block rounded-md align-baseline outline-none focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      {/* Always renders at the word's original size — reserves layout space so the
          headline never reflows, even when the pixel variant visually grows on top of it. */}
      <span
        className={cn(
          'transition-colors',
          isPixel && hit && 'invisible',
          !hit && 'cursor-pointer text-fg underline decoration-fg-muted/50 decoration-dotted decoration-2 underline-offset-8 hover:decoration-acid focus-visible:decoration-acid',
          hit && !isPixel && cn('cursor-default font-semibold no-underline', colorClasses[word.color]),
        )}
      >
        {word.text}
      </span>

      {/* The "bigger" pixel treatment lives in an absolutely-positioned overlay, scaled
          via transform — transforms don't affect layout, so nothing else shifts. */}
      {isPixel && hit && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: 'left center' }}
          className="pointer-events-none absolute left-0 top-1/2 inline-flex -translate-y-1/2 scale-[1.7] items-center whitespace-nowrap rounded-lg border-2 border-acid bg-acid/10 px-2 py-1 font-pixel text-[0.28em] uppercase leading-none tracking-wide text-acid shadow-[0_0_24px_rgba(166,255,77,0.35)]"
        >
          {word.text}
        </motion.span>
      )}
    </motion.button>
  )
}

export function InteractiveHeadline({ hits, onActivate }: InteractiveHeadlineProps) {
  const wordsById = new Map(heroWords.map((w) => [w.id, w]))

  return (
    <h1 className="text-[clamp(2.75rem,6.5vw,5rem)]">
      {headlineSegments.map((segment, index) => {
        if (segment.type === 'text') return <span key={index}>{segment.value}</span>
        const word = wordsById.get(segment.id)
        if (!word) return null
        return (
          <Word
            key={word.id}
            word={word}
            hit={hits.has(word.id)}
            onActivate={(el) => onActivate(word, el)}
          />
        )
      })}
    </h1>
  )
}
