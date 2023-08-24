// react
import { useEffect, useContext, useState } from "react"
// context
import { LocalizationContext } from "components/LocalizationContext"
// component
import SectionTitle from "components/SectionTitle"
// images
import { ReactComponent as Thinking } from "assets/images/about/thinking.svg"

export default () => {
  const localization = useContext(LocalizationContext)
  const [skills, setSkills] = useState<string[]>([])
  
  // fetch skills list
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io_files/main/localizations/skills.json`)
      .then(res => res.json())
      .then(data => setSkills(data.skills))
  }, [])

  // skills observer
  const skillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting)
        entry.target.querySelectorAll<HTMLLIElement>('.skill').forEach(skill => {
          skill.style.opacity = "1"
          skill.style.transform = "none"
        })
    })
  })

  // observe skills
  useEffect(()=>{
    const skills = document.querySelector('section.about .skills')
    skills && skillsObserver.observe(skills)
  }, [])

  return (
    <section className="about" id="about">
      <SectionTitle title={ localization.about?.section_title.title } subtitle={ localization.about?.section_title.subtitle } />
      <div className="container">
        {/* Inspiring paragraph */}
        <div className="cont">
          <Thinking className="img" />
          <h2>{ localization.about?.description.title }</h2>
          <p>{ localization.about?.description.paragraph }</p>
        </div>
        {/* Skills list */}
        <div className="cont">
          <h2>{ localization.about?.skills.title }</h2>
          <ul className="skills">
            { skills.map((skill, i) => <li className="skill" style={{ transitionDelay: `${i * 20}ms` }} key={skill}>{ skill }</li>) }
          </ul>
        </div>
      </div>
    </section>
  )
}