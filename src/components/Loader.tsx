// react
import { useEffect, useRef } from "react"

export default () => {
  const contentTransition = 600
  const loaderTransition = 600
  const loadingProgressTransition = 750

  const loader = useRef<HTMLDivElement>(null)
  const loadingProgress = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const content = document.querySelector<HTMLDivElement>('.content')

    // initial styling
    if(content) content.style.transition = `${contentTransition}ms`
    if(loader.current){
      loader.current.style.transition = `${loaderTransition}ms`
      loader.current.style.transitionDelay = `${loadingProgressTransition}ms`
    }
    if(loadingProgress.current){
      loadingProgress.current.style.transition = `${loadingProgressTransition}ms`
      loadingProgress.current.style.width = "60%"
    }

    const onLoad = () => {
      if(loadingProgress.current) loadingProgress.current.style.width = "100%"
      if(loader.current) loader.current.style.opacity = "0"
      setTimeout(()=>{
        if(loader.current) loader.current.style.display = "none"
        if(content) content.style.opacity = "1"
        document.body.style.overflow = "unset"
      }, loadingProgressTransition + loaderTransition)
    }

    // onload
    if(document.readyState === "complete") onLoad()
    else{
      window.addEventListener("load", onLoad)
      return () => window.removeEventListener("load", onLoad)
    }
  }, [])
  
  return (
    <div ref={loader} className="loader">
      <div className="progress-cont">
        <div ref={loadingProgress} className="progress" />
      </div>
    </div>
  )
}