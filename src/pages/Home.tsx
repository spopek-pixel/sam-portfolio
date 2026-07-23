import { Hero } from '@/components/home/Hero'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { WhatIBring } from '@/components/home/WhatIBring'
import { ExpertiseGrid } from '@/components/home/ExpertiseGrid'
import { TestimonialSpotlight } from '@/components/home/TestimonialSpotlight'
import { AboutTeaser } from '@/components/home/AboutTeaser'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <WhatIBring />
      <ExpertiseGrid />
      <TestimonialSpotlight />
      <AboutTeaser />
    </>
  )
}
