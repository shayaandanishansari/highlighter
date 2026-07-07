import { Mark } from './Mark'

export function Showcase() {
  return (
    <section>
      <p className="eyebrow">Right now</p>
      <div className="note">
        <h3>FYP Showcase</h3>
        <p>
          Our first project. We turn final year projects into a{' '}
          <Mark color="yellow">clean, shareable write-up</Mark>: what you built, why you built it,
          who it's for, and how the journey went.
        </p>
        <p className="stat">Open to all universities. Graduated, current, or turned it into a startup, all welcome.</p>
        <div className="cta-row">
          <a className="btn" href="mailto:editor@highlighter.world">
            Submit your FYP
          </a>
          <a className="btn ghost" href="https://instagram.com/highlighter.world" target="_blank" rel="noopener">
            See the showcase
          </a>
        </div>
      </div>
    </section>
  )
}
