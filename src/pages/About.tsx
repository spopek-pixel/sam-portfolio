import { StoryIntro } from '@/components/about/StoryIntro'
import { InteractiveTimeline } from '@/components/about/InteractiveTimeline'
import { SkillsMarquee } from '@/components/about/SkillsMarquee'
import { PhotoCollage } from '@/components/about/PhotoCollage'
import { ResumeCTA } from '@/components/about/ResumeCTA'

export default function About() {
  return (
    <>
      <StoryIntro />
      <InteractiveTimeline />
      <SkillsMarquee />
      <PhotoCollage />
      <ResumeCTA />
    </>
  )
}
