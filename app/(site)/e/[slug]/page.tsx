import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EntryArticle } from '@/components/EntryArticle'
import { entries, getEntry } from '@/content/entries'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const entry = getEntry((await params).slug)
  if (!entry) return {}

  const url = `/e/${entry.slug}`
  return {
    title: `${entry.title} — Highlighter`,
    description: entry.blurb,
    alternates: { canonical: url },
    openGraph: {
      title: entry.title,
      description: entry.blurb,
      url,
      siteName: 'Highlighter',
      type: 'article',
      publishedTime: entry.date,
      images: [{ url: '/og-image.png', width: 500, height: 500 }],
    },
    twitter: {
      card: 'summary',
      title: entry.title,
      description: entry.blurb,
      images: ['/og-image.png'],
    },
  }
}

export default async function EntryPage({ params }: Params) {
  const entry = getEntry((await params).slug)
  if (!entry) notFound()

  return <EntryArticle entry={entry} />
}
