import { imageFor } from '@/data/projects'
import { aihp } from '@/data/aihp'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ImageSlot } from './ImageSlot'
import { cn } from '@/lib/utils'

type Tone = 'violet' | 'acid' | 'mint'

interface Tile {
  file: string
  label: string
  span: string
  aspect: string
  tone: Tone
  offset?: string
}

// Editorial, mixed-size gallery. Each tile looks for a file named per `file`
// (e.g. social-1.jpg) in src/assets/images/projects/aihp/ and lights up
// automatically once it's added — no layout changes needed.
const tiles: Tile[] = [
  { file: 'social-1', label: 'Research & Publications', span: 'sm:col-span-7', aspect: 'aspect-[4/5]', tone: 'violet' },
  { file: 'social-2', label: 'Research & Publications', span: 'sm:col-span-5', aspect: 'aspect-[4/5]', tone: 'acid' },
  { file: 'social-3', label: 'Staff Favorites', span: 'sm:col-span-4', aspect: 'aspect-square', tone: 'mint' },
  { file: 'social-4', label: 'Research & Publications', span: 'sm:col-span-4', aspect: 'aspect-square', tone: 'violet' },
  { file: 'social-5', label: 'Events', span: 'sm:col-span-4', aspect: 'aspect-square', tone: 'acid' },
  { file: 'social-6', label: 'Announcements', span: 'sm:col-span-12', aspect: 'aspect-[21/9]', tone: 'mint' },
  { file: 'social-7', label: 'History of Pharmacy', span: 'sm:col-span-6', aspect: 'aspect-[4/3]', tone: 'violet', offset: 'sm:mt-10' },
  { file: 'social-8', label: 'Events', span: 'sm:col-span-6', aspect: 'aspect-[4/3]', tone: 'acid' },
  { file: 'social-9', label: 'Collection Highlights', span: 'sm:col-span-5', aspect: 'aspect-[3/4]', tone: 'mint' },
  { file: 'social-10', label: 'Research & Publications', span: 'sm:col-span-7', aspect: 'aspect-[16/10]', tone: 'violet' },
]

export function SocialMediaGallery() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Social Media Design" title={aihp.social.heading} description={aihp.social.body} className="mb-12 max-w-2xl" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
          {tiles.map((tile, index) => (
            <Reveal key={tile.file} delay={(index % 6) * 0.06} className={cn(tile.span, tile.offset)}>
              <ImageSlot
                src={imageFor('aihp', tile.file)}
                alt={`AIHP social media graphic — ${tile.label}`}
                label={tile.label}
                hint={`${tile.file}.jpg`}
                tone={tile.tone}
                aspect={tile.aspect}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
