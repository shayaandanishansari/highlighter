import { Mark } from './Mark'

export function IdeaSection() {
  return (
    <section>
      <p className="eyebrow">The idea</p>
      <h2>
        Most people <Mark color="pink">never start</Mark>.
      </h2>
      <p className="lede">
        Not because they lack ideas. Most people have some sense of what's broken in the world and
        some sense of what they'd do about it, given the chance.
      </p>
      <p>
        What's usually missing isn't conviction. It's a place to say it{' '}
        <Mark color="yellow">out loud</Mark>, and a way to find the other person who's quietly
        thinking the same thing. Highlighter is that place: post your ideas, show your work, and
        let the people worth working with actually find you.
      </p>
    </section>
  )
}
