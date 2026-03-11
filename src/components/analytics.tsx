"use client"

import Script from "next/script"

export function Analytics() {
	return (
		<Script
			src="https://my-analytics-three.vercel.app/asdasdasd.js"
			data-website-id="f35ea190-8cf9-458c-9364-25360e92c39c"
			strategy="lazyOnload"
			onError={(e: Event | string) => {
				console.error("Analytics failed to load, but the app is still running.", e)
			}}
		/>
	)
}
