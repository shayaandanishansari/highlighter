import type { ReactNode } from 'react'
import { Mark } from './Mark'

const FLOW: { tag: string; title: string; body: ReactNode }[] = [
  {
    tag: 'Share',
    title: 'Your thinking',
    body: (
      <>
        Ideas, quotes, takes on what's actually worth building. Say the thing{' '}
        <Mark color="yellow">before you've built it</Mark>, not just after.
      </>
    ),
  },
  {
    tag: 'Show',
    title: 'Your work',
    body: (
      <>
        Projects, FYPs, startups. What you built, why, and what it's for, in a format people will{' '}
        <Mark color="green">actually read</Mark>.
      </>
    ),
  },
  {
    tag: 'Find',
    title: 'Your people',
    body: (
      <>
        Collaborators and co-founders who <Mark color="blue">care about the same problem</Mark>,
        not just people scrolling past.
      </>
    ),
  },
]

export function HowItWorks() {
  return (
    <section>
      <p className="eyebrow">How it works</p>
      <h2>The Trinity</h2>
      <div className="flow">
        {FLOW.map((item) => (
          <div className="flow-card" key={item.tag}>
            <span className="flow-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
