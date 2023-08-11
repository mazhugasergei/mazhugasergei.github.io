// react
import { useEffect, useRef, useState, useContext } from "react"
// context
import { LocalizationContext } from "components/LocalizationContext"
// components
import { Menu, Link } from "components/Menu"

export default () => {
  const localization = useContext(LocalizationContext)
  const [menuOpened, setMenuOpened] = useState(false)

  // header border on scroll
  const headerRef = useRef<HTMLElement>(null)
  useEffect(()=>{
    document.addEventListener("scroll", () => {
      headerRef.current && headerRef.current.classList.toggle("page-scrolled", Boolean(window.scrollY))
    })
  }, [])

  return (
    <header ref={headerRef}>
      {/* Logo */}
      <a href="/" className="logo">Sergei</a>

      {/* Menu Btn */}
      <button className={`menu-btn ${menuOpened ? "menu-opened" : ""}`} onClick={() => setMenuOpened(prevState => !prevState)} />

      {/* Menu aka Nav */}
      <Menu handleMenuClick={{ menuOpened, setMenuOpened }}>
        { localization.header && Object.keys(localization.header).map(ObjKey => (
          <Link href={ObjKey} key={ObjKey}>
            <div className="title">{ localization.header[ObjKey].title }</div>
            <div className="subtitle">{ localization.header[ObjKey].subtitle }</div>
          </Link>
        )) }
      </Menu>
    </header>
  )
}