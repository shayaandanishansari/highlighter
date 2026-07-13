import { EntryNav } from '@/components/EntryNav'
import { Footer } from '@/components/Footer'
import { MarkReveal } from '@/components/MarkReveal'
import { Timeline } from '@/components/Timeline'
import { timeline } from '@/content/entries'

/**
 * The persistent shell — the same wrapper the landing page always had, plus the
 * timeline. Next keeps this mounted while only `children` swaps, which is what
 * makes route-to-route navigation feel like one page.
 *
 * There is deliberately no title block here. The landing page renders its own
 * Hero; entries render none, which is the whole point.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MarkReveal />
      <Timeline items={timeline} />
      <div className="page">
        <main id="main-content">
          <EntryNav items={timeline}>{children}</EntryNav>
        </main>
        <Footer />
      </div>
    </>
  )
}
