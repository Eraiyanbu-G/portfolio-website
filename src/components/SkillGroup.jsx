import './skill-group.css'
import useScrollReveal from '../hooks/useScrollReveal.js'

function SkillGroup({ group, index }) {
  const revealRef = useScrollReveal()

  return (
    <article className="skill-group scroll-reveal" ref={revealRef}>
      <p className="skill-group__index">0{index + 1}</p>
      <h3 className="skill-group__title">{group.category}</h3>
      <ul className="skill-group__list">
        {group.skills.map((skill) => (
          <li className="skill-group__item" key={skill.name}>
            <span>{skill.name}</span>
            {skill.level && <span className="skill-group__level">{skill.level}</span>}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default SkillGroup