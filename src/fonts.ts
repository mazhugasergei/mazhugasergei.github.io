import { Doto as Headings, PT_Mono as Main, Open_Sans as MainSans } from "next/font/google"

export const headingFont = Headings({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
})

export const mainFont = Main({
	weight: ["400"],
	subsets: ["latin"],
})

export const mainSansFont = MainSans({
	weight: ["400"],
	subsets: ["latin"],
})
