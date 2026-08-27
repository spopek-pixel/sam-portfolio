import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'

interface DeliverablesProps {
  items: string[]
  kicker?: string
  title?: string
}

export function Deliverables({ items, kicker = 'Deliverables', title = 'What this project actually shipped.' }: DeliverablesProps) {
  const reducedMotion = usePrefersReducedMotion()

  if (items.length === 0) return null

  return (
    <section className="px-6 py-10 sm:px-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={kicker} title={title} className="mb-8" />
        <div className="flex flex-wrap gap-2.5">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.4, y: 14, rotate: index % 2 === 0 ? -6 : 6 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: (index % 12) * 0.04 }}
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
