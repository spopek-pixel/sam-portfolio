import { Compass, ListChecks, MapPinOff, MonitorSmartphone } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from '@/components/housingkind/ArtifactPlaceholder'

const icons = [MapPinOff, ListChecks, Compass]

export function Challenge() {
  const { intro, painPoints, supporting, currentApp } = dragonfly.challenge

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="The challenge" title="Where the old app fell apart." description={intro} className="mb-10" />

        <Reveal>
          <figure className="mx-auto mb-10 max-w-2xl">
            <ArtifactPlaceholder label="Current Dragonfly app" icon={MonitorSmartphone} className="aspect-[16/10] w-full" />
            <figcaption className="mt-3 text-center text-sm text-fg-muted">{currentApp}</figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {painPoints.map((point, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={point.title} delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/60 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-violet-tint">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-medium">{point.title}</h3>
                  <p className="text-sm text-fg-muted">{point.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {supporting.map((item) => (
              <span key={item} className="rounded-full border border-line px-4 py-2 text-sm text-fg-muted">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
