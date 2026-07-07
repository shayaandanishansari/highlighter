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
            <Mark color="pink">200+</Mark> Instagram
          </span>
          <span>
            <Mark color="blue">80+</Mark> LinkedIn
          </span>
          <span className="growing">
            <span className="dot" aria-hidden="true" />
            Growing!
          </span>
        </div>
      </div>
      <p className="tagline">
        A place to put your <Mark color="yellow">thinking</Mark> and your{' '}
        <Mark color="pink">work</Mark> out in public, so the right people can{' '}
        <Mark color="green">find you</Mark>.
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
