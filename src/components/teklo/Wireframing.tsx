import { ArrowDown } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import wireframeImage from '@/assets/images/projects/teklo/wireframe_teklo.png'
import hiFiImage from '@/assets/images/projects/teklo/high_fidelity_teklo.png'

export function Wireframing() {
  const { intro, lowFi, hiFi } = teklo.wireframing

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Wireframing" title="From structure to system." description={intro} className="mb-12 max-w-2xl" />

        <div className="flex flex-col items-center gap-6">
          <Reveal className="w-full">
            <div className="flex flex-col gap-4">
              <span className="mx-auto rounded-full bg-fg-muted/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-fg-muted">
                {lowFi.label}
              </span>
              <Lightbox src={wireframeImage} alt="Teklo low-fidelity wireframe kit">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-ink p-2">
                  <img src={wireframeImage} alt="" className="h-full w-full object-contain" loading="lazy" />
                </div>
              </Lightbox>
              <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-fg-muted">{lowFi.body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ArrowDown size={22} className="text-mint" />
          </Reveal>

          <Reveal delay={0.16} className="w-full">
            <div className="flex flex-col gap-4">
              <span className="mx-auto rounded-full bg-mint/15 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-mint">
                {hiFi.label}
              </span>
              <Lightbox src={hiFiImage} alt="Teklo high-fidelity design system">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-mint/40 bg-ink p-2 shadow-[0_25px_60px_-20px_rgba(59,130,246,0.35)]">
                  <img src={hiFiImage} alt="" className="h-full w-full object-contain" loading="lazy" />
                </div>
              </Lightbox>
              <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-fg-muted">{hiFi.body}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
