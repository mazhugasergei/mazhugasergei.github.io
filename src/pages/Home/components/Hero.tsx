// react
import { useContext } from "react"
// context
import { LocalizationContext } from "components/LocalizationContext"
// images
import { ReactComponent as PFP } from "assets/images/pfp.svg"
// icons
import { FiDownload } from "react-icons/fi"

export default () => {
  const localization = useContext(LocalizationContext)

  return (
    <section className="hero">
      <PFP className="pfp" />
      <h1>Hi, I'm Sergei!</h1>
      <p>A front-end web developer from Vladivostok with 3+ years of coding experience and a passion for creating visually stunning and intuitive websites.</p>
      <a className="btn" href="mailto:ghbdtnghbdtn8@gmail.com">Contact</a>
      <a className="btn outline" href="https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io_files/main/Sergei_Mazhuga_CV.pdf" download>Download CV<FiDownload /></a>
    </section>
  )
}