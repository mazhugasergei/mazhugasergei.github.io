// react
import { useEffect, useRef } from "react"

export default () => {
  const loader = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const content = document.querySelector<HTMLDivElement>('.content')

    // initial styling
    setTimeout(() => { if(content) content.style.transition = `${process.env.REACT_APP_LOADER_TRANSITION}ms` })
    if(loader.current) loader.current.style.transition = `${process.env.REACT_APP_LOADER_TRANSITION}ms`

    // onload
    const onLoad = () => {
      const loader: HTMLElement | null = document.querySelector('.loader')
      const path: SVGPathElement | null | undefined = loader?.querySelector('path')
      const content: HTMLElement | null = document.querySelector('.content')
      // complete loader circle
      path!.style.animation = "none"
      setTimeout(()=>{ path!.style.strokeDasharray = "100, 100" })
      setTimeout(()=>{
        // hide loader
        loader!.style.opacity = "0"
        loader!.style.pointerEvents = "none"
        document.body.style.overflow = "unset"
        setTimeout(()=>{ content!.style.opacity = "1" }, Number(process.env.REACT_APP_LOADER_TRANSITION))
      }, Number(process.env.REACT_APP_LOADER_TRANSITION))
    }

    if(document.readyState === "complete") onLoad()
    else{
      window.addEventListener("load", onLoad)
      return () => window.removeEventListener("load", onLoad)
    }
  }, [])
  
  return (
    <div className="loader">
      <svg viewBox="0 0 36 36">
        <path
          strokeDasharray="0, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
    </div>
  )
}