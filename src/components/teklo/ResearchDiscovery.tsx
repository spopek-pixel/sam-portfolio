import { Quote } from 'lucide-react'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import affinityDiagram from '@/assets/images/projects/teklo/affinity_diagram.jpg'

export function ResearchDiscovery() {
  const { intro, interviews, takeaway, affinity } = teklo.researchAndDiscovery

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Research & discovery" title="What buyers actually said." description={intro} className="mb-10 max-w-2xl" />

        <div className="grid gap-4 sm:grid-cols-2">
          {interviews.map((interview, index) => (
            <Reveal key={interview.name} delay={index * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface/60 p-5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-medium">{interview.name}</span>
                    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                      {interview.role}
                    </span>
                  </div>
                  <Quote size={16} className="shrink-0 text-mint/50" />
                </div>
                <div className="flex flex-col gap-3">
                  {interview.qa.map((qa) => (
                    <div key={qa.question} className="flex flex-col gap-1">
                      <p className="text-xs text-fg-muted">{qa.question}</p>
                      <p className="text-sm leading-relaxed">&ldquo;{qa.answer}&rdquo;</p>
                    </div>
                  ))}
                </div>
                <span className="mt-auto font-mono text-[10px] uppercase tracking-wider text-fg-muted/60">Interviewed {interview.date}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl leading-snug sm:text-2xl">{takeaway}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 border-t border-line pt-14 lg:grid-cols-2 lg:items-center lg:gap-14">
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
      </div>
    </section>
  )
}
