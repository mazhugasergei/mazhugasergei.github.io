// react
import { useEffect, useRef } from "react"

export default () => {
  const loader = useRef<HTMLDivElement>(null)
  const loaderTransition = 600

  useEffect(()=>{
    const content = document.querySelector<HTMLDivElement>('.content')

    // initial styling
    setTimeout(() => { if(content) content.style.transition = `${loaderTransition}ms` })
    if(loader.current) loader.current.style.transition = `${loaderTransition}ms`

    // onload
    const onLoad = () => {
      if(loader.current) loader.current.style.opacity = "0"
      setTimeout(()=>{
        if(loader.current) loader.current.style.display = "none"
        if(content) content.style.opacity = "1"
        document.body.style.overflow = "unset"
      }, loaderTransition)
    }

    if(document.readyState === "complete") onLoad()
    else{
      window.addEventListener("load", onLoad)
      return () => window.removeEventListener("load", onLoad)
    }
  }, [])
  
  return (
    <div className="loader-cont" ref={loader}>
      <div className="loader">
        <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
        </div>
      </div>
    </div>
  )
}