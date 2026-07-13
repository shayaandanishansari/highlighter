'use client'

import Link from 'next/link'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { formatDate } from '@/content/entries/format'
import type { TimelineItem } from '@/content/entries/types'
import { useCurrentEntry } from '@/hooks/useCurrentEntry'

/** Must match the rail breakpoint in globals.css. */
const RAIL_QUERY = '(min-width: 1240px)'

/** Layout reads must happen before paint, but this component also renders on the server. */
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * The timeline. Newest first, so it reads top-down on the desktop rail and
 * left-to-right on the mobile strip; the landing page sits at the far end as the
 * oldest stop. Both layouts are the same markup — `globals.css` rotates the axis
 * at the rail breakpoint.
 */
export function Timeline({ items }: { items: TimelineItem[] }) {
  const { index } = useCurrentEntry(items)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const currentRef = useRef<HTMLLIElement>(null)
  const hasLaidOut = useRef(false)

  /**
   * The edge fade only earns its keep when there's something off-screen to fade
   * into. On a list that fits, masking would just wash out the neighbouring
   * entries — the very things the rail exists to show.
   */
  const [overflows, setOverflows] = useState(false)

  const layout = useCallback((animate: boolean) => {
    const scroller = scrollerRef.current
    const list = listRef.current
    const current = currentRef.current
    if (!scroller || !list || !current) return

    const first = list.firstElementChild as HTMLElement | null
    const last = list.lastElementChild as HTMLElement | null

    /**
     * Pad the list by half a rail minus half an entry, top and bottom. That is
     * exactly enough for the first and last entries to reach the centre and no
     * more, so the scroll range runs from first-centred to last-centred with no
     * dead space at either end. Measured rather than hard-coded because entry
     * titles wrap to two lines at unpredictable places.
     *
     * The horizontal strip gets the same effect from CSS — its items are a fixed
     * 13rem, so `calc(50% - 6.5rem)` is already exact.
     */
    if (window.matchMedia(RAIL_QUERY).matches && first && last) {
      list.style.paddingTop = `${Math.max(0, (scroller.clientHeight - first.offsetHeight) / 2)}px`
      list.style.paddingBottom = `${Math.max(0, (scroller.clientHeight - last.offsetHeight) / 2)}px`
    } else {
      list.style.paddingTop = ''
      list.style.paddingBottom = ''
    }

    setOverflows(
      scroller.scrollHeight > scroller.clientHeight + 1 ||
        scroller.scrollWidth > scroller.clientWidth + 1,
    )

    // Park the current entry in the middle. `offsetTop`/`offsetLeft` are relative
    // to the list, which is why the list is `position: relative` — anchoring them
    // to the rail instead would offset every measurement by the rail's padding.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scroller.scrollTo({
      top: current.offsetTop - (scroller.clientHeight - current.offsetHeight) / 2,
      left: current.offsetLeft - (scroller.clientWidth - current.offsetWidth) / 2,
      behavior: animate && !reduced ? 'smooth' : 'auto',
    })
  }, [])

  // The first paint should already look settled — only later moves animate.
  useIsomorphicLayoutEffect(() => {
    layout(hasLaidOut.current)
    hasLaidOut.current = true
  }, [index, items.length, layout])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Only the scroller is observed: `layout` writes padding onto the list, so
    // observing the list too would feed its own writes back in as resize events.
    const observer = new ResizeObserver(() => layout(false))
    observer.observe(scroller)

    // Webfonts land after first paint and re-wrap the titles.
    document.fonts?.ready.then(() => layout(false))

    return () => observer.disconnect()
  }, [layout])

  return (
    <nav className="rail" aria-label="Timeline">
      <div className="rail-scroll" ref={scrollerRef} data-overflows={overflows ? 'true' : undefined}>
        <ol className="rail-list" ref={listRef}>
          {items.map((item, i) => {
            const isCurrent = i === index
            return (
              <li
                key={item.href}
                className={`rail-item${isCurrent ? ' is-current' : ''}`}
                ref={isCurrent ? currentRef : undefined}
              >
                <Link
                  className="rail-link"
                  href={item.href}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  <span className="rail-node" aria-hidden="true" />
                  <time className="rail-date" dateTime={item.date}>
                    {formatDate(item.date)}
                  </time>
                  <span className="rail-title">{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
