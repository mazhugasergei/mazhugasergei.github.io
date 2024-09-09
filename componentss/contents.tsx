"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default () => {
  const [contents, setContents] = useState([{ name: "...", id: "", current: false }])

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const scroll = () => {
      const contents = Array.from(sections).map((section, index) => {
        const header = section.querySelector("h2")
        const top = section.getBoundingClientRect().top
        const bottom = section.getBoundingClientRect().bottom

        return {
          name: header ? header.textContent || "" : "",
          id: section.id,
          current: top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2,
        }
      })

      setContents(contents)
    }

    scroll()

    document.addEventListener("scroll", scroll)

    return () => document.removeEventListener("scroll", scroll)
  }, [])

  return (
    <nav className="max-lg:hidden mt-6">
      <ul>
        {contents.map((content) => (
          <li key={content.name}>
            <Link
              href={`#${content.id}`}
              className={`block text-[0.8125rem] text-muted hover:text-primary ${
                content.current ? "text-primary" : ""
              } transition p-1 -mx-1`}
            >
              {content.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
