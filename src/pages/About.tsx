import { StoryIntro } from '@/components/about/StoryIntro'
import { InteractiveTimeline } from '@/components/about/InteractiveTimeline'
import { AlwaysLearning } from '@/components/about/AlwaysLearning'
import { SkillsMarquee } from '@/components/about/SkillsMarquee'
import { WeaponsOfChoice } from '@/components/about/WeaponsOfChoice'
import { PhotoCollage } from '@/components/about/PhotoCollage'
import { FavoriteGames } from '@/components/about/FavoriteGames'
import { ResumeCTA } from '@/components/about/ResumeCTA'
import { PaintDivider } from '@/components/ui/PaintDivider'

export default function About() {
  return (
    <>
      <StoryIntro />
      <InteractiveTimeline />
      <AlwaysLearning />
      <SkillsMarquee />
      <PaintDivider align="left" />
      <PhotoCollage />
      <FavoriteGames />
      <PaintDivider align="right" />
      <WeaponsOfChoice />
      <ResumeCTA />
    </>
  )
}
