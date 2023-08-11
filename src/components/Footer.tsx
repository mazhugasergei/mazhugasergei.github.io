// react
import { useEffect, useState } from "react"
// components
import { Menu, Link } from "components/Menu"
// icons
import { BsGlobe } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"
import { FaLinkedin, FaGithub, FaYoutube, FaDev } from "react-icons/fa"

interface Languages {
  name: string,
  translation: string,
  code: string
}

export default () => {
  const [languages, setLanguages] = useState<Languages[]>([])
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  // fetch languages list
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io_files/main/localizations/languages.json`)
      .then(res => res.json())
      .then(data => setLanguages(data.languages))
  }, [])

  return (
    <footer>
      <div className="wrapper">
        {/* Language switch button */}
        <button className={`menu-btn lang-btn ${menuOpened ? "menu-opened" : ""}`} onClick={() => setMenuOpened(prevState => !prevState)}>
          <BsGlobe />
          <span>English</span>
          <MdKeyboardArrowDown />
        </button>

        {/* Language selection Menu */}
        <Menu handleMenuClick={{ menuOpened, setMenuOpened }}>
          { languages && languages.map(language => (
            <Link href="" langCode={ language.code } key={language.code}>
              <div className="title">{ language.name }</div>
              <div className="subtitle">{ language.translation }</div>
            </Link>
          )) }
        </Menu>

        {/* Social links */}
        <ul className="social">
          <li><a target="_blank" href="https://www.linkedin.com/in/sergei-mazhuga-274618247/"><FaLinkedin /></a></li>
          <li><a target="_blank" href="https://github.com/mazhugasergei"><FaGithub /></a></li>
          <li><a target="_blank" href="https://www.youtube.com/channel/UC07C6734bBfcNVL2Za8Y_-A"><FaYoutube /></a></li>
          <li><a target="_blank" href="https://dev.to/markuswedler"><FaDev /></a></li>
        </ul>
      </div>
    </footer>
  )
}