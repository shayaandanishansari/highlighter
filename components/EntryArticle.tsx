import { formatDate, type Entry } from '@/content/entries'

export function EntryArticle({ entry }: { entry: Entry }) {
  const { Body } = entry

  return (
    <article className="entry">
      <header className="entry-header">
        <time className="entry-date" dateTime={entry.date}>
          {formatDate(entry.date)}
        </time>
        <h1 className="entry-title">{entry.title}</h1>
      </header>
      <Body />
    </article>
  )
}
