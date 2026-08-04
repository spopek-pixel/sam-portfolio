import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { ProjectVisual } from '@/components/ui/ProjectVisual'
import { PixelSprite } from '@/components/ui/PixelSprite'
import { Tag } from '@/components/ui/Tag'
import { usePrefersReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'
import { projectPixelIcons } from '@/data/projectPixelIcons'

interface ProjectCardProps {
  project: Project
  index: number
  size?: 'large' | 'regular'
}

export function ProjectCard({ project, index, size = 'regular' }: ProjectCardProps) {
  const reducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const pixelIcon = projectPixelIcons[project.slug]
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
    <Link to={`/work/${project.slug}`} aria-label={`View ${project.title} case study`} className="block h-full">
      <motion.article
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX: springRotateX, rotateY: springRotateY, y: lift, perspective: 1000 }}
        className="group relative flex h-full flex-col gap-5 rounded-3xl border border-line bg-surface/60 p-5 transition-colors hover:border-violet-tint/60"
      >
        <div className="relative shrink-0">
          <ProjectVisual
            image={project.images[0]}
            title={project.title}
            accent={project.accent}
            className={cn('aspect-[4/3] w-full', size === 'large' && 'aspect-[16/10]')}
          />
          {pixelIcon && (
            <div
              aria-hidden
              className="absolute right-3 top-3 origin-top-right scale-50 rounded-lg border border-line bg-ink/80 p-1.5 opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
            >
              <PixelSprite grid={pixelIcon.grid} palette={{ '#': pixelIcon.color }} className="h-6 w-6" />
            </div>
          )}
        </div>
        <div className="flex flex-1 items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <Tag key={cat}>{cat}</Tag>
              ))}
            </div>
            <h3 className="text-2xl sm:text-3xl">{project.title}</h3>
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">{project.role}</span>
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
