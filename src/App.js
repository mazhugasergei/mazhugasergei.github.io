// react
import { useEffect, useState } from "react"
// layout components
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
// components
import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"


const App = () => {
  const [text, setText] = useState()

  // get localization
  if(localStorage.getItem('lang')) var lang = localStorage.getItem('lang')
  else if(navigator.language == "de") var lang = "de"
  else if(navigator.language == "ja") var lang = "ja"
  else if(navigator.language == "ru") var lang = "ru"
  else var lang = "en-US"
  // get text
  useEffect(()=>{
    fetch('/api/' + lang + '.json')
      .then(res => { return res.json() })
      .then(data => setText(data))
  }, [lang])

  useEffect(()=>{
    if(document.readyState === "complete") onLoad()
    else{
      window.addEventListener("load", onLoad)
      return () => window.removeEventListener("load", onLoad)
    }
  }, [])

  // observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.remove('toAnimate')
    })
  })

  const onLoad = () => {
    const loader = document.querySelector('.loader')
    loader.querySelector('path').style.strokeDasharray = "100 100"
    setTimeout(()=>{
      // hide loader
      loader.style.opacity = 0
      loader.style.pointerEvents = "none"
      document.body.style.overflow = "unset"
      document.querySelector('.content').style.opacity = 1
      // elements to observe
      document.querySelectorAll('.toAnimate').forEach(item => observer.observe(item))
    }, 750)
  }

  return (
    <>
      <div className="loader">
        <svg viewBox="0 0 36 36">
          <path
            stroke-dasharray="30, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
      </div>
      <div className="content">
        <Header header={text && text.header} />
        <main className="wrapper">
          <Hero hero={text && text.hero} />
          <About about={text && text.about} />
          <Works works={text && text.works} />
        </main>
        <Footer footer={ text && text.footer } />
      </div>
    </>
  )
}

export default App