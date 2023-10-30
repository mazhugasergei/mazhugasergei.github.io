// react
import { useEffect, useRef } from "react"

export default () => {
  const loader = useRef<HTMLDivElement>(null)
  const loaderTransition = 600

  useEffect(()=>{
    const content = document.querySelector<HTMLDivElement>('.content')

    // initial styling
    document.body.style.overflow = "hidden"
    if(content) content.style.opacity = "0"
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
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32" />
        </svg>
      </div>

      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72" />
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64" />
        </svg>
      </div>
    </div>
  )
}