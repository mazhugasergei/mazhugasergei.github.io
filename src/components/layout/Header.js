import { useEffect } from "react"

const Header = ({ header }) => {
  const changeHeader = () => {
    // change border-bottom bg
    const wrapper = document.querySelector('header .wrapper')
    if(window.scrollY > 0) wrapper.style.borderBottomColor = "rgba(0, 0, 0, .1)"
    else wrapper.style.borderBottomColor = "transparent"
  }

  useEffect(()=>{
    // change header on render if needed
    changeHeader()
    // add scroll event listener
    window.addEventListener("scroll", changeHeader)
    // close menu on outside or link click
    document.addEventListener("click", (e)=>{
      const label = document.querySelector('header label')
      const input = document.querySelector('header input')
      if(!label.contains(e.target) && !input.contains(e.target)) input.checked = false
    })
    document.addEventListener("touchstart", (e)=>{
      const label = document.querySelector('header label')
      const input = document.querySelector('header input')
      const nav = document.querySelector('header ul')
      if(!label.contains(e.target) && !input.contains(e.target) && !nav.contains(e.target)) input.checked = false
    })
  }, [])

  return (
    <header className="wrapper">
      <div className="wrapper">
        <a href="/" className="logo">Sergei</a>
        <input type="checkbox" id="menuBtn"/>
        <ul>
          <li><a href="#"><div>{ header && header.home }</div></a></li>
          <li><a href="#about"><div>{ header && header.about }</div></a></li>
          <li><a href="#works"><div>{ header && header.works }</div></a></li>
          {/* <li><a href="#contact"><div>{ header && header.contact }</div></a></li> */}
        </ul>
        <label htmlFor="menuBtn"/>
      </div>
    </header>
  )
}
 
export default Header