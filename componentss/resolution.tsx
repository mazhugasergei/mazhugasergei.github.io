"use client"

import { useEffect, useState } from "react"

export default function Resolution({ className }: { className?: string }) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })
  }, [])

  return (
    <div className={width && height ? "opacity-1000" : "opacity-0"}>
      {width} x {height}
    </div>
  )
}
