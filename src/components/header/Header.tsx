// react
import { useEffect, useRef, useState } from "react"
// components
import { Menu, Link } from "components/menu/Menu"

export default () => {
  const header = useRef<HTMLElement>(null)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(()=>{
    // header border on scroll
    document.addEventListener("scroll", () => {
      header.current && header.current.classList.toggle("page-scrolled", Boolean(window.scrollY))
    })
  }, [])

  return (
    <header ref={header}>
      {/* Logo */}
      <a href="/" className="logo">Sergei</a>

      {/* Menu Btn */}
      <button className={`menu-btn ${menuOpened ? "menu-opened" : ""}`} onClick={() => setMenuOpened(prevState => !prevState)} />

      {/* Menu aka Nav */}
      <Menu className={menuOpened ? "" : "hidden"}>
        <Link href="#">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#works">Works</Link>
      </Menu>
    </header>
  )
}