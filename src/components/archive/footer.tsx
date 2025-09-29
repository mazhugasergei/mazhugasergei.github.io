"use client"
import { useEffect, useState } from "react"

const phrases = [
	"You've reached the end.",
	"Oh goodness, it's the end, innit?", // British slang
	"That's all, folks.", // Looney Tunes
	"Liberté, Égalité, Finalité", // France
	"Keep calm, you're at the bottom.", // UK wartime poster
	"And that's the last stand, partner.", // Wild West / USA
	"Finito, ragazzi.", // Italy
	"Sie haben das Seitenende erreicht. Vielen Dank für Ihr Scrollen.", // Germany
	"Scroll no further, comrade.", // Soviet-style reference
	"All pages lead to footer.", // Roman roads proverb
	"Et tu, footer?", // Julius Caesar
	"That's one small scroll for man, one giant leap to the end of this page.", // Neil Armstrong
]

export function Footer() {
	const [phrase, setPhrase] = useState("")

	useEffect(() => {
		setPhrase(phrases[Math.floor(Math.random() * phrases.length)])
	}, [])

	return <footer className="mx-auto px-4 py-8 text-center md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">{phrase}</footer>
}
