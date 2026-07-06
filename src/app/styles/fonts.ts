import { Doto as HeadingsFont, Open_Sans as MainSansFont } from "next/font/google"

export const headingFont = HeadingsFont({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	fallback: ["Monospace"],
})

export const mainSansFont = MainSansFont({
	weight: ["400"],
	subsets: ["latin"],
	fallback: ["sans-serif"],
})
