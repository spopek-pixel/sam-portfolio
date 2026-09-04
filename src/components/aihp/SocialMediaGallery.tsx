import { imageFor } from '@/data/projects'
import { aihp } from '@/data/aihp'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'

type Tile = {
  file: string
  label: string
  aspect: string
}

// Only real, shipped graphics — no placeholder slots. Sized to their true
// pixel aspect ratio so nothing gets stretched or over-cropped.
const tiles: Tile[] = [
  { file: 'social-1', label: 'Research & Publications', aspect: 'aspect-[4/5]' },
  { file: 'social-2', label: 'Research & Publications', aspect: 'aspect-[4/5]' },
  { file: 'social-3', label: 'Research & Publications', aspect: 'aspect-[4/5]' },
  { file: 'social-4', label: 'Collection Highlights', aspect: 'aspect-square' },
  { file: 'social-5', label: 'Announcements', aspect: 'aspect-square' },
  { file: 'social-9', label: 'Announcements', aspect: 'aspect-square' },
]

export function SocialMediaGallery() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Social Media Design" title={aihp.social.heading} description={aihp.social.body} className="mb-12 max-w-2xl" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {tiles.map((tile, index) => {
            const src = imageFor('aihp', tile.file)
            if (!src) return null
            return (
              <Reveal key={tile.file} delay={(index % 6) * 0.06} className="flex flex-col gap-2.5">
                <Lightbox src={src} alt={`AIHP social media graphic — ${tile.label}`} triggerClassName="rounded-2xl block">
                  <div className={`w-full overflow-hidden rounded-2xl border border-line bg-surface ${tile.aspect}`}>
                    <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </Lightbox>
                <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">{tile.label}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
