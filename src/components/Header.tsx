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
  const headerWrapperRef = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    document.addEventListener("scroll", () => {
      headerWrapperRef.current && headerWrapperRef.current.classList.toggle("page-scrolled", Boolean(window.scrollY))
    })
  }, [])

  return (
    <header>
      <div className="wrapper" ref={headerWrapperRef}>
        {/* Logo */}
        <a href="/" className="logo">Sergei</a>

        {/* Menu Btn */}
        <button className={`menu-btn ${menuOpened ? "menu-opened" : ""}`} onClick={() => setMenuOpened(prevState => !prevState)} />

        {/* Menu aka Nav */}
        <Menu menuOpenedState={{ menuOpened, setMenuOpened }}>
          { localization.header && Object.keys(localization.header).map(ObjKey => (
            <Link href={`#${ObjKey === "home" ? "" : ObjKey}`} key={ObjKey}>
              { localization.header[ObjKey].title }
              {/* <div className="title">{ localization.header[ObjKey].title }</div>
              <div className="subtitle">{ localization.header[ObjKey].subtitle }</div> */}
            </Link>
          )) }
        </Menu>
      </div>
    </header>
  )
}