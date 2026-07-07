import type { ReactNode } from 'react'

type MarkColor = 'yellow' | 'pink' | 'green' | 'blue'

export function Mark({ color, children }: { color: MarkColor; children: ReactNode }) {
  return (
    <span className={`mark mark-${color}`} data-mark>
      {children}
    </span>
  )
}
