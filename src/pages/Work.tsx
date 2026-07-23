import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, type Category } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/work/ProjectCard'
import { GradientBlob } from '@/components/ui/GradientBlob'
import { cn } from '@/lib/utils'

const filters: Array<Category | 'All'> = ['All', 'Product', 'Research', 'Visual']

export default function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const visible = filter === 'All' ? projects : projects.filter((project) => project.category.includes(filter))

  return (
    <div className="relative px-6 pb-16 pt-32 sm:px-10 sm:pb-20 sm:pt-36">
      <GradientBlob tone="mixed" className="right-[-10%] top-10 h-[380px] w-[380px]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          kicker="Work"
          title="Every project, start to finish."
          description="Five projects spanning civic tech, wellness, campus safety, marketplaces, and out-of-home advertising."
        />

        <div className="flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                'relative rounded-full border border-line px-5 py-2 font-mono text-xs uppercase tracking-wider text-fg-muted transition-colors hover:text-fg',
                filter === item && 'text-ink',
              )}
            >
              {filter === item && (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-0 rounded-full bg-acid"
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
              <span className="relative">{item}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} size="large" />
          ))}
        </div>
      </div>
    </div>
  )
}
