import noise from "@/assets/images/noise.png"
import { ComponentProps } from "react"

export default function HomeLayout({ children }: ComponentProps<"div">) {
	return (
		<div className="min-h-100dvh relative flex flex-col select-none">
			<NoiseOverlay />
			<div className="min-h-100dvh grid text-xs">{children}</div>
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
