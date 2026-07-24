import { Sparkles } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'
import aiScreen1 from '@/assets/images/projects/dragonfly-yoga/ai_screen1.png'
import aiScreen2 from '@/assets/images/projects/dragonfly-yoga/ai_screen2.png'

interface EdgeCalloutProps {
  top: number
  side: 'left' | 'right'
  label: string
}

function EdgeCallout({ top, side, label }: EdgeCalloutProps) {
  return (
    <div
      className={cn(
        'absolute z-10 hidden -translate-y-1/2 items-center gap-2 md:flex',
        side === 'left' ? 'right-full flex-row-reverse pr-2.5' : 'left-full pl-2.5',
      )}
      style={{ top: `${top}%` }}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-acid shadow-[0_0_0_4px_rgba(221,153,51,0.2)]" />
      <span className="h-px w-7 shrink-0 bg-acid/50" />
      <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-fg-muted">{label}</span>
    </div>
  )
}

interface AIFeatureShowcaseProps {
  title: string
  body: string
  why: string
}

export function AIFeatureShowcase({ title, body, why }: AIFeatureShowcaseProps) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h3 className="font-display text-2xl sm:text-3xl">{title}</h3>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">{body}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-4 flex max-w-lg items-start gap-2.5 rounded-full border border-acid/25 bg-acid/[0.06] px-5 py-2.5 text-left text-sm text-fg-muted">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-acid" />
            <span>
              <span className="font-medium text-fg">Why this matters. </span>
              {why}
            </span>
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.18}>
        <div className="relative mx-auto mt-12 flex max-w-md items-center justify-center gap-0 px-6 md:max-w-lg md:px-24">
          <div className="relative w-[42%] shrink-0 -translate-y-4">
            <EdgeCallout top={41} side="left" label="AI picks for you" />
            <EdgeCallout top={85} side="left" label="Plain-language reason" />
            <div className="-rotate-3">
              <Lightbox src={aiScreen1} alt="Home feed with AI picks for you and plain-language reasoning" triggerClassName="rounded-[1.5rem]">
                <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[0_25px_50px_rgba(0,0,0,0.45)]">
                  <img src={aiScreen1} alt="" className="w-full" loading="lazy" />
                </div>
              </Lightbox>
            </div>
          </div>

          <div className="relative z-10 w-[54%] shrink-0 -ml-[6%] translate-y-3">
            <EdgeCallout top={19} side="right" label="Explains the logic" />
            <EdgeCallout top={53} side="right" label="Match percentage" />
            <div className="rotate-2">
              <Lightbox src={aiScreen2} alt="Suggested for you page with match percentages and reasoning" triggerClassName="rounded-[1.5rem]">
                <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  <img src={aiScreen2} alt="" className="w-full" loading="lazy" />
                </div>
              </Lightbox>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
