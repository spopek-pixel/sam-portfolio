import { motion } from 'framer-motion'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Lightbox } from '@/components/ui/Lightbox'
import searchImage from '@/assets/images/projects/teklo/search_products.png'
import homeImage from '@/assets/images/projects/teklo/home.png'
import checkoutImage from '@/assets/images/projects/teklo/checkout1.png'
import onboardingImage from '@/assets/images/projects/teklo/intro_teklo.png'

const featureImages = [searchImage, homeImage, checkoutImage, onboardingImage]

export function KeyFeatures() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Final product" title="What the redesign actually does." className="mb-10" />

        <div className="grid gap-6 sm:grid-cols-2">
          {teklo.features.map((feature, index) => {
            const image = featureImages[index]
            return (
              <Reveal key={feature.title} delay={index * 0.06} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="group flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-surface/60 p-5"
                >
                  <Lightbox src={image} alt={`${feature.title} screen`}>
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-white">
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </Lightbox>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-medium">{feature.title}</h3>
                    <p className="text-sm text-fg-muted">{feature.body}</p>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
