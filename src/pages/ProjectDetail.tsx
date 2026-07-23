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
import { Deliverables } from '@/components/work/Deliverables'
import { ProductStrategy } from '@/components/housingkind/ProductStrategy'
import { DesignProcessFlow } from '@/components/housingkind/DesignProcessFlow'
import { BuildingWithAI } from '@/components/housingkind/BuildingWithAI'
import { KeyFeatures } from '@/components/housingkind/KeyFeatures'
import { OriginStory } from '@/components/housingkind/OriginStory'
import { ResearchMethods } from '@/components/housingkind/ResearchMethods'
import { FieldResearch } from '@/components/housingkind/FieldResearch'
import { Personas } from '@/components/housingkind/Personas'
import { SystemsMap } from '@/components/housingkind/SystemsMap'
import { BrandShowcase } from '@/components/housingkind/BrandShowcase'
import { AIProcessSection } from '@/components/housingkind/AIProcessSection'
import { BuildingItSection } from '@/components/housingkind/BuildingItSection'
import { DecisionNarrative } from '@/components/housingkind/DecisionNarrative'
import { TestingFeedback } from '@/components/housingkind/TestingFeedback'
import { Recognition } from '@/components/housingkind/Recognition'
import { ProjectOutcomes } from '@/components/housingkind/ProjectOutcomes'
import { HousingkindReflection } from '@/components/housingkind/HousingkindReflection'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  const nextProject = getAdjacentProject(project.slug)

  if (project.slug === 'housingkind') {
    return (
      <div>
        <CaseStudyHero project={project} />
        <ProductStrategy />
        <DesignProcessFlow />
        <OriginStory />
        <ResearchMethods />
        <FieldResearch />
        <Personas />
        <SystemsMap />
        <BrandShowcase />
        <AIProcessSection />
        <BuildingItSection />
        <BuildingWithAI />
        <KeyFeatures />
        <DecisionNarrative />
        <TestingFeedback />
        <Recognition />
        <ProjectOutcomes />
        <HousingkindReflection />
        <NextProjectNav project={nextProject} />
      </div>
    )
  }

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
          {project.deliverables && <Deliverables items={project.deliverables} />}
          <MockupGallery images={project.images} title={project.title} />
          <OutcomeSection outcome={project.outcome} />
        </>
      )}

      <ReflectionSection reflection={project.reflection} />
      <NextProjectNav project={nextProject} />
    </div>
  )
}
