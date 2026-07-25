import { outfront } from '@/data/outfront'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ClientCaseStudy } from './ClientCaseStudy'
import busPink from '@/assets/images/projects/outfront-media-graphics/bus-pink.png'
import pinkTemplate from '@/assets/images/projects/outfront-media-graphics/pink1.png'
import busOrange from '@/assets/images/projects/outfront-media-graphics/bus-orange.png'
import orangeTemplate from '@/assets/images/projects/outfront-media-graphics/orange2.png'
import busGreen from '@/assets/images/projects/outfront-media-graphics/bus-green.png'
import greenTemplate from '@/assets/images/projects/outfront-media-graphics/green3.png'
import busBlue from '@/assets/images/projects/outfront-media-graphics/bus-blue.png'
import blueTemplate from '@/assets/images/projects/outfront-media-graphics/blue4.png'
import jackBus from '@/assets/images/projects/outfront-media-graphics/jackbus.png'
import jackBoard from '@/assets/images/projects/outfront-media-graphics/jackboard.png'
import yokeSheet from '@/assets/images/projects/outfront-media-graphics/itsnoyoke.png'
import yokeBus from '@/assets/images/projects/outfront-media-graphics/card2.png'
import pikeBus from '@/assets/images/projects/outfront-media-graphics/pikebus.png'
import pikeLive from '@/assets/images/projects/outfront-media-graphics/pikelive.png'
import type { ClientCaseStudyProps } from './ClientCaseStudy'

const tingCarousel = [
  { src: busPink, alt: 'Ting "Next Stop: unbeatable fast internet" bus king, live in NYC', label: 'Next Stop — live on the bus' },
  { src: pinkTemplate, alt: 'Ting "Next Stop" — OUTFRONT production template', label: 'Next Stop — production template' },
  { src: busOrange, alt: 'Ting "All Aboard: lightning-fast internet" bus king, live in NYC', label: 'All Aboard — live on the bus' },
  { src: orangeTemplate, alt: 'Ting "All Aboard" — OUTFRONT production template', label: 'All Aboard — production template' },
  { src: busGreen, alt: 'Ting "Zoom Into: light-speed internet" bus king, live in NYC', label: 'Zoom Into — live on the bus' },
  { src: greenTemplate, alt: 'Ting "Zoom Into" — OUTFRONT production template', label: 'Zoom Into — production template' },
  { src: busBlue, alt: 'Ting "Destination: reliable fiber internet" bus king, live in NYC', label: 'Destination — live on the bus' },
  { src: blueTemplate, alt: 'Ting "Destination" — OUTFRONT production template', label: 'Destination — production template' },
]

const mediaBySlug: Record<string, ClientCaseStudyProps['media']> = {
  ting: { type: 'carousel', images: tingCarousel },
  'jack-brackney': {
    type: 'grid',
    layout: 'feature-left',
    images: [
      { src: jackBus, alt: 'Jack Brackney bus rear king ad live on the M42 in Manhattan' },
      { src: jackBoard, alt: 'Jack Brackney ad on an OUTFRONT wall installation' },
    ],
  },
  'its-no-yoke': {
    type: 'grid',
    images: [
      { src: yokeSheet, alt: "All four It's No Yoke bus interior ad headlines", fit: 'contain' },
      { src: yokeBus, alt: "It's No Yoke bus interior ad — \"Elevate your Load\" — live in a bus" },
    ],
  },
  'pike-nurseries': {
    type: 'grid',
    images: [
      { src: pikeBus, alt: 'Pike Nurseries bus wrap — "Make Your Garden A Masterpiece"' },
      { src: pikeLive, alt: 'Pike Nurseries liveboard — "Make Your Garden A Work Of Art"' },
    ],
  },
}

export function ClientCaseStudies() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <SectionHeading kicker="The campaigns" title="Four briefs, four solutions." className="max-w-2xl" />

        <div className="flex flex-col gap-6">
          {outfront.clients.map((client, index) => (
            <ClientCaseStudy key={client.slug} client={client} media={mediaBySlug[client.slug]} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
