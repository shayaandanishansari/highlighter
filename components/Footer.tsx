'use client'

import { useState } from 'react'
import { InstagramIcon } from './icons/InstagramIcon'
import { LinkedInIcon } from './icons/LinkedInIcon'
import { GitHubIcon } from './icons/GitHubIcon'
import { CopyIcon } from './icons/CopyIcon'

const EMAIL = 'editor@highlighter.world'

export function Footer() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

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
        <a
          className="btn ghost"
          href="https://github.com/shayaandanishansari/highlighter"
          target="_blank"
          rel="noopener"
        >
          GitHub
          <GitHubIcon />
        </a>
      </div>
      <div className="email-line">
        <span className="email-text">{EMAIL}</span>
        <button type="button" className="copy-btn" onClick={handleCopy} aria-label="Copy email address">
          <CopyIcon />
        </button>
        {copied && <span className="copied-badge">Copied!</span>}
        <span className="sr-only" role="status">
          {copied ? 'Copied to clipboard' : ''}
        </span>
      </div>
    </footer>
  )
}
