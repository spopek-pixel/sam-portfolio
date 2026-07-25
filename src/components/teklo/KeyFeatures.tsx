import { motion } from 'framer-motion'
import { teklo } from '@/data/teklo'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectVisual } from '@/components/ui/ProjectVisual'

export function KeyFeatures() {
  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Key features" title="What the redesign actually does." className="mb-10" />

        <div className="grid gap-6 sm:grid-cols-2">
          {teklo.features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="group flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-surface/60 p-5"
              >
                <ProjectVisual title={feature.title} accent="mint" className="aspect-[4/3] w-full" />
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
