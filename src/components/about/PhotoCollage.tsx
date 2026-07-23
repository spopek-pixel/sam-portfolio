import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const modules = import.meta.glob<{ default: string }>('@/assets/images/about/*.{png,jpg,jpeg,webp}', { eager: true })

function findImage(keyword: string) {
  const match = Object.entries(modules).find(([path]) => path.toLowerCase().includes(keyword))
  return match?.[1].default
}

const photos = [
  { keyword: 'volleyball', caption: 'Intramural volleyball', rotate: '-rotate-2' },
  { keyword: 'sorority', caption: 'Alpha Gamma Delta', rotate: 'rotate-1' },
  { keyword: 'football', caption: 'Hoosier football season', rotate: '-rotate-1' },
]

export function PhotoCollage() {
  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="Off the clock" title="Life outside Figma." className="mb-12" />
        <div className="grid gap-6 sm:grid-cols-3">
          {photos.map((photo, index) => {
            const image = findImage(photo.keyword)
            return (
              <Reveal key={photo.caption} delay={index * 0.08}>
                <div className={cn('flex flex-col gap-3 transition-transform hover:rotate-0', photo.rotate)}>
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface-raised to-surface">
                    {image ? (
                      <img src={image} alt={photo.caption} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-4 text-center font-mono text-xs uppercase tracking-wider text-fg-muted">
                        {photo.caption}
                      </div>
                    )}
                  </div>
                  <span className="text-center text-sm text-fg-muted">{photo.caption}</span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
