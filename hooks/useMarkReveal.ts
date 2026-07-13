import { useEffect } from 'react'

/**
 * Reveals every `[data-mark]` element once it scrolls into view.
 *
 * `key` re-runs the sweep — pass the current route, since navigating swaps the
 * article for fresh, unobserved DOM while this hook's host stays mounted.
 */
export function useMarkReveal(key?: string) {
  useEffect(() => {
    const marks = document.querySelectorAll('[data-mark]')

    if (!('IntersectionObserver' in window)) {
      marks.forEach((m) => m.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.6 },
    )

    marks.forEach((m) => observer.observe(m))
    return () => observer.disconnect()
  }, [key])
}
