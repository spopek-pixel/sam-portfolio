import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import { cn } from '@/lib/utils'
import busOrange from '@/assets/images/projects/outfront-media-graphics/bus-orange.png'
import busPink from '@/assets/images/projects/outfront-media-graphics/bus-pink.png'
import busGreen from '@/assets/images/projects/outfront-media-graphics/bus-green.png'
import jackInterior from '@/assets/images/projects/outfront-media-graphics/jackbus2.png'
import yokeRelief from '@/assets/images/projects/outfront-media-graphics/card3.png'
import yokeHandsFree from '@/assets/images/projects/outfront-media-graphics/card4.png'
import pikeMobile from '@/assets/images/projects/outfront-media-graphics/pikemobile.png'

const tiles = [
  { src: busOrange, alt: 'Ting "All Aboard: lightning-fast internet" bus king, live in NYC', feature: true },
  { src: busPink, alt: 'Ting "Next Stop: unbeatable fast internet" bus king, live in NYC' },
  { src: busGreen, alt: 'Ting "Zoom Into: light-speed internet" bus king, live in NYC' },
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

        <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4 sm:[grid-auto-flow:dense]">
          {tiles.map((tile, index) => (
            <Reveal key={tile.src} delay={(index % 8) * 0.05} className={cn('h-full', tile.feature && 'col-span-2 row-span-2')}>
              <Lightbox src={tile.src} alt={tile.alt} className="h-full" triggerClassName="h-full">
                <div className="h-full w-full overflow-hidden rounded-2xl border border-line bg-surface">
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
