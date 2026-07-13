import type { ComponentType } from 'react'

/** A blog entry — a page that is not the landing page. */
export type EntryMeta = {
  slug: string
  /** Shown on the timeline and as the page <h1>. Keep it short; the rail is narrow. */
  title: string
  /** ISO yyyy-mm-dd. Sorts the timeline, newest first. */
  date: string
  /** One line. Used for <meta description>. */
  blurb: string
}

export type Entry = EntryMeta & { Body: ComponentType }

/**
 * A stop on the timeline. The landing page is one of these too, so items are
 * keyed by href rather than slug. Plain data — safe to hand to client components.
 */
export type TimelineItem = {
  href: string
  title: string
  date: string
}
