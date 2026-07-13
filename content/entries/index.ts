import type { Entry, TimelineItem } from './types'

import Stub, { meta as stub } from './stub'

/**
 * The landing page. It is not a blog entry — it has no date header and no body
 * file, it's just `app/(site)/page.tsx` — but it is the first stop on the
 * timeline, so it needs a title and a date like everything else.
 */
export const LANDING: TimelineItem = {
  href: '/',
  title: 'Highlighter',
  date: '2026-07-08',
}

/**
 * Add an entry: create `content/entries/<slug>.tsx` exporting `meta` and a
 * default body, then register it below. Order here doesn't matter — everything is
 * sorted by date, newest first, which is the order the timeline reads top-down.
 */
const REGISTRY: Entry[] = [{ ...stub, Body: Stub }]

const byNewest = (a: { date: string }, b: { date: string }) => b.date.localeCompare(a.date)

export const entries: Entry[] = [...REGISTRY].sort(byNewest)

/**
 * Everything the timeline shows: the entries plus the landing page, newest first.
 * The landing is the oldest, so it sits at the bottom of the rail and new entries
 * stack above it.
 *
 * This — not `entries` — is what crosses into client components. Handing them the
 * registry would pull every entry's prose into the browser bundle.
 */
export const timeline: TimelineItem[] = [
  ...entries.map(({ slug, title, date }) => ({ href: `/e/${slug}`, title, date })),
  LANDING,
].sort(byNewest)

export function getEntry(slug: string): Entry | undefined {
  return entries.find((e) => e.slug === slug)
}

export { formatDate } from './format'
export type { Entry, EntryMeta, TimelineItem } from './types'
