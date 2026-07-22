import { Hero } from '@/components/home/Hero'
import { IntroStatement } from '@/components/home/IntroStatement'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { HowIWork } from '@/components/home/HowIWork'
import { ExpertiseGrid } from '@/components/home/ExpertiseGrid'
import { TestimonialSpotlight } from '@/components/home/TestimonialSpotlight'
import { AboutTeaser } from '@/components/home/AboutTeaser'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <FeaturedWork />
      <HowIWork />
      <ExpertiseGrid />
      <TestimonialSpotlight />
      <AboutTeaser />
    </>
  )
}
