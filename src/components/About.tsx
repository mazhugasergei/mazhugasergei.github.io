// react
import { useEffect } from "react"
// types
import { aboutType } from "../Types"

const About = ({ about }: { about: aboutType | undefined }) => {
  const skillsNames = ["Problem solving", "JavaScript", "REST API", "TypeScript", "React", "React Router", "Redux Toolkit", "React Query", "Next.js", "HTML", "CSS", "SCSS", "Git", "GitHub", "C++", "Npm", "Yarn", "Figma", "Microsoft Offce", "iWork", "Photoshop", "PremierePro", "AfterEffects"]

  useEffect(()=>{
    const header: HTMLElement | null = document.querySelector('header')
    const section: HTMLElement | null = document.querySelector('section#about')
    // set link stop
    if(header && section){
      section.style.scrollMargin = header.offsetHeight + "px"
    }
  }, [])

  return (
    <section className="about wrapper" id="about">
      <div className="title"><h1>{ about && about.title }</h1><h5>{ about && about.subtitle }</h5></div>
      <div className="container wrapper">
        <div className="story">
          <img src="/assets/images/thinking.svg"/>
          <h1>{ about && about.heading }</h1>
          <p>{ about && about.paragraph }</p>
        </div>
        <div className="cont">
          <h1>{ about && about.skills }</h1>
          <ul className="skills toAnimate">
            {
              skillsNames.map((skill, i) => (
                <li style={{transitionDelay: 0.1 * i/3 + "s"}} key={i}>{ skill }</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
 
export default About