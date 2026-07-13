'use client'

import { usePathname } from 'next/navigation'
import type { TimelineItem } from '@/content/entries/types'

/**
 * Which stop on the timeline is on screen. Items run newest-first, so "newer"
 * walks the index down and "older" walks it up. The landing page is the oldest
 * item, so it's last.
 */
export function useCurrentEntry(items: TimelineItem[]) {
  const pathname = usePathname()
  const found = items.findIndex((item) => item.href === pathname)
  const index = found === -1 ? 0 : found

  return {
    index,
    current: items[index],
    newer: index > 0 ? items[index - 1] : undefined,
    older: index < items.length - 1 ? items[index + 1] : undefined,
  }
}
