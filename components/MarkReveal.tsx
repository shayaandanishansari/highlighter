'use client'

import { usePathname } from 'next/navigation'
import { useMarkReveal } from '@/hooks/useMarkReveal'

export function MarkReveal() {
  useMarkReveal(usePathname())
  return null
}
