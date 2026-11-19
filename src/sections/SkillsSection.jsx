import SkillGroup from '../components/SkillGroup.jsx'
import skillGroups from '../data/skills.js'
import './skills-section.css'

function SkillsSection() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="skills-section__heading">
          <p className="section-kicker">What I work with</p>
          <h2 id="skills-title">Skills &amp; Tools</h2>
        </div>
        <div className="skills-section__grid">
          {skillGroups.map((group, index) => (
            <SkillGroup group={group} index={index} key={group.category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection