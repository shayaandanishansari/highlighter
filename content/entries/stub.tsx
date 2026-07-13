import { Mark } from '@/components/Mark'
import type { EntryMeta } from './types'

export const meta: EntryMeta = {
  slug: 'stub',
  title: 'Stub Entry',
  date: '2026-07-14',
  blurb: 'Placeholder for the first real blog entry.',
}

export default function Body() {
  return (
    <>
      <p>
        This is a <Mark color="yellow">placeholder</Mark>. Replace the body of{' '}
        <code>content/entries/stub.tsx</code>, or delete it and add your own file alongside it.
      </p>
      <p>
        Entries are ordinary prose. The <Mark color="pink">Mark</Mark> component still works here,
        so highlights reveal on scroll exactly as they do on the landing page.
      </p>
    </>
  )
}
