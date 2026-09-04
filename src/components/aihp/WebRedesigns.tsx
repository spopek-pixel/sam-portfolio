import { aihp } from '@/data/aihp'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { BrowserMockup } from '@/components/ui/BrowserMockup'
import museumDirectoryVideo from '@/assets/images/projects/aihp/museum-directory-redesign.mp4'
import floodTimelineVideo from '@/assets/images/projects/aihp/flood-timeline-redesign.mp4'

const videos: Record<string, string> = {
  'museum-directory-redesign': museumDirectoryVideo,
  'flood-timeline-redesign': floodTimelineVideo,
}

export function WebRedesigns() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Web Design" title={aihp.webRedesign.heading} description={aihp.webRedesign.body} className="mb-12 max-w-2xl" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {aihp.webRedesign.pieces.map((piece, index) => (
            <Reveal key={piece.title} delay={index * 0.1} className="flex flex-col gap-4">
              <BrowserMockup className="shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                <video
                  src={videos[piece.video]}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`Screen recording of the ${piece.title} redesign`}
                  className="h-auto w-full"
                />
              </BrowserMockup>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium">{piece.title}</h3>
                <p className="text-sm leading-relaxed text-fg-muted sm:text-base">{piece.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
