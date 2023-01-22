import { useEffect } from "react"

const About = ({ about }) => {
  const skillsNames = ["HTML & CSS", "React & Next.js", "Git & GitHub"]
  const skillsPercentages = [98, 72, 76]

  useEffect(()=>{
    const header = document.querySelector('header')
    const section = document.querySelector('section#about')
    // set link stop
    section.style.scrollMargin = header.offsetHeight + "px"
  }, [])

  return (
    <section className="about wrapper" id="about">
      <div className="title"><h1>{ about && about.title }</h1><h5>{ about && about.subtitle }</h5></div>
      <div className="container wrapper">
        <div className="story">
          <img src="/images/thinking.svg"/>
          <h1>{ about && about.heading }</h1>
          <p>{ about && about.paragraph }</p>
        </div>
        <div className="cont">
          <h1>{ about && about.skills }</h1>
          <ul className="skills toAnimate">
            {
              skillsNames.map((skill, i) => (
                <li key={i}>
                  <h4>{ skill }</h4>
                  <span className="percentage" style={{ left: skillsPercentages[i] + "%", transitionDelay: .03 * i + "s" }}>{ skillsPercentages[i] + "%" }</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: skillsPercentages[i] + "%", transitionDelay: .03 * i + "s" }} />
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
 
export default About