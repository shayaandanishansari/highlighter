import { Mark } from './Mark'

export function Founder() {
  return (
    <section>
      <p className="eyebrow">Who's behind this</p>
      <p>
        Started by one person. Previously ran FAST Times Karachi, a student media project.
        Highlighter picks up where that left off: bigger scope, same instinct,{' '}
        <Mark color="pink">point at the people actually doing something</Mark> and let others find
        them.
      </p>
      <span className="founder-note">started solo. still is, for now.</span>
    </section>
  )
}
