import { motion } from 'framer-motion'
import { aihp } from '@/data/aihp'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

export function MyRole() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="My Role" title={aihp.role.heading} description={aihp.role.body} className="max-w-2xl" />

        <div className="mt-8 flex flex-wrap gap-2.5">
          {aihp.role.areas.map((item, index) => (
            <motion.div
              key={item}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.4, y: 14, rotate: index % 2 === 0 ? -6 : 6 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: index * 0.05 }}
              whileHover={reducedMotion ? undefined : { scale: 1.08, rotate: index % 2 === 0 ? -3 : 3 }}
            >
              <Tag>{item}</Tag>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
