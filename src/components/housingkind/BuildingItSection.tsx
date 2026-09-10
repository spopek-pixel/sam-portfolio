import { housingkind } from '@/data/housingkind'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import houseVideo from '@/assets/images/projects/housingkind/house-video.mp4'
import figmaMakeBefore from '@/assets/images/projects/housingkind/figma_make_before.png'
import figmaAfter from '@/assets/images/projects/housingkind/figma_after.png'

const comparisonImages = { before: figmaMakeBefore, after: figmaAfter }

export function BuildingItSection() {
  const { figmaMakeIntro, comparison, decisionLede, decisionRest, screenshotCaption, stack } = housingkind.buildingIt

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Building it for real" title="Figma Make, then me." className="mb-8 max-w-2xl" />

        <Reveal>
          <p className="max-w-2xl text-lg text-fg-muted">{figmaMakeIntro}</p>
        </Reveal>

        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          {(['before', 'after'] as const).map((stage, stageIndex) => (
            <Reveal key={stage} delay={0.06 + stageIndex * 0.06}>
              <figure>
                <div className="mb-3 flex items-start gap-2.5">
                  <span className={stage === 'before' ? 'mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-tint' : 'mt-2 h-2 w-2 shrink-0 rounded-full bg-acid'} />
                  <span className="font-medium">{comparison[stage].title}</span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-line">
                  <img src={comparisonImages[stage]} alt={comparison[stage].title} className="aspect-[7/8] w-full object-cover object-top" loading="lazy" />
                </div>
                <figcaption className="mt-3 text-sm text-fg-muted">{comparison[stage].body}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-12 max-w-2xl text-lg">
            <strong className="font-semibold">{decisionLede}</strong> {decisionRest}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <figure className="mx-auto mb-4 mt-8 max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface/60">
              <video src={houseVideo} autoPlay muted loop playsInline aria-label="Screen recording of the Housingkind website" className="h-auto w-full" />
            </div>
            <figcaption className="mt-3 text-center text-sm text-fg-muted">{screenshotCaption}</figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-fg-muted">Tools used</span>
            {stack.map((tool) => (
              <span key={tool} className="rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-xs text-fg-muted">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
