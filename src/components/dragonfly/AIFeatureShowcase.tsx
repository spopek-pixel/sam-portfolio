import { Sparkles } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'
import aiScreen1 from '@/assets/images/projects/dragonfly-yoga/ai_screen1.png'
import aiScreen2 from '@/assets/images/projects/dragonfly-yoga/ai_screen2.png'

interface HotspotProps {
  top: number
  left: number
  side: 'left' | 'right'
  label: string
}

function Hotspot({ top, left, side, label }: HotspotProps) {
  return (
    <div className="absolute z-10" style={{ top: `${top}%`, left: `${left}%` }}>
      <span className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-acid shadow-[0_0_0_5px_rgba(221,153,51,0.22)]" />
      <div
        className={cn(
          'absolute top-1/2 hidden -translate-y-1/2 items-center gap-2 sm:flex',
          side === 'right' ? 'left-3' : 'right-3 flex-row-reverse',
        )}
      >
        <span className="h-px w-6 bg-acid/60" />
        <span className="whitespace-nowrap rounded-full border border-acid/30 bg-ink/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg backdrop-blur-sm">
          {label}
        </span>
      </div>
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
          <h3 className="font-display text-3xl sm:text-4xl">{title}</h3>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted sm:text-base">{body}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 flex max-w-lg items-start gap-2.5 rounded-full border border-acid/25 bg-acid/[0.06] px-5 py-2.5 text-left text-sm text-fg-muted">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-acid" />
            <span>
              <span className="font-medium text-fg">Why this matters. </span>
              {why}
            </span>
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:items-start sm:gap-6 lg:gap-10">
        <Reveal delay={0.16}>
          <div className="relative mx-auto max-w-sm sm:translate-y-8">
            <Lightbox
              src={aiScreen1}
              alt="Home feed with AI picks for you and plain-language reasoning"
              triggerClassName="rounded-[2rem]"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-[0_35px_70px_rgba(0,0,0,0.5)]">
                <img src={aiScreen1} alt="" className="w-full" loading="lazy" />
              </div>
            </Lightbox>
            <Hotspot top={41} left={30} side="right" label="AI picks for you" />
            <Hotspot top={87} left={70} side="left" label="Plain-language reason" />
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="relative mx-auto max-w-sm">
            <Lightbox
              src={aiScreen2}
              alt="Suggested for you page with match percentages and reasoning"
              triggerClassName="rounded-[2rem]"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-line shadow-[0_35px_70px_rgba(0,0,0,0.5)]">
                <img src={aiScreen2} alt="" className="w-full" loading="lazy" />
              </div>
            </Lightbox>
            <Hotspot top={20} left={75} side="left" label="Explains the logic" />
            <Hotspot top={51} left={78} side="left" label="Match %" />
          </div>
        </Reveal>
      </div>
    </div>
  )
}
