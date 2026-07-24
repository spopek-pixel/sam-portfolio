import { ArrowUpRight, MonitorSmartphone } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ArtifactPlaceholder } from '@/components/housingkind/ArtifactPlaceholder'

export function PrototypeShowcase() {
  const { body } = dragonfly.prototype

  return (
    <section className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Prototype" title="See it in motion." description={body} className="mb-10 max-w-2xl" />

        <Reveal>
          <ArtifactPlaceholder
            label="Interactive prototype preview"
            icon={MonitorSmartphone}
            className="mx-auto aspect-[16/10] w-full max-w-4xl"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 flex justify-center">
            {/* TODO: placeholder href — swap in the real Figma prototype link when ready */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              View interactive prototype <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
