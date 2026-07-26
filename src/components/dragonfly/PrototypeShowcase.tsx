import { ArrowUpRight } from 'lucide-react'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import dragonflyRecording from '@/assets/images/projects/dragonfly-yoga/dragonfly_recording.mp4'

export function PrototypeShowcase() {
  const { body, videoNote } = dragonfly.prototype

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Prototype" title="See it in motion." description={body} className="mb-10 max-w-2xl" />

        <Reveal>
          <video
            src={dragonflyRecording}
            controls
            playsInline
            preload="metadata"
            className="mx-auto max-h-[600px] w-full max-w-sm rounded-2xl border border-line shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-fg-muted">{videoNote}</p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.figma.com/proto/KoMzOgN4g69OMpESgDxpyQ/DragonFly-Hot-Yoga?node-id=53-999&p=f&t=4WxZdcJAne6a0YQ7-1&scaling=scale-down&content-scaling=fixed&page-id=50%3A162&starting-point-node-id=53%3A999"
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
