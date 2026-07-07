import { useEffect } from 'react'

/** Reveals every `[data-mark]` element once it scrolls into view. */
export function useMarkReveal() {
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
  }, [])
}
