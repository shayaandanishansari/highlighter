import { Hero } from '@/components/Hero'
import { Showcase } from '@/components/Showcase'
import { IdeaSection } from '@/components/IdeaSection'
import { WhereThisLives } from '@/components/WhereThisLives'
import { Founder } from '@/components/Founder'

/** The original landing page, unchanged. It is the first stop on the timeline;
 *  the shell (page wrapper, footer, timeline) lives in the layout. */
export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <IdeaSection />
      <WhereThisLives />
      <Founder />
    </>
  )
}
