import { Navigate, useParams } from 'react-router-dom'
import { getAdjacentProject, getProject } from '@/data/projects'
import { CaseStudyHero } from '@/components/work/CaseStudyHero'
import { ProblemSection } from '@/components/work/ProblemSection'
import { ProcessTimeline } from '@/components/work/ProcessTimeline'
import { KeyDecisions } from '@/components/work/KeyDecisions'
import { OutcomeSection } from '@/components/work/OutcomeSection'
import { ReflectionSection } from '@/components/work/ReflectionSection'
import { MockupGallery } from '@/components/work/MockupGallery'
import { StakeholderInterviews } from '@/components/work/StakeholderInterviews'
import { WireframeExploration } from '@/components/work/WireframeExploration'
import { SketchGallery } from '@/components/work/SketchGallery'
import { UserStoriesSection } from '@/components/work/UserStoriesSection'
import { VisualGallery } from '@/components/work/VisualGallery'
import { NextProjectNav } from '@/components/work/NextProjectNav'
import { Deliverables } from '@/components/work/Deliverables'
import { ProductStrategy } from '@/components/housingkind/ProductStrategy'
import { DesignProcessFlow } from '@/components/housingkind/DesignProcessFlow'
import { BuildingWithAI } from '@/components/housingkind/BuildingWithAI'
import { KeyFeatures } from '@/components/housingkind/KeyFeatures'
import { OriginStory } from '@/components/housingkind/OriginStory'
import { ResearchMethods } from '@/components/housingkind/ResearchMethods'
import { UserQuotes } from '@/components/housingkind/UserQuotes'
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
import { DragonflyTheme } from '@/components/dragonfly/DragonflyTheme'
import { DragonflyHero } from '@/components/dragonfly/DragonflyHero'
import { Overview } from '@/components/dragonfly/Overview'
import { UserInterviews } from '@/components/dragonfly/UserInterviews'
import { Challenge } from '@/components/dragonfly/Challenge'
import { KeyInsights } from '@/components/dragonfly/KeyInsights'
import { DesignPrinciplesOrbit } from '@/components/dragonfly/DesignPrinciplesOrbit'
import { IdeationProcess } from '@/components/dragonfly/IdeationProcess'
import { FinalExperience } from '@/components/dragonfly/FinalExperience'
import { DesignSystemShowcase } from '@/components/dragonfly/DesignSystemShowcase'
import { PrototypeShowcase } from '@/components/dragonfly/PrototypeShowcase'
import { ImpactSection } from '@/components/dragonfly/ImpactSection'
import { DragonflyReflection } from '@/components/dragonfly/DragonflyReflection'
import { OutfrontHero } from '@/components/outfront/OutfrontHero'
import { OutfrontOverview } from '@/components/outfront/OutfrontOverview'
import { ClientCaseStudies } from '@/components/outfront/ClientCaseStudies'
import { OutfrontGallery } from '@/components/outfront/OutfrontGallery'
import { OutfrontTestimonials } from '@/components/outfront/OutfrontTestimonials'
import { OutfrontKeyTakeaways } from '@/components/outfront/OutfrontKeyTakeaways'
import { TekloTheme } from '@/components/teklo/TekloTheme'
import { TekloHero } from '@/components/teklo/TekloHero'
import { TekloOverview } from '@/components/teklo/TekloOverview'
import { TheChallenge } from '@/components/teklo/TheChallenge'
import { UnderstandingUsers } from '@/components/teklo/UnderstandingUsers'
import { ResearchDiscovery } from '@/components/teklo/ResearchDiscovery'
import { UserFlowDiagram } from '@/components/teklo/UserFlowDiagram'
import { Ideation } from '@/components/teklo/Ideation'
import { Wireframing } from '@/components/teklo/Wireframing'
import { KeyFeatures as TekloKeyFeatures } from '@/components/teklo/KeyFeatures'
import { PrototypeShowcase as TekloPrototypeShowcase } from '@/components/teklo/PrototypeShowcase'
import { TekloReflection } from '@/components/teklo/TekloReflection'
import { AivyTheme } from '@/components/aivy/AivyTheme'
import { AivyHero } from '@/components/aivy/AivyHero'
import { AivyBrief } from '@/components/aivy/AivyBrief'
import { AivyQuote } from '@/components/aivy/AivyQuote'
import { AivyConcept } from '@/components/aivy/AivyConcept'
import { MirrorBoard } from '@/components/aivy/MirrorBoard'
import { AdvisorFeedback } from '@/components/aivy/AdvisorFeedback'
import { AivyEcosystem } from '@/components/aivy/AivyEcosystem'
import { AivySitePreview } from '@/components/aivy/AivySitePreview'
import { AivyInstallation } from '@/components/aivy/AivyInstallation'
import { AivyStats } from '@/components/aivy/AivyStats'

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
        <UserQuotes />
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
        {project.deliverables && <Deliverables items={project.deliverables} />}
        <HousingkindReflection />
        <NextProjectNav project={nextProject} />
      </div>
    )
  }

  if (project.slug === 'dragonfly-yoga') {
    return (
      <div>
        <DragonflyTheme>
          <DragonflyHero project={project} />
          <Overview />
          <UserInterviews />
          <Challenge />
          <KeyInsights />
          <DesignPrinciplesOrbit />
          <DesignSystemShowcase />
          <IdeationProcess />
          <FinalExperience />
          <PrototypeShowcase />
          <ImpactSection />
          <DragonflyReflection />
        </DragonflyTheme>
        <NextProjectNav project={nextProject} />
      </div>
    )
  }

  if (project.slug === 'teklo') {
    return (
      <div>
        <TekloTheme>
          <TekloHero project={project} />
          <TekloOverview />
          <TheChallenge />
          <UnderstandingUsers />
          <ResearchDiscovery />
          <UserFlowDiagram />
          <Ideation />
          <Wireframing />
          <TekloKeyFeatures />
          <TekloPrototypeShowcase />
          <TekloReflection />
        </TekloTheme>
        <NextProjectNav project={nextProject} />
      </div>
    )
  }

  if (project.slug === 'aivy') {
    return (
      <div>
        <AivyTheme>
          <AivyHero project={project} />
          <AivyBrief />
          <AivyQuote />
          <AivyConcept />
          <MirrorBoard />
          <AdvisorFeedback />
          <AivyEcosystem />
          <AivySitePreview />
          <AivyInstallation />
          <AivyStats />
          <ProcessTimeline steps={project.process} />
          <OutcomeSection outcome={project.outcome} />
          <ReflectionSection reflection={project.reflection} />
        </AivyTheme>
        <NextProjectNav project={nextProject} />
      </div>
    )
  }

  if (project.slug === 'outfront-media-graphics') {
    return (
      <div>
        <OutfrontHero project={project} />
        <OutfrontOverview project={project} />
        <ClientCaseStudies />
        <OutfrontGallery />
        <OutfrontTestimonials />
        <OutfrontKeyTakeaways />
        <NextProjectNav project={nextProject} />
      </div>
    )
  }

  if (project.slug === 'myoutfront') {
    return (
      <div>
        <CaseStudyHero project={project} />
        <ProblemSection problem={project.problem} research={project.research} />
        {project.interviews && <StakeholderInterviews interviews={project.interviews} />}
        {project.userStories && <UserStoriesSection data={project.userStories} />}
        {project.lowFidelity && <SketchGallery data={project.lowFidelity} />}
        {project.wireframes && <WireframeExploration data={project.wireframes} />}
        <KeyDecisions decisions={project.decisions} />
        {project.deliverables && <Deliverables items={project.deliverables} />}
        <MockupGallery images={project.images.slice(1)} title={project.title} />
        <OutcomeSection outcome={project.outcome} />
        <ReflectionSection reflection={project.reflection} />
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
