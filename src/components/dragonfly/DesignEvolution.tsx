import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import claudeDesign1 from '@/assets/images/projects/dragonfly-yoga/claude_design1.png'
import claudeDesign2 from '@/assets/images/projects/dragonfly-yoga/claude_design2.png'
import aiScreenNew from '@/assets/images/projects/dragonfly-yoga/ai_screen_new.png'

const concepts = [
  { src: claudeDesign1, label: 'Concept A', rotate: '-rotate-6', shift: 'translate-x-3' },
  { src: claudeDesign2, label: 'Concept B', rotate: 'rotate-6', shift: '-translate-x-3 translate-y-3' },
]

interface DesignEvolutionProps {
  title: string
  body: string
}

export function DesignEvolution({ title, body }: DesignEvolutionProps) {
  return (
    <div className="mt-14 border-t border-line pt-12">
      <Reveal>
        <div className="mx-auto max-w-xl text-center">
          <h3 className="font-display text-xl sm:text-2xl">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">{body}</p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 flex max-w-xs flex-col items-center gap-2">
        <div className="relative flex items-end justify-center">
          {concepts.map((concept, i) => (
            <Reveal key={concept.label} delay={i * 0.08}>
              <div className={`relative w-32 sm:w-36 ${concept.rotate} ${concept.shift}`} style={{ zIndex: i }}>
                <Lightbox src={concept.src} alt={`${concept.label} — early AI recommendation exploration`} triggerClassName="rounded-2xl">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-line shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <img
                      src={concept.src}
                      alt={`${concept.label} — early AI recommendation exploration`}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: '50% 18%' }}
                      loading="lazy"
                    />
                  </div>
                </Lightbox>
                <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-fg-muted">{concept.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <svg width="140" height="56" viewBox="0 0 140 56" fill="none" className="text-fg-muted/40" aria-hidden>
          <path d="M22 0 L70 46 L118 0" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" strokeLinecap="round" />
          <path d="M62 40 L70 50 L78 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <Reveal delay={0.2}>
          <div className="relative w-52 sm:w-60">
            <Lightbox src={aiScreenNew} alt="Final shipped design — Suggested for you" triggerClassName="rounded-[1.75rem]">
              <div className="aspect-[3/4] overflow-hidden rounded-[1.75rem] border-2 border-acid/40 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
                <img
                  src={aiScreenNew}
                  alt="Final shipped design — Suggested for you"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: '50% 12%' }}
                  loading="lazy"
                />
              </div>
            </Lightbox>
            <p className="mt-3 text-center font-mono text-xs uppercase tracking-wider text-acid">Shipped</p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
