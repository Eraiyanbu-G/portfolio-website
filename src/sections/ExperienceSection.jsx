import experienceItems from '../data/experience.js'
import './experience-section.css'
import useScrollReveal from '../hooks/useScrollReveal.js'

function ExperienceSection() {
  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="experience-section__heading">
          <p className="section-kicker">Learning and experience</p>
          <h2 id="experience-title">Experience &amp; Education</h2>
        </div>
        <div className="experience-list">
          {experienceItems.map((item, index) => (
            <ExperienceEntry item={item} index={index} key={item.category} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceEntry({ item, index }) {
  const revealRef = useScrollReveal()

  return (
    <article className="experience-entry scroll-reveal" ref={revealRef}>
      <div className="experience-entry__marker">
        <span>0{index + 1}</span>
        <span>{item.category}</span>
      </div>
      <div className="experience-entry__content">
        <h3 className="experience-entry__title">{item.title}</h3>
        <p className="experience-entry__organization">{item.organization}</p>
        {(item.detail || item.period) && (
          <p className="experience-entry__period">{item.detail || item.period}</p>
        )}
        {item.completedTasks && (
          <div className="experience-entry__tasks">
            <p>Completed tasks</p>
            <ul>
              {item.completedTasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

export default ExperienceSection