import { Sparkles } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import aiScreen1 from '@/assets/images/projects/dragonfly-yoga/ai_screen1.png'
import aiScreenNew from '@/assets/images/projects/dragonfly-yoga/ai_screen_new.png'

interface AIFeatureShowcaseProps {
  title: string
  body: string
  why: string
}

export function AIFeatureShowcase({ title, body, why }: AIFeatureShowcaseProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
      <Reveal delay={0.1} className="order-2 flex flex-col items-center gap-5 lg:order-1">
        <div className="relative mx-auto flex max-w-xs items-center justify-center sm:max-w-sm">
          <div className="relative w-[46%] shrink-0 -translate-y-4 -rotate-3">
            <Lightbox src={aiScreen1} alt="Home feed with AI picks for you and plain-language reasoning" triggerClassName="rounded-[1.5rem]">
              <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[0_25px_50px_rgba(0,0,0,0.45)]">
                <img src={aiScreen1} alt="" className="w-full" loading="lazy" />
              </div>
            </Lightbox>
          </div>

          <div className="relative z-10 w-[58%] shrink-0 -ml-[8%] translate-y-3 rotate-2">
            <Lightbox src={aiScreenNew} alt="Suggested for you page with match percentages and reasoning" triggerClassName="rounded-[1.5rem]">
              <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                <img src={aiScreenNew} alt="" className="w-full" loading="lazy" />
              </div>
            </Lightbox>
          </div>
        </div>

        <p className="max-w-[15rem] text-center text-xs leading-relaxed text-fg-muted">
          Home feed — an "AI picks for you" badge and a plain-language reason ("Because you've booked Core Flow 4 times this month") make the top suggestion feel personal, not generic.
        </p>
      </Reveal>

      <div className="order-1 flex flex-col gap-4 lg:order-2">
        <Reveal>
          <h3 className="font-display text-2xl sm:text-3xl">{title}</h3>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-sm leading-relaxed text-fg-muted sm:text-base">{body}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="flex items-start gap-2.5 rounded-2xl border border-acid/25 bg-acid/[0.06] px-5 py-3.5 text-sm text-fg-muted">
            <Sparkles size={16} className="mt-0.5 shrink-0 text-acid" />
            <span>
              <span className="font-medium text-fg">Why this matters. </span>
              {why}
            </span>
          </p>
        </Reveal>
      </div>
    </div>
  )
}
