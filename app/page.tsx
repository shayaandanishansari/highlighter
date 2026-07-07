import { Hero } from '@/components/Hero'
import { IdeaSection } from '@/components/IdeaSection'
import { Showcase } from '@/components/Showcase'
import { WhereThisLives } from '@/components/WhereThisLives'
import { Founder } from '@/components/Founder'
import { Footer } from '@/components/Footer'
import { MarkReveal } from '@/components/MarkReveal'

export default function Home() {
  return (
    <div className="page">
      <MarkReveal />
      <Hero />
      <Showcase />
      <IdeaSection />
      <WhereThisLives />
      <Founder />
      <Footer />
    </div>
  )
}
