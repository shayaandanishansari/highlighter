import { Mark } from './Mark'

export function WhereThisLives() {
  return (
    <section>
      <p className="eyebrow">Where this lives</p>
      <p>
        For now, Highlighter is on <Mark color="pink">Instagram and LinkedIn</Mark>, and it's
        focused on <Mark color="yellow">Pakistan initially</Mark>. A platform website is{' '}
        <Mark color="blue">coming</Mark>. Same idea. More room to build in.
      </p>
    </section>
  )
}
