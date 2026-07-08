import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://highlighter.world'
const TITLE = 'Highlighter — the place to highlight your ideas, your work, and yourself'
const DESCRIPTION =
  "A platform where ideas are shared and projects get started. Post your thinking, show your work, and let the right people find you."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Highlighter',
    images: [{ url: '/og-image.png', width: 500, height: 500 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Highlighter',
  url: SITE_URL,
  description: DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: 'Shayaan',
    sameAs: ['https://www.linkedin.com/in/shayaan-danish-ansari-43a852246/'],
  },
  sameAs: [
    'https://instagram.com/highlighter.world',
    'https://linkedin.com/company/highlighter-world',
    'https://github.com/shayaandanishansari/highlighter',
  ],
  email: 'editor@highlighter.world',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Caveat:wght@600&family=IBM+Plex+Mono:wght@500;600&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
