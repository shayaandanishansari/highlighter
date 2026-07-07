import { Hero } from './components/Hero'
import { IdeaSection } from './components/IdeaSection'
import { Showcase } from './components/Showcase'
import { WhereThisLives } from './components/WhereThisLives'
import { Founder } from './components/Founder'
import { Footer } from './components/Footer'
import { useMarkReveal } from './hooks/useMarkReveal'

function App() {
  useMarkReveal()

  return (
    <div className="page">
      <Hero />
      <Showcase />
      <IdeaSection />
      <WhereThisLives />
      <Founder />
      <Footer />
    </div>
  )
}

export default App
