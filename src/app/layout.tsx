import "@/assets/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { mainFont } from "@/fonts"
import { BASE_URL } from "@/lib/constants/config"
import { cn } from "@/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		template: "%s | Mazhuga Sergei",
		default: "Mazhuga Sergei",
	},
	description: "Frontend developer",
	authors: [{ name: "Mazhuga Sergei", url: BASE_URL }],
	creator: "Mazhuga Sergei",
	openGraph: {
		title: "Mazhuga Sergei",
		description: "Frontend developer",
		images: [
			{
				url: "../assets/images/og.jpg",
				width: 1200,
				height: 630,
				alt: "Mazhuga Sergei",
			},
		],
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(mainFont.className, "relative flex min-h-screen flex-col select-none")}>
				<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
