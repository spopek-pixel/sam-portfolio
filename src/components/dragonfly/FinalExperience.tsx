import { motion } from 'framer-motion'
import { dragonfly } from '@/data/dragonfly'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import motivateOnboard from '@/assets/images/projects/dragonfly-yoga/motivate_onboard.png'
import personalOnboard from '@/assets/images/projects/dragonfly-yoga/personal_onboard.png'
import aiRecsScreen from '@/assets/images/projects/dragonfly-yoga/ai_screen_2.png'
import bookClassScreen from '@/assets/images/projects/dragonfly-yoga/book_class_screen.png'
import waitlistClass from '@/assets/images/projects/dragonfly-yoga/waitlist_class.png'
import otherNav from '@/assets/images/projects/dragonfly-yoga/other_nav.png'

const visuals = [motivateOnboard, personalOnboard, aiRecsScreen, bookClassScreen, waitlistClass, otherNav]

export function FinalExperience() {
  const features = dragonfly.finalExperience

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Final outcome" title="What the redesign actually does." className="mb-10" />

        <div className="grid gap-6 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="group flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-surface/60 p-5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-surface">
                  <img
                    src={visuals[index]}
                    alt={`${feature.title} screen`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="text-sm text-fg-muted">{feature.body}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
