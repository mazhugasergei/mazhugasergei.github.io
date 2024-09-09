"use client"

import "@/app/styles/code-block.scss"
import { Check, Clipboard } from "lucide-react"
import Prism from "prismjs"
import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const ref = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current)
  }, [code, language])

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [copied])

  return (
    <div className="relative my-3">
      <pre
        tabIndex={-1}
        className={`overflow-x-auto text-[0.8125rem] leading-[1.5] bg-[#222] dark:bg-[#1c1c1c] border rounded-[.75rem] p-[1.5625rem] language-${language}`}
      >
        {/* code */}
        <code ref={ref} className={`language-${language}`}>
          {code}
        </code>
      </pre>

      {/* copy button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          navigator.clipboard.writeText(code)
          setCopied(true)
        }}
        className="absolute top-4 right-4 !text-[#fff] hover:bg-[#fff]/10 rounded-lg"
      >
        <Clipboard size={13} className={copied ? "opacity-0" : "opacity-80"} />
        <Check size={13} className={`opacity-${copied ? "80" : "0"} -ml-[0.8125rem] `} />
      </Button>
    </div>
  )
}

export default CodeBlock
