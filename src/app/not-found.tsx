"use client"

import { CustomAnimatedText } from "@/components/custom-animated-text"
import { buttonVariants } from "@/components/ui/button"
import { headingFont } from "@/fonts"
import { cn } from "@/utils"
import Link from "next/link"
import { useEffect, useState } from "react"

const messages = [
	"Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.",
	"This page has vanished into the digital void. Perhaps it never existed at all.",
	"You've discovered a 404 - a rare digital creature that appears when pages go missing.",
	"The page you seek has embarked on an adventure without leaving a forwarding address.",
	"Like a shooting star, this page burned bright but briefly before disappearing from the web.",
	"This corner of the internet is currently under construction or has been relocated.",
	"The digital gremlins have struck again! This page seems to have wandered off.",
	"You've reached the edge of the map. The page you're looking for is beyond these borders.",
]

function RandomMessage() {
	const [message, setMessage] = useState(messages[0]) // Start with first message for SSR

	useEffect(() => {
		// Only run on client after hydration
		const createHash = (str: string) => {
			let hash = 0
			for (let i = 0; i < str.length; i++) {
				const char = str.charCodeAt(i)
				hash = (hash << 5) - hash + char
				hash = hash & hash // Convert to 32-bit integer
			}
			return Math.abs(hash)
		}

		// Use the current URL path + timestamp for more variety
		const seed = createHash(window.location.pathname + Date.now().toString())
		const messageIndex = seed % messages.length
		setMessage(messages[messageIndex])
	}, [])

	return <p className="text-sm text-balance opacity-75">{message}</p>
}

export default function NotFound() {
	return (
		<main className="grid min-h-screen place-items-center p-6">
			<div className="flex max-w-xl flex-col items-center gap-6 text-center">
				<section className="animate-slide-in-y space-y-4">
					<header className="space-y-2">
						<h1 className={cn(headingFont.className, "text-6xl font-bold")}>
							<CustomAnimatedText>404</CustomAnimatedText>
						</h1>
						<h2 className="text-xl font-bold">
							<CustomAnimatedText>Page Not Found</CustomAnimatedText>
						</h2>
					</header>

					<RandomMessage />
				</section>

				<section className="animate-slide-in-y" style={{ animationDelay: "200ms" }}>
					<Link href="/" className={buttonVariants({ variant: "outline" })}>
						Go Home
					</Link>
				</section>
			</div>
		</main>
	)
}
