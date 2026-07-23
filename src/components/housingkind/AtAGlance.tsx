import { housingkind } from '@/data/housingkind'
import { Reveal } from '@/components/ui/Reveal'
import { Tag } from '@/components/ui/Tag'

export function AtAGlance() {
  const { challenge, solution, deliverables } = housingkind.atAGlance

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
              <span className="kicker">The challenge</span>
              <p className="text-fg-muted">{challenge}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
              <span className="kicker text-acid">The solution</span>
              <p className="text-fg-muted">{solution}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-6 flex flex-wrap gap-2">
            {deliverables.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
