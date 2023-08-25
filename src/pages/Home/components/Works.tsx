// react
import { useContext, useEffect, useState } from "react"
// context
import { LocalizationContext } from "components/LocalizationContext"
// components
import SectionTitle from "components/SectionTitle"

interface Works {
  [key: string]: {
    used: string[],
    url: string
  }
}

export default () => {
  const localization = useContext(LocalizationContext)
  const [works, setWorks] = useState<Works>()

  // fetch tesch used in works
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io_files/main/localizations/assets/works.json`)
      .then(res => res.json())
      .then(data => setWorks(data.works))
  }, [])

  return (
    <section className="works" id="works">
      <SectionTitle title="My Works" subtitle="Most recent projects" />
      <ul className="works">
        { localization.works && works && Object.keys(works).map(ObjKey => (
          <li key={ObjKey}>
            <a className="work" target="_blank" href={works[ObjKey].url}>
              <img src={`https://raw.githubusercontent.com/mazhugasergei/mazhugasergei.github.io_files/main/images/${ObjKey}.jpg`} />
              <div className="text-content">
                <ul className="used">{ works[ObjKey].used.join(" | ") }</ul>
                <h3 className="title">{ localization.works[ObjKey].title }</h3>
                <p>{ localization.works[ObjKey].desc }</p>
              </div>
            </a>
          </li>
        )) }
      </ul>
    </section>
  )
}