import { teklo } from '@/data/teklo'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import affinityDiagram from '@/assets/images/projects/teklo/affinity_diagram.jpg'
import personaSheet from '@/assets/images/projects/teklo/persona.png'

export function AffinityAndPersona() {
  const { affinity, persona } = teklo.discovery

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <Lightbox src={affinityDiagram} alt="Affinity diagram grouping interview responses into themes">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-white p-2">
                <img src={affinityDiagram} alt="" className="h-full w-full object-contain" loading="lazy" />
              </div>
            </Lightbox>
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
            <Lightbox src={personaSheet} alt="User persona — Alex Martinez, the budget-conscious student">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl border border-line bg-white p-2">
                <img src={personaSheet} alt="" className="h-full w-full object-contain" loading="lazy" />
              </div>
            </Lightbox>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
