import { Hero } from '@/components/home/Hero'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { WhatIBring } from '@/components/home/WhatIBring'
import { ExpertiseGrid } from '@/components/home/ExpertiseGrid'
import { TestimonialSpotlight } from '@/components/home/TestimonialSpotlight'
import { AboutTeaser } from '@/components/home/AboutTeaser'
import { PaintDivider } from '@/components/ui/PaintDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <PaintDivider align="left" />
      <WhatIBring />
      <ExpertiseGrid />
      <PaintDivider align="right" />
      <TestimonialSpotlight />
      <AboutTeaser />
    </>
  )
}
