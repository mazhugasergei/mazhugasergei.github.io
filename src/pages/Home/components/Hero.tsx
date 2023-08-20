// react
import { useContext } from "react"
// context
import { LocalizationContext } from "components/LocalizationContext"
// images
import { ReactComponent as PFP } from "assets/images/hero/pfp.svg"
// icons
import { FiDownload } from "react-icons/fi"

export default () => {
  const localization = useContext(LocalizationContext)

  return (
    <section className="hero">
      <PFP className="pfp" />
      <div className="cont">
        <h1>{ localization.hero?.title }</h1>
        <p>{ localization.hero?.paragraph }</p>
        <a className="btn" href="mailto:ghbdtnghbdtn8@gmail.com">{ localization.hero?.contact }</a>
        <a className="btn outline" href="https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io_files/main/Sergei_Mazhuga_CV.pdf" download>{ localization.hero?.download_cv }<FiDownload /></a>
      </div>
    </section>
  )
}