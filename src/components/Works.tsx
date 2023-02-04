// react
import { useEffect } from "react"
// types
import { worksType } from "../Types"

const Works = ({ works }: { works: worksType | undefined }) => {
  useEffect(()=>{
    const header: HTMLElement | null = document.querySelector('header')
    const section: HTMLElement | null = document.querySelector('section#works')
    // set link stop
    if(header && section) section.style.scrollMargin = header.offsetHeight + "px"
  }, [])

  return (
    <section className="works wrapper" id="works">
      <div className="title"><h1>{ works && works.title }</h1><h5>{ works && works.subtitle }</h5></div>
      <div className="works">{
        works && Object.keys(works.cards).map(name => (
          <a href={ "https://" + works.cards[name].url } target="_blank" key={name}>
            <img src={"/images/works_screenshots/" + name + ".png"} />
            <div className="using">{ works.cards[name].using }</div>
            <h3>{ works.cards[name].title }</h3>
            <p>{ works.cards[name].paragraph }</p>
          </a>
        ))}
      </div>
    </section>
  )
}
 
export default Works