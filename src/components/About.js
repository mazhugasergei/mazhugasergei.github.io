import { useEffect } from "react"

const About = ({ about }) => {
  const skillsNames = ["HTML & CSS", "React & Next.js", "Git & GitHub"]
  const skillsPercentages = [98, 72, 76]

  useEffect(()=>{
    const header = document.querySelector('header')
    const section = document.querySelector('section#about')
    // set link stop
    section.style.scrollMargin = header.offsetHeight + 40 + "px"
  }, [])

  return (
    <section className="about wrapper" id="about">
      <div className="container wrapper">
        <div className="story">
          <img src="/images/thinking.svg"/>
          <h2>{ about && about.heading }</h2>
          <p>{ about && about.paragraph }</p>
        </div>
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
    </section>
  )
}
 
export default About