import { Mark } from './Mark'
import { InstagramIcon } from './icons/InstagramIcon'
import { LinkedInIcon } from './icons/LinkedInIcon'

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-title-row">
        <h1 className="wordmark">
          <span>Highlighter</span>
        </h1>
        <div className="badge">
          <span>
            <span className="badge-number"><Mark color="pink">200+</Mark></span>{' '}
            <span className="badge-label">Instagram</span>
          </span>
          <span>
            <span className="badge-number"><Mark color="blue">80+</Mark></span>{' '}
            <span className="badge-label">LinkedIn</span>
          </span>
          <span className="growing">
            <span className="dot" aria-hidden="true" />
            Growing!
          </span>
        </div>
      </div>
      <p className="tagline">
        The place to highlight your{' '}
        <Mark color="yellow">
          <strong>ideas</strong>
        </Mark>
        , your{' '}
        <Mark color="pink">
          <strong>work</strong>
        </Mark>
        , and{' '}
        <Mark color="green">
          <strong>yourself</strong>
        </Mark>
        ! So{' '}
        <Mark color="blue">
          <strong>the right people</strong>
        </Mark>{' '}
        <strong>find</strong> you, and you <strong>find</strong>{' '}
        <Mark color="blue">
          <strong>the right people</strong>
        </Mark>
        !
      </p>
      <div className="cta-row">
        <a className="btn" href="https://instagram.com/highlighter.world" target="_blank" rel="noopener">
          Follow on Instagram
          <InstagramIcon />
        </a>
        <a className="btn ghost" href="https://linkedin.com/company/highlighter-world" target="_blank" rel="noopener">
          Follow on LinkedIn
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}
