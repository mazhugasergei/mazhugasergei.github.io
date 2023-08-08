// react
import { useState } from "react"
// components
import { Menu, Link } from "components/menu/Menu"
// icons
import { BsGlobe } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"
import { FaLinkedin, FaGithub, FaYoutube, FaDev } from "react-icons/fa"

export default () => {
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <footer>
      <div className="wrapper">
        {/* Language switch button */}
        <button className="lang-btn hoverable" onClick={() => setMenuOpened(prevState => !prevState)}>
          <BsGlobe />
          <span>English</span>
          <MdKeyboardArrowDown />
        </button>

        {/* Language selection Menu */}
        <Menu className={menuOpened ? "" : "hidden"}>
          <Link href="">1</Link>
          <Link href="">2</Link>
          <Link href="">3</Link>
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