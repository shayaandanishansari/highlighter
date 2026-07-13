'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, type ReactNode } from 'react'
import type { TimelineItem } from '@/content/entries/types'
import { useCurrentEntry } from '@/hooks/useCurrentEntry'

/** How far a finger must travel horizontally before it counts as a swipe. */
const SWIPE_MIN_PX = 60
/** Reject drags that are mostly vertical — those are the user scrolling. */
const SWIPE_MAX_SLOPE = 0.7

/**
 * Wraps whatever page is showing. Owns every way of moving along the timeline
 * except the rail itself: horizontal swipe, left/right arrows, and the prev/next
 * links under an entry. Lives in the layout, so it survives navigation and the
 * page content is the only thing that re-renders.
 *
 * The landing page gets the movement but none of the furniture — no pager, no
 * back-link — so it reads exactly as it always has.
 */
export function EntryNav({ items, children }: { items: TimelineItem[]; children: ReactNode }) {
  const { index, current, newer, older } = useCurrentEntry(items)
  const router = useRouter()
  const pathname = usePathname()

  const isLanding = current.href === '/'

  const previousIndex = useRef(index)
  const direction = index > previousIndex.current ? 'older' : 'newer'

  // Only slide on an actual move along the timeline. A fresh page load — the
  // landing page especially — should render settled, exactly as it always has.
  const hasNavigated = useRef(false)
  if (index !== previousIndex.current) hasNavigated.current = true

  useEffect(() => {
    previousIndex.current = index
  }, [index])

  const go = (item: TimelineItem | undefined) => {
    if (item) router.push(item.href)
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return

      // Don't steal arrows from a field, or from the rail's own scrolling.
      const target = event.target as HTMLElement | null
      if (target?.closest('input, textarea, select, [contenteditable="true"], .rail')) return

      if (event.key === 'ArrowLeft') go(newer)
      else if (event.key === 'ArrowRight') go(older)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [newer, older])

  const touchStart = useRef<{ x: number; y: number } | null>(null)

  function onTouchStart(event: React.TouchEvent) {
    if (event.touches.length !== 1) {
      touchStart.current = null
      return
    }
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }
  }

  function onTouchEnd(event: React.TouchEvent) {
    const start = touchStart.current
    touchStart.current = null
    if (!start) return

    const dx = event.changedTouches[0].clientX - start.x
    const dy = event.changedTouches[0].clientY - start.y
    if (Math.abs(dx) < SWIPE_MIN_PX) return
    if (Math.abs(dy) > Math.abs(dx) * SWIPE_MAX_SLOPE) return

    // Swiping left drags the next (older) stop in from the right, and vice versa.
    go(dx < 0 ? older : newer)
  }

  return (
    <div className="entry-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div
        key={pathname}
        className="entry-slide"
        data-direction={direction}
        data-animate={hasNavigated.current ? 'true' : undefined}
      >
        {children}

        {!isLanding && (
          <>
            <nav className="entry-pager" aria-label="Previous and next entries">
              {newer ? (
                <Link className="pager-link pager-newer" href={newer.href} rel="prev">
                  <span className="pager-dir">&larr; Newer</span>
                  <span className="pager-title">{newer.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {older ? (
                <Link className="pager-link pager-older" href={older.href} rel="next">
                  <span className="pager-dir">Older &rarr;</span>
                  <span className="pager-title">{older.title}</span>
                </Link>
              ) : (
                <span />
              )}
            </nav>

            <p className="home-link">
              <Link href="/">Highlighter</Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
