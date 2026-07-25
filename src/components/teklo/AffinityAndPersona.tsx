import { teklo } from '@/data/teklo'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectVisual } from '@/components/ui/ProjectVisual'

export function AffinityAndPersona() {
  const { affinity, persona } = teklo.discovery

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <ProjectVisual title="Affinity diagram" accent="mint" className="aspect-[4/3] w-full" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3">
            <span className="kicker">{affinity.title}</span>
            <p className="text-fg-muted">{affinity.body}</p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal delay={0.1} className="flex flex-col gap-3 lg:order-1">
            <span className="kicker">{persona.title}</span>
            <p className="text-fg-muted">{persona.body}</p>
          </Reveal>
          <Reveal className="lg:order-2">
            <ProjectVisual title="User persona" accent="mint" className="aspect-[4/3] w-full" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
