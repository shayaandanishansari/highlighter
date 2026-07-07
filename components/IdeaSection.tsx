import { Mark } from './Mark'

export function IdeaSection() {
  return (
    <section>
      <p className="eyebrow">The idea</p>
      <div className="idea-intro">
        <h2>
          Good ideas get <Mark color="pink">slept on</Mark>.
        </h2>
        <h2>Great work misses its audience.</h2>
        <h2>Positive change gets delayed and delayed and ...</h2>
      </div>
      <p>
        Being a young person seeing the world around you, with its{' '}
        <Mark color="yellow">beauty and its ugliness</Mark>, I've always wanted to do something
        about the ugliness. <Mark color="pink">Broken systems, bad food, poor infrastructure</Mark>
        , inefficient use of resources. Don't get me wrong, there's plenty of good out there too,
        plenty of <Mark color="blue">blue skies</Mark>, and I love blue skies.
      </p>
      <p>
        That's what I want to fight for: <Mark color="green">the good, and the better</Mark>. And
        there are so many ways I can, we can. So many{' '}
        <Mark color="yellow">ideas that can be acted on</Mark>, so much{' '}
        <Mark color="pink">good work that can be done</Mark> to make things better.
      </p>
      <p>
        But I have to be honest. My incentive structure, and that of many people around me, hasn't
        made it make sense to work on these "ideas" and do the{' '}
        <Mark color="blue">necessary work</Mark> to make them real. To get by in the world you
        don't need to change much of anything, and that's{' '}
        <Mark color="yellow">the path of least resistance</Mark>, so that's the direction the
        water tends to flow.
      </p>
      <p>
        <Mark color="green">Highlighter aims to change that</Mark>. A platform where ideas are
        shared and projects get started. Write about{' '}
        <Mark color="blue">something amazing that's worth protecting</Mark> and being happy about,
        or <Mark color="pink">something broken that someone else might have a fix for</Mark>.
      </p>
      <p>
        And most importantly, <Mark color="blue">post a project, and collaborators find you</Mark>
        . That's how the incentive structure for positive change can actually happen, and I hope
        very much that it does. If this remotely seems like something you'd find interesting,
        please <Mark color="yellow">follow the journey</Mark>.
      </p>
    </section>
  )
}
