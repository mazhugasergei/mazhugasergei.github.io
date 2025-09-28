import bg from "@/assets/images/bg.jpg"
import noise from "@/assets/images/noise.png"
import "@/assets/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { BASE_URL } from "@/lib/constants/config"
import type { Metadata } from "next"
import Image from "next/image"

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
			<body className="relative flex min-h-screen flex-col select-none">
				<ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
					<NoiseOverlay />
					<BG />
					<div className="grid min-h-screen p-6 text-xs">{children}</div>
				</ThemeProvider>
			</body>
		</html>
	)
}

const NoiseOverlay = () => (
	<div
		className="pointer-events-none absolute z-50 h-full w-full object-cover opacity-12"
		style={{
			backgroundImage: `url(${noise.src})`,
			backgroundSize: "200px 200px",
		}}
	/>
)

const BG = () => (
	<div className="absolute isolate -z-10 h-full w-full">
		<Image
			src={bg}
			alt=""
			placeholder="blur"
			className="absolute h-full w-full object-cover brightness-[.15] grayscale select-none"
		/>
		<div className="absolute inset-0 backdrop-blur" />
	</div>
)
