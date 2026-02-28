import "@/assets/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BASE_URL } from "@/lib/constants/config"
import { DESCRIPTION, DESCRIPTION_SHORT, LOCATION } from "@/lib/constants/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		template: "%s | Mazhuga Sergei",
		default: "Mazhuga Sergei",
	},
	description: DESCRIPTION,
	authors: [{ name: "Mazhuga Sergei", url: BASE_URL }],
	creator: "Mazhuga Sergei",
	keywords: [
		"software developer",
		"web development",
		"frontend",
		"full-stack",
		"portfolio",
		LOCATION.city.toLowerCase(),
		LOCATION.country.toLowerCase(),
	],
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
		description: DESCRIPTION_SHORT,
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
		google: "DmO9E-54YBJoBz2iTfzU-oqiHiLvt21sRXtARTNbGvM",
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
