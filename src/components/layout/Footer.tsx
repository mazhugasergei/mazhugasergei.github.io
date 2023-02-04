// react
import { useEffect } from "react"
// types
import { footerType } from "../../Types"
// ionicons
import IonIcon from '@reacticons/ionicons'

const Footer = ({ footer }: { footer: footerType | undefined }) => {
  useEffect(()=>{
    // close language select menu on outside click
    document.addEventListener("click", (e) => {
      const label: HTMLLabelElement | null = document.querySelector('footer .languages label')
      const input: HTMLInputElement | null = document.querySelector('footer .languages input')
      if(label && input){
        if(!label.contains(e.target as Node | null) && !input.contains(e.target as Node | null)) input.checked = false
      }
    })
    document.addEventListener("touchstart", (e) => {
      const label: HTMLLabelElement | null = document.querySelector('footer .languages label')
      const input: HTMLInputElement | null = document.querySelector('footer .languages input')
      const list: HTMLDataListElement | null = document.querySelector('footer .languages ul')
      if(label && input && list){
        if(!label.contains(e.target as Node | null) && !input.contains(e.target as Node | null) && !list.contains(e.target as Node | null)) input.checked = false
      }
    })
    // change language onclick event
    document.querySelectorAll('footer .languages .lang').forEach(lang => {
      lang.addEventListener("click", (e)=>{
        const li: HTMLElement | null = e.target as HTMLElement
        const lang: string = li?.dataset.lang as string
        localStorage.setItem('lang', lang)
        window.location.replace('/')
      })
    })
  }, [])

  return (
    <footer className="wrapper">
      <div className="wrapper">
        <div className="languages">
          <input type="checkbox" id="languages"/>
          <label htmlFor="languages">
            <IonIcon name="globe-outline"/>
            <span>{ footer && footer.language }</span>
            <img src="/images/arrow_down_2.svg" />
          </label>
          <ul className="list">
            <li className="lang" data-lang="en-US">
              <div>English</div>
              <div>English (US)</div>
            </li>
            <li className="lang" data-lang="de">
              <div>Deutsch</div>
              <div>German</div>
            </li>
            <li className="lang" data-lang="ja">
              <div>日本語</div>
              <div>Japanese</div>
            </li>
            <li className="lang" data-lang="ko">
              <div>한국어</div>
              <div>Korean</div>
            </li>
            <li className="lang" data-lang="ru">
              <div>Русский</div>
              <div>Russian</div>
            </li>
          </ul>
        </div>
        <div className="links">
          <a target="_blank" href="https://www.linkedin.com/in/sergei-mazhuga-274618247/"><img src="/images/links_logos/linkedin.svg"/></a>
          <a target="_blank" href="https://github.com/markuswedler"><img src="/images/links_logos/github.svg"/></a>
          <a target="_blank" href="https://www.youtube.com/channel/UC07C6734bBfcNVL2Za8Y_-A"><img src="/images/links_logos/youtube.svg"/></a>
          <a target="_blank" href="https://dev.to/markuswedler"><img src="/images/links_logos/devto.svg"/></a>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer