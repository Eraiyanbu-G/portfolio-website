import './about-section.css'
import useScrollReveal from '../hooks/useScrollReveal.js'

function AboutSection() {
  const revealRef = useScrollReveal()

  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container about-section__layout scroll-reveal" ref={revealRef}>
        <div>
          <p className="section-kicker">A little about me</p>
          <h2 id="about-title">About</h2>
        </div>
        <p className="about-section__copy">
          I&apos;m a Computer Science Engineering student interested in practical
          software development. I&apos;m learning and working with Python, FastAPI,
          SQL, and React, and I enjoy building useful applications while
          steadily improving my development skills.
        </p>
      </div>
    </section>
  )
}

export default AboutSection