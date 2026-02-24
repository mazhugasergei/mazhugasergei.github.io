import "@/assets/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BASE_URL } from "@/lib/constants/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		template: "%s | Mazhuga Sergei",
		default: "Mazhuga Sergei",
	},
	description:
		"Software developer based in Vladivostok, Russia. Crafting intuitive, purposeful websites and web services with focus on clarity and usability. Passionate about open source and committed to shaping future of web through thoughtful, collaborative development.",
	authors: [{ name: "Mazhuga Sergei", url: BASE_URL }],
	creator: "Mazhuga Sergei",
	keywords: ["software developer", "web development", "frontend", "full-stack", "portfolio", "vladivostok", "russia"],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	openGraph: {
		title: "Mazhuga Sergei",
		description:
			"Software developer based in Vladivostok, Russia. Crafting intuitive, purposeful websites and web services with focus on clarity and usability.",
		type: "website",
		siteName: "Mazhuga Sergei",
		locale: "en_US",
		images: [
			{
				url: BASE_URL + "/og.jpg",
				width: 1200,
				height: 630,
				alt: "Mazhuga Sergei",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@mazhugasergei",
		creator: "Mazhuga Sergei",
	},
	verification: {
		google: BASE_URL,
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="min-h-100dvh relative flex flex-col select-none">
				<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
