import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Tag } from '@/components/ui/Tag'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import persona1 from '@/assets/images/projects/housingkind/persona1.png'
import persona2 from '@/assets/images/projects/housingkind/persona2.png'
import persona3 from '@/assets/images/projects/housingkind/persona3.png'

const personaImages = [persona1, persona2, persona3]

const arrowButtonClasses =
  'rounded-full border border-line bg-surface/60 p-2.5 text-fg transition-colors hover:border-violet-tint hover:bg-surface-raised'

// Wraps whichever of `phrases` appear in `text` in the accent color, so key words pop
// without hand-authoring JSX for every sentence.
function highlight(text: string, phrases: string[]) {
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi')
  return text.split(pattern).map((part, i) =>
    phrases.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-violet-tint">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

export function PeopleAndProblem() {
  const { lede, ledeRest, context, personaIntro, personaRoles, stakes, framing, hmw, hmwAttribution } = housingkind.problem
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const reducedMotion = usePrefersReducedMotion()

  const goTo = (next: number, dir: number) => {
    setDirection(dir)
    setIndex((next + personaRoles.length) % personaRoles.length)
  }
  const goPrev = () => goTo(index - 1, -1)
  const goNext = () => goTo(index + 1, 1)

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Where this starts"
          title={
            <>
              A problem nobody can <span className="text-violet-tint">picture</span>.
            </>
          }
          description={
            <>
              <strong className="font-semibold text-fg">{lede}</strong> {highlight(ledeRest, ["can't picture what's being proposed"])}
            </>
          }
          descriptionClassName="max-w-none"
          className="mb-6"
        />
        <Reveal delay={0.14}>
          <p className="max-w-none text-fg-muted">{highlight(context, ['fight the very housing that would build one'])}</p>
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <span className="kicker">The stakeholders</span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-3 max-w-none text-fg-muted">{personaIntro}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-4 flex flex-wrap gap-2">
              {personaRoles.map((role) => (
                <Tag key={role}>{role}</Tag>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="The three people at the center of this project"
            className="mx-auto mt-6 max-w-3xl"
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') goPrev()
              if (event.key === 'ArrowRight') goNext()
            }}
          >
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous person"
                className={cn(arrowButtonClasses, 'hidden shrink-0 sm:inline-flex')}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-line bg-surface/60">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={personaRoles[index]}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${personaRoles.length}: ${personaRoles[index]}`}
                    initial={{ opacity: 0, x: reducedMotion ? 0 : direction * 48 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reducedMotion ? 0 : direction * -48 }}
                    transition={{ duration: reducedMotion ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={personaImages[index]}
                      alt={`Persona: ${personaRoles[index]}`}
                      className="aspect-video w-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next person"
                className={cn(arrowButtonClasses, 'hidden shrink-0 sm:inline-flex')}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 sm:px-14">
              <span className="kicker" aria-live="polite">
                {personaRoles[index]}
              </span>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous person"
                  className={cn(arrowButtonClasses, 'p-1.5 sm:hidden')}
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex items-center gap-2">
                  {personaRoles.map((role, dotIndex) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
                      aria-label={`Go to ${role}`}
                      aria-current={dotIndex === index}
                      className={cn(
                        'h-2 w-2 rounded-full transition-colors',
                        dotIndex === index ? 'bg-violet-tint' : 'bg-line hover:bg-fg-muted/50',
                      )}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs text-fg-muted">
                  {index + 1} of {personaRoles.length}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next person"
                  className={cn(arrowButtonClasses, 'p-1.5 sm:hidden')}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-none text-fg-muted">{highlight(stakes, ['a fight over imagination'])}</p>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <Reveal>
            <p className="text-lg">{highlight(framing, ['actually see what’s being proposed'])}</p>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <blockquote className="flex h-full flex-col justify-center rounded-2xl border-l-4 border-acid bg-surface/60 p-6 lg:p-8">
              <p className="font-display text-xl leading-snug sm:text-2xl">"{hmw}"</p>
              <cite className="mt-3 block font-mono text-xs uppercase not-italic tracking-wider text-fg-muted">{hmwAttribution}</cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
