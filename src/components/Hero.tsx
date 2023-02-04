// react
import { useEffect } from "react"
// types
import { heroType } from "../Types"
// icons
import { IoMailOutline } from "react-icons/io5"

const Hero = ({ hero }: { hero: heroType | undefined }) => {
  useEffect(()=>{
    const arrowDown: HTMLElement | null = document.querySelector('.arrow-down')
    // add arrow down event listener
    if(arrowDown){
      window.addEventListener("scroll", ()=>{
        if(window.scrollY > 0){
          arrowDown.style.opacity = "0"
          arrowDown.style.pointerEvents = "none"
          arrowDown.tabIndex = -1
        }
        else{
          arrowDown.style.opacity = "1"
          arrowDown.style.pointerEvents = "unset"
          arrowDown.tabIndex = 0
        }
      })
    }
  }, [])

  return (
    <section className="hero wrapper">
      <div className="pfp" style={{ backgroundImage: "url('/images/pfp.svg')" }}/>
      <div className="cont">
        <h1>{ hero && hero.heading }</h1>
        <p>{ hero && hero.paragraph }</p>
        <a href="mailto:ghbdtnghbdtn8@gmail.com" className="btn">
          <div className="text">{ hero && hero.contact }</div>
          <div className="hover-cont"><IoMailOutline style={{ fontSize: "1.15rem" }}/></div>
        </a>
      </div>
      <a href="#about" className="arrow-down"><img src="/images/arrow_down_1.svg" alt="" /></a>
    </section>
  )
}
 
export default Hero