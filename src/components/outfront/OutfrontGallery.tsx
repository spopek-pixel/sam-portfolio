import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import jackInterior from '@/assets/images/projects/outfront-media-graphics/jackbus2.png'
import yokeRelief from '@/assets/images/projects/outfront-media-graphics/card3.png'
import yokeHandsFree from '@/assets/images/projects/outfront-media-graphics/card4.png'
import pikeMobile from '@/assets/images/projects/outfront-media-graphics/pikemobile.png'

const tiles = [
  { src: jackInterior, alt: 'Jack Brackney bus interior card ad' },
  { src: yokeRelief, alt: 'It’s No Yoke "Unburdened Shoulders" bus interior ad' },
  { src: yokeHandsFree, alt: 'It’s No Yoke "Unleash Hands-Free" bus interior ad' },
  { src: pikeMobile, alt: 'Pike Nurseries mobile and tablet ad placements' },
]

export function OutfrontGallery() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Gallery" title="The work, up close." className="mb-10 max-w-2xl" />

        <div className="grid grid-cols-2 gap-4">
          {tiles.map((tile, index) => (
            <Reveal key={tile.src} delay={index * 0.06}>
              <Lightbox src={tile.src} alt={tile.alt}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-surface">
                  <img src={tile.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </Lightbox>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
