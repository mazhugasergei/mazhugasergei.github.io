// react
import { useEffect, useRef, useState } from "react"

export default () => {
  const header = useRef<HTMLElement>(null)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(()=>{
    // header border on scroll
    document.addEventListener("scroll", () => {
      if(header.current) window.scrollY ? header.current.classList.add("page-scrolled") : header.current.classList.remove("page-scrolled")
    })
  }, [])

  return (
    <header ref={header}>
      {/* Logo */}
      <a href="/" className="logo">Sergei</a>

      {/* Menu */}
      <menu className={menuOpened ? "" : "hidden"}>
        <li><a href="#home"><span>Home</span></a></li>
        <li><a href="#about"><span>About</span></a></li>
        <li><a href="#works"><span>Works</span></a></li>
      </menu>

      {/* Menu Btn */}
      <button className={`menu-btn ${menuOpened ? "menu-opened" : ""}`} onClick={() => setMenuOpened(prevState => !prevState)} />
    </header>
  )
}