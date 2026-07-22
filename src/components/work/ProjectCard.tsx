import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import { Tag } from '@/components/ui/Tag'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  index: number
  size?: 'large' | 'regular'
}

export function ProjectCard({ project, index, size = 'regular' }: ProjectCardProps) {
  const reducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 20 })
  const lift = useTransform(springRotateX, [-6, 6], [6, -6])

  const handleMouseMove = (event: React.MouseEvent) => {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = (event.clientX - rect.left) / rect.width - 0.5
    const relY = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(relX * 10)
    rotateX.set(relY * -10)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <Link to={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX: springRotateX, rotateY: springRotateY, y: lift, perspective: 1000 }}
        className="group relative flex flex-col gap-5 rounded-3xl border border-line bg-surface/60 p-5 transition-colors hover:border-violet-tint/60"
      >
        <ProjectVisual
          image={project.images[0]}
          title={project.title}
          accent={project.accent}
          className={cn('aspect-[4/3] w-full', size === 'large' && 'aspect-[16/10]')}
        />
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <Tag key={cat}>{cat}</Tag>
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl">{project.title}</h3>
            <p className="max-w-md text-sm text-fg-muted sm:text-base">{project.tagline}</p>
          </div>
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-acid group-hover:text-acid">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </motion.article>
    </Link>
  )
}
