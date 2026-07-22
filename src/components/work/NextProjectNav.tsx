import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { Reveal } from '@/components/ui/Reveal'

export function NextProjectNav({ project }: { project: Project }) {
  return (
    <section className="px-6 pb-24 pt-4 sm:px-10">
      <Reveal>
        <Link
          to={`/work/${project.slug}`}
          className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-line bg-surface/60 p-10 transition-colors hover:border-violet-tint/60 sm:p-16"
        >
          <span className="kicker">Next project</span>
          <span className="flex items-center gap-4 text-4xl sm:text-6xl">
            {project.title}
            <ArrowUpRight
              size={40}
              className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
            />
          </span>
        </Link>
      </Reveal>
    </section>
  )
}
