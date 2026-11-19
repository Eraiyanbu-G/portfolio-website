import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'
import './projects-section.css'

function ProjectsSection() {
  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="projects-section__heading">
          <p className="section-kicker">Selected work</p>
          <h2 id="projects-title">Featured Projects</h2>
        </div>
        <div className="projects-section__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection