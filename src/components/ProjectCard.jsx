import './project-card.css'
import useScrollReveal from '../hooks/useScrollReveal.js'

function ProjectCard({ project, index }) {
  const revealRef = useScrollReveal()

  return (
    <article className="project-card scroll-reveal" ref={revealRef}>
      <div
        className={`project-card__visual project-card__visual--${project.theme}`}
        aria-hidden="true"
      >
        <span className="project-card__mark">{project.mark}</span>
        <span className="project-card__visual-note">Decorative placeholder</span>
      </div>
      <div className="project-card__body">
        <p className="project-card__index">0{index + 1} / Project</p>
        <h3 className="project-card__title">{project.title}</h3>
        {project.subtitle && (
          <p className="project-card__subtitle">{project.subtitle}</p>
        )}
        <p className="project-card__description">{project.description}</p>
        {project.technologies.length > 0 && (
          <ul className="project-card__technologies" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default ProjectCard