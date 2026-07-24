import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

interface Concept {
  name: string
  status: string
  body: string
}

export function ConceptRoadmap({ concepts }: { concepts: Concept[] }) {
  return (
    <div className="relative flex flex-col gap-6">
      <div className="absolute bottom-6 left-6 top-6 w-px bg-line" aria-hidden />

      {concepts.map((concept, i) => {
        const shipped = concept.status === 'Shipped'
        return (
          <Reveal key={concept.name} delay={i * 0.12}>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className={cn(
                'relative flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center sm:gap-6',
                shipped
                  ? 'border-acid/40 bg-acid/[0.06] shadow-[0_20px_50px_-20px_rgba(221,153,51,0.35)]'
                  : 'border-line bg-surface/40',
              )}
            >
              <span
                className={cn(
                  'relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-ink font-mono text-sm',
                  shipped ? 'border-acid/50 text-acid' : 'border-line text-fg-muted',
                )}
              >
                {shipped ? <CheckCircle2 size={20} /> : `0${i + 1}`}
              </span>
              <div className="flex-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-3">
                  <h4 className="text-base font-medium">{concept.name}</h4>
                  <span
                    className={cn(
                      'shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider',
                      shipped ? 'bg-acid/15 text-acid' : 'bg-fg-muted/10 text-fg-muted',
                    )}
                  >
                    {concept.status}
                  </span>
                </div>
                <p className={cn('text-sm leading-relaxed', shipped ? 'text-fg-muted' : 'text-fg-muted/70')}>
                  {concept.body}
                </p>
              </div>
            </motion.div>
          </Reveal>
        )
      })}
    </div>
  )
}
