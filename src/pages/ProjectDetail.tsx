import { Navigate, useParams } from 'react-router-dom'
import { getAdjacentProject, getProject } from '@/data/projects'
import { CaseStudyHero } from '@/components/work/CaseStudyHero'
import { ProblemSection } from '@/components/work/ProblemSection'
import { ProcessTimeline } from '@/components/work/ProcessTimeline'
import { KeyDecisions } from '@/components/work/KeyDecisions'
import { OutcomeSection } from '@/components/work/OutcomeSection'
import { ReflectionSection } from '@/components/work/ReflectionSection'
import { MockupGallery } from '@/components/work/MockupGallery'
import { VisualGallery } from '@/components/work/VisualGallery'
import { NextProjectNav } from '@/components/work/NextProjectNav'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  const nextProject = getAdjacentProject(project.slug)

  return (
    <div>
      <CaseStudyHero project={project} />

      {project.variant === 'gallery' ? (
        <VisualGallery project={project} />
      ) : (
        <>
          <ProblemSection problem={project.problem} research={project.research} />
          <ProcessTimeline steps={project.process} />
          <KeyDecisions decisions={project.decisions} />
          <MockupGallery images={project.images} title={project.title} />
          <OutcomeSection outcome={project.outcome} />
        </>
      )}

      <ReflectionSection reflection={project.reflection} />
      <NextProjectNav project={nextProject} />
    </div>
  )
}
