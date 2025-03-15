"use client"

import React from "react"

interface SymbolTransitionTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export const SymbolTransitionText = React.forwardRef<HTMLSpanElement, SymbolTransitionTextProps>(
  ({ text, className, ...props }, ref) => {
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/"

    // Function to generate a deterministic placeholder based on the text
    const generateDeterministicPlaceholder = (text: string, symbols: string) => {
      let hash = 0

      // Simple hash function based on the text
      for (let i = 0; i < text.length; i++) {
        hash = (hash << 5) - hash + text.charCodeAt(i)
      }

      // Generate a "random" string based on the hash
      const randomSeed = Math.abs(hash)
      const placeholder = Array.from(
        { length: text.length },
        (_, i) => symbols[(randomSeed + i) % symbols.length] // Use hash + index to generate pseudo-random values
      )

      return placeholder.join("")
    }

    // Generate a pseudo-random but deterministic placeholder based on the text
    const deterministicPlaceholder = generateDeterministicPlaceholder(text, symbols)

    const [displayedText, setDisplayedText] = React.useState<string>(deterministicPlaceholder)

    React.useEffect(() => {
      const finalTextArray = text.split("")
      const currentTextArray = displayedText.split("")
      const revealedIndices = new Set<number>()
      const maxIterations = 20
      let iterations = 0

      const interval = setInterval(() => {
        if (revealedIndices.size < text.length) {
          // Reveal a random character
          let randomIndex: number
          do {
            randomIndex = Math.floor(Math.random() * text.length)
          } while (revealedIndices.has(randomIndex))

          currentTextArray[randomIndex] = finalTextArray[randomIndex]
          revealedIndices.add(randomIndex)
        }

        const updatedTextArray = currentTextArray.map((char, i) =>
          revealedIndices.has(i) ? char : symbols[Math.floor(Math.random() * symbols.length)]
        )

        setDisplayedText(updatedTextArray.join(""))

        iterations++
        if (revealedIndices.size === text.length || iterations > maxIterations) {
          clearInterval(interval)
          setDisplayedText(finalTextArray.join(""))
        }
      }, 50)

      return () => clearInterval(interval)
    }, [text])

    return (
      <span ref={ref} {...props} className={className}>
        {displayedText}
      </span>
    )
  }
)

SymbolTransitionText.displayName = "SymbolTransitionText"
