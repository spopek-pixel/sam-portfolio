import type { CreativeReviewScreen } from '@/data/myoutfrontCreativeReview'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

const intro = [
  "The creative-upload flow started in Figma: a client drags artwork into a project, agrees to a verification gate, and watches the system check it. That part I designed the normal way, screen by screen, before anything else existed.",
  "Once that core flow held together, I brought it to Claude Design and used it like a PM: not to draw new screens from scratch, but to pressure-test what I'd already committed to in Figma. What actually happens when a file fails verification, not just \"it fails\"? What does \"verified\" unlock next? Where do all these uploads live day to day, across every campaign, not just the one you're looking at? That pressure-testing produced the three screens after the Figma flow below, plus a component sheet, extending the system instead of replacing it.",
]

export function CreativeReviewShowcase({ screens }: { screens: CreativeReviewScreen[] }) {
  if (screens.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Creative review flow" title="Figma first, Claude Design as a PM." className="mb-8" />

        <div className="flex flex-col gap-4">
          {intro.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
              <p className="max-w-3xl text-base leading-relaxed text-fg-muted sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-16">
          {screens.map((screen, index) => (
            <Reveal key={screen.id} delay={index * 0.04}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="rounded bg-violet/15 px-1.5 py-0.5 font-mono text-[11px] text-violet-tint">{screen.id}</span>
                  <span className="text-sm font-medium text-fg">{screen.label}</span>
                </div>
                <p className="max-w-xs text-center text-xs text-fg-muted">{screen.caption}</p>
                <div className="overflow-hidden rounded-2xl border border-line shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                  <div
                    className="origin-top [zoom:0.42] sm:[zoom:0.56] lg:[zoom:0.62]"
                    dangerouslySetInnerHTML={{ __html: screen.html }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
