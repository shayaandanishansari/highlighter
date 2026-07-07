import { Mark } from './Mark'

export function Founder() {
  return (
    <section>
      <p className="eyebrow">Who's behind this</p>
      <p>
        Hi, I'm{' '}
        <a
          href="https://www.linkedin.com/in/shayaan-danish-ansari-43a852246/"
          target="_blank"
          rel="noopener"
        >
          Shayaan
        </a>
        , a recent computer science graduate from FAST NUCES Karachi. Highlighter is a{' '}
        <Mark color="pink">community project</Mark> I've started; emphasis on community project.
        I'm behind it for now, but it's only as strong as the people in it, and that means{' '}
        <Mark color="green">each and every one of you</Mark>.
      </p>
      <p>
        If this remotely interests you, I'd love to have you on the ship as it{' '}
        <Mark color="yellow">embarks on a new journey</Mark>.
      </p>
      <p>
        And as always, feel free to share your feedback.{' '}
        <Mark color="blue">Support and constructive criticism</Mark> are always welcomed and
        greatly appreciated.
      </p>
      <div className="cta-row">
        <a className="btn ghost" href="mailto:editor@highlighter.world">
          Feedback
        </a>
      </div>
    </section>
  )
}
