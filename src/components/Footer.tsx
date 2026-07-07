import { InstagramIcon } from './icons/InstagramIcon'
import { LinkedInIcon } from './icons/LinkedInIcon'

export function Footer() {
  return (
    <footer>
      <div className="cta-row">
        <a className="btn" href="https://instagram.com/highlighter.world" target="_blank" rel="noopener">
          Instagram
          <InstagramIcon />
        </a>
        <a className="btn ghost" href="https://linkedin.com/company/highlighter-world" target="_blank" rel="noopener">
          LinkedIn
          <LinkedInIcon />
        </a>
        <a className="btn ghost" href="mailto:editor@highlighter.world">
          Email
        </a>
      </div>
      <p className="fine">
        Highlighter is free. Always will be. If anyone ever asks you for money in our name, that's
        not us, tell us at <a href="mailto:editor@highlighter.world">editor@highlighter.world</a>.
      </p>
    </footer>
  )
}
