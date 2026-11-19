import './hero-section.css'
import useScrollReveal from '../hooks/useScrollReveal.js'

function HeroSection() {
  const identityRevealRef = useScrollReveal()
  const introRevealRef = useScrollReveal()

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-section__layout">
        <div
          className="hero-section__identity scroll-reveal"
          ref={identityRevealRef}
        >
          <p className="hero-section__eyebrow">Computer Science Engineering Student</p>
          <h1 className="hero-section__name" id="hero-title">
            Eraiyanbu
          </h1>
        </div>
        <div className="hero-section__intro scroll-reveal" ref={introRevealRef}>
          <p className="hero-section__role">Aspiring Python Full Stack Developer</p>
          <p className="hero-section__description">
            I&apos;m a Computer Science Engineering student focused on building
            practical web applications and developing my skills in Python,
            FastAPI, SQL and React.
          </p>
          <div className="hero-section__actions">
            <a className="button button--primary" href="#projects">
              View My Work
            </a>
            <a className="button button--text" href="#contact">
              Contact Me <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection