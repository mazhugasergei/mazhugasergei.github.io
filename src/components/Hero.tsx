// react
import { useEffect } from "react"
// types
import { heroType } from "../Types"
// icons
import { MdOutlineMail } from "react-icons/md"
import { FiDownload } from "react-icons/fi"
import { TbMouse } from "react-icons/tb"

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
      <div className="pfp" style={{ backgroundImage: "url('/assets/images/pfp.svg')" }}/>
      <div className="cont">
        <h1>{ hero && hero.heading }</h1>
        <p>{ hero && hero.paragraph }</p>
        <div className="buttons">
          <a href="mailto:ghbdtnghbdtn8@gmail.com" className="btn contact">
            <div className="text">{ hero && hero.contact }</div>
            <div className="hover-cont"><MdOutlineMail style={{ fontSize: "1.15rem" }}/></div>
          </a>
          <a download={"Mazhuga Sergei CV"} href="/assets/cv.pdf" className="btn outline download-cv">Download CV<FiDownload style={{ fontSize: "1.15rem" }} /></a>
        </div>
      </div>
      <a href="#about" className="arrow-down"><TbMouse/></a>
    </section>
  )
}
 
export default Hero