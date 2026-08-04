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
      animate={{ scale: hit ? [0.5, 1.2, 1] : 1 }}
      transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
      className={cn(
        'relative inline-block rounded-md align-baseline outline-none transition-colors',
        !hit &&
          'cursor-pointer text-fg underline decoration-fg-muted/50 decoration-dotted decoration-2 underline-offset-8 hover:decoration-acid focus-visible:decoration-acid',
        hit && !isPixel && cn('cursor-default font-semibold no-underline', colorClasses[word.color]),
        hit && isPixel &&
          'mx-1 -translate-y-1 cursor-default align-middle font-pixel text-[0.32em] uppercase leading-none tracking-wide text-acid no-underline',
        'focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-ink',
      )}
    >
      {hit && isPixel ? (
        <span className="inline-flex items-center rounded-lg border-2 border-acid bg-acid/10 px-3 py-2 shadow-[0_0_24px_rgba(166,255,77,0.35)]">
          {word.text}
        </span>
      ) : (
        word.text
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
