// react
import { useEffect, useState } from "react"
// layout components
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
// components
import Loader from "./components/layout/Loader"
import Hero from "./components/Hero"
import About from "./components/About"
import Works from "./components/Works"
import Contact from "./components/Contact"


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
    // complete loader circle
    const loader = document.querySelector('.loader')
    loader.querySelector('path').style.animation = "none"
    setTimeout(()=>{ loader.querySelector('path').style.strokeDasharray = "100, 100" })
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
      <Loader/>
      <div className="content">
        <Header header={text && text.header} />
        <main>
          <Hero hero={text && text.hero} />
          <About about={text && text.about} />
          <Works works={text && text.works} />
          {/* <Contact/> */}
        </main>
        <Footer footer={ text && text.footer } />
      </div>
    </>
  )
}

export default App