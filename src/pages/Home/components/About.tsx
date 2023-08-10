// react
import { useContext } from "react"
// context
import { LocalizationContext } from "components/LocalizationContext"
// component
import SectionTitle from "components/SectionTitle"

export default () => {
  const localization = useContext(LocalizationContext)

  return (
    <section className="about">
      <SectionTitle title={ localization.about?.section_title.title } subtitle={ localization.about?.section_title.subtitle } />
    </section>
  )
}