import noise from "@/assets/images/noise.png"
import "@/assets/styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-screen flex-col select-none">
			<NoiseOverlay />
			<BG />
			<div className="grid min-h-screen p-6 text-xs">{children}</div>
		</div>
	)
}

const NoiseOverlay = () => (
	<div
		className="pointer-events-none absolute z-50 h-full w-full object-cover opacity-10"
		style={{
			backgroundImage: `url(${noise.src})`,
			backgroundSize: "200px 200px",
		}}
	/>
)

const BG = () => (
	<div className="absolute isolate -z-10 h-full w-full">
		<div className="absolute inset-0 bg-[#000]" />
		<div className="absolute inset-0 backdrop-blur" />
	</div>
)
