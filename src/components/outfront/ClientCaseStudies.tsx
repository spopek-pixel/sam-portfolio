import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ClientCaseStudy, type ClientImage } from './ClientCaseStudy'
import tingBus from '@/assets/images/projects/outfront-media-graphics/bus-blue.png'
import tingTemplate from '@/assets/images/projects/outfront-media-graphics/blue4.png'
import jackBus from '@/assets/images/projects/outfront-media-graphics/jackbus.png'
import jackBoard from '@/assets/images/projects/outfront-media-graphics/jackboard.png'
import yokeSheet from '@/assets/images/projects/outfront-media-graphics/itsnoyoke.png'
import yokeBus from '@/assets/images/projects/outfront-media-graphics/card2.png'
import pikeBus from '@/assets/images/projects/outfront-media-graphics/pikebus.png'
import pikeLive from '@/assets/images/projects/outfront-media-graphics/pikelive.png'

const imagesBySlug: Record<string, ClientImage[]> = {
  ting: [
    { src: tingBus, alt: 'Ting Internet bus king ad — "Destination: reliable fiber internet" — live on a NYC bus' },
    { src: tingTemplate, alt: 'Ting Internet bus king — OUTFRONT production template, final direction', fit: 'contain' },
  ],
  'jack-brackney': [
    { src: jackBus, alt: 'Jack Brackney bus rear king ad live on the M42 in Manhattan' },
    { src: jackBoard, alt: 'Jack Brackney ad on an OUTFRONT wall installation' },
  ],
  'its-no-yoke': [
    { src: yokeSheet, alt: "All four It's No Yoke bus interior ad headlines", fit: 'contain' },
    { src: yokeBus, alt: "It's No Yoke bus interior ad — \"Elevate your Load\" — live in a bus" },
  ],
  'pike-nurseries': [
    { src: pikeBus, alt: 'Pike Nurseries bus wrap — "Make Your Garden A Masterpiece"' },
    { src: pikeLive, alt: 'Pike Nurseries liveboard — "Make Your Garden A Work Of Art"' },
  ],
}

export function ClientCaseStudies() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <SectionHeading kicker="The campaigns" title="Four briefs, four solutions." className="max-w-2xl" />

        <div className="flex flex-col gap-6">
          {outfront.clients.map((client, index) => (
            <ClientCaseStudy key={client.slug} client={client} images={imagesBySlug[client.slug]} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
