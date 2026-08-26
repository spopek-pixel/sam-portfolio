import type { CreativeReviewScreen } from '@/data/myoutfrontCreativeReview'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const intro =
  "I designed the core flow (upload, terms, verifying, status tracking) in Figma first. Once it held together, I brought it to Claude Design and used it like a PM: not to draw new screens from scratch, but to pressure-test what I'd already committed to. That produced three more screens and a component sheet below, extending the flow rather than replacing it."

export function CreativeReviewShowcase({ screens }: { screens: CreativeReviewScreen[] }) {
  if (screens.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Creative review flow" title="Figma first, Claude Design as a PM." className="mb-8" />

        <Reveal>
          <p className="max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg">{intro}</p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 sm:gap-20">
          {screens.map((screen, index) => (
            <Reveal key={screen.id} delay={0.04}>
              <div
                className={cn(
                  'flex flex-col gap-8 md:items-center md:gap-14',
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row',
                )}
              >
                <div className="flex justify-center md:w-1/2">
                  <div className="overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                    <div
                      className="origin-top [zoom:0.42] sm:[zoom:0.56] lg:[zoom:0.62]"
                      dangerouslySetInnerHTML={{ __html: screen.html }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:w-1/2">
                  <div className="flex items-baseline gap-2">
                    <span className="rounded bg-violet/15 px-1.5 py-0.5 font-mono text-[11px] text-violet-tint">{screen.id}</span>
                    <h3 className="text-lg font-medium">{screen.label}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-fg-muted sm:text-base">{screen.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
