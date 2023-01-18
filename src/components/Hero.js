// react
import { useEffect } from "react"

const Hero = ({ hero }) => {
  useEffect(()=>{
    const arrowDown = document.querySelector('.arrow-down')
    // add arrow down event listener
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 0){
        arrowDown.style.opacity = 0
        arrowDown.style.pointerEvents = "none"
        arrowDown.tabIndex = -1
      }
      else{
        arrowDown.style.opacity = 1
        arrowDown.style.pointerEvents = "unset"
        arrowDown.tabIndex = 0
      }
    })
  }, [])

  return (
    <section className="hero">
      <div className="pfp" style={{ backgroundImage: "url('/images/pfp.svg')" }}/>
      <div className="container">
        <h2>{ hero && hero.heading }</h2>
        <p>{ hero && hero.paragraph }</p>
        <a href="mailto:ghbdtnghbdtn8@gmail.com" className="btn">
          <div className="text">{ hero && hero.contact }</div>
          <div className="hover-cont"><ion-icon name="mail-outline"/></div>
        </a>
      </div>
      <a href="#about" className="arrow-down"><img src="/images/arrow_down_1.svg" alt="" /></a>
    </section>
  )
}
 
export default Hero