import { useEffect } from "react"

const Footer = ({ footer }) => {
  useEffect(()=>{
    // close language select menu on outside click
    document.addEventListener("click", (e) => {
      const label = document.querySelector('footer .languages label')
      const input = document.querySelector('footer .languages input')
      if(!label.contains(e.target) && !input.contains(e.target)) input.checked = false
    })
    document.addEventListener("touchstart", (e) => {
      const label = document.querySelector('footer .languages label')
      const input = document.querySelector('footer .languages input')
      const list = document.querySelector('footer .languages ul')
      if(!label.contains(e.target) && !input.contains(e.target) && !list.contains(e.target)) input.checked = false
    })
    // change language onclick event
    document.querySelectorAll('footer .languages .lang').forEach(lang => {
      lang.addEventListener("click", (e)=>{
        localStorage.setItem('lang', e.target.dataset.lang)
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
            <ion-icon name="globe-outline"/>
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
            <li className="lang" data-lang="ru">
              <div>Русский</div>
              <div>Russian</div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer