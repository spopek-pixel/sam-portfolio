import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'
import { Lightbox } from '@/components/ui/Lightbox'
import claudeDesign1 from '@/assets/images/projects/dragonfly-yoga/claude_design1.png'
import claudeDesign2 from '@/assets/images/projects/dragonfly-yoga/claude_design2.png'
import claudeDesign3 from '@/assets/images/projects/dragonfly-yoga/claude_design3.png'
import aiScreenNew from '@/assets/images/projects/dragonfly-yoga/ai_screen_new.png'

const earlyDirections = [claudeDesign1, claudeDesign2, claudeDesign3]

export function ClaudeProcessSection() {
  const { goal, usedFor, did, comparisonNote } = dragonfly.claudeProcess

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Designing with Claude"
          title="Where Claude fit into the process."
          description={
            <>
              <span className="font-medium text-fg">Goal:</span> {goal}
            </>
          }
          className="mb-10"
        />

        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2 lg:gap-12">
          <Reveal delay={0.06}>
            <div>
              <h3 className="kicker mb-3">What I used it for</h3>
              <ul className="flex flex-col gap-2 text-fg-muted">
                {usedFor.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h3 className="kicker mb-3 text-violet-tint">What I did</h3>
              <ul className="flex flex-col gap-2 text-fg-muted">
                {did.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line pt-12">
          <Reveal>
            <p className="mb-8 text-center text-sm text-fg-muted">{comparisonNote}</p>
          </Reveal>

          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
            <div>
              <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-wider text-fg-muted">Early directions</p>
              <div className="grid grid-cols-3 items-start gap-3 sm:gap-4">
                {earlyDirections.map((img, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <Lightbox src={img} alt={`Early direction ${i + 1}`}>
                      <div className="overflow-hidden rounded-xl border border-line opacity-80 grayscale-[0.2] transition duration-300 hover:opacity-100 hover:grayscale-0">
                        <img src={img} alt={`Early direction ${i + 1}`} className="w-full" loading="lazy" />
                      </div>
                    </Lightbox>
                  </Reveal>
                ))}
              </div>
            </div>

            <ArrowRight className="hidden shrink-0 rotate-90 text-fg-muted lg:block lg:rotate-0" size={24} />

            <Reveal delay={0.2}>
              <div className="w-32 sm:w-40">
                <Lightbox src={aiScreenNew} alt="Final shipped design — Suggested for you">
                  <div className="overflow-hidden rounded-2xl border-2 border-acid/40 shadow-[0_25px_50px_rgba(0,0,0,0.4)]">
                    <img src={aiScreenNew} alt="Final shipped design — Suggested for you" className="w-full" loading="lazy" />
                  </div>
                </Lightbox>
                <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-acid">Shipped</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 flex justify-center">
            {/* TODO: placeholder href — swap in the real Figma mobile app link when ready */}
            <LinkButton href="#" target="_blank" rel="noreferrer" variant="secondary" className="px-5 py-2.5 text-sm">
              View mobile app in Figma <ArrowUpRight size={16} />
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
