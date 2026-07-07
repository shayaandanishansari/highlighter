import { Mark } from './Mark'

export function Showcase() {
  return (
    <section>
      <p className="eyebrow">Right now</p>
      <div className="note">
        <h3>FYP Showcase</h3>
        <p>
          Our first project. We turn final year projects into a{' '}
          <Mark color="yellow">clean, shareable write-up</Mark>: what you built, why you built it,
          who it's for, and how the journey went.
        </p>
        <p>
          Open to <Mark color="pink">all universities</Mark>. Graduated, current, or{' '}
          <Mark color="green">turned it into a startup</Mark>, all welcome.
        </p>
        <p>
          <strong>We need you!!!</strong>
        </p>
        <div className="cta-row">
          <a className="btn" href="mailto:editor@highlighter.world">
            Submit your FYP
          </a>
          <a className="btn ghost" href="https://instagram.com/highlighter.world" target="_blank" rel="noopener">
            See the showcase
          </a>
        </div>
        <div className="showcase-gallery">
          <figure>
            <a href="https://www.instagram.com/highlighter.world/p/DacY_ksjEGM/" target="_blank" rel="noopener">
              <img src="/showcase/sairaab.jpg" alt="Sairaab — urban plantation platform, FYP showcase cover" />
              <figcaption>
                Sairaab — <Mark color="green">link</Mark>
              </figcaption>
            </a>
          </figure>
          <figure>
            <a href="https://www.instagram.com/highlighter.world/p/DaQhwqdjGJy/" target="_blank" rel="noopener">
              <img src="/showcase/stu.jpg" alt="Stu — personal food concierge, FYP showcase cover" />
              <figcaption>
                Stu — <Mark color="yellow">link</Mark>
              </figcaption>
            </a>
          </figure>
          <figure>
            <a href="https://www.instagram.com/highlighter.world/p/DaUlCgUDBwk/" target="_blank" rel="noopener">
              <img src="/showcase/offlink.jpg" alt="Offlink — offline P2P payments, FYP showcase cover" />
              <figcaption>
                Offlink — <Mark color="blue">link</Mark>
              </figcaption>
            </a>
          </figure>
        </div>
      </div>
    </section>
  )
}
