import { ArrowUpRight } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/Button'

export function ClaudeProcessSection() {
  const { goal, usedFor, did } = dragonfly.claudeProcess

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Designing with Claude Code"
          title="Where Claude Code fit into the process."
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
