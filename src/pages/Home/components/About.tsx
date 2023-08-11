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

  return (
    <section className="about">
      <SectionTitle title={ localization.about?.section_title.title } subtitle={ localization.about?.section_title.subtitle } />
      <div className="wrapper">
        <Thinking className="img" />
        <h2>{ localization.about?.description.title }</h2>
        <p>{ localization.about?.description.paragraph }</p>
        <h2>{ localization.about?.skills.title }</h2>
        <ul className="skills">
          { skills.map(skill => <li className="skill" key={skill}>{ skill }</li>) }
        </ul>
      </div>
    </section>
  )
}