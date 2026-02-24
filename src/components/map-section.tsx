"use client"

import map from "@/assets/images/map.png"
import { cn } from "@/utils"
import { MapPin } from "lucide-react"
import Image from "next/image"
import React from "react"

export const MapSection = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	const [time, setTime] = React.useState("--:-- AM")

	React.useEffect(() => {
		const update = () => {
			const now = new Date()
			const time = now.toLocaleTimeString("en-US", {
				timeZone: "Asia/Vladivostok",
				hour: "2-digit",
				minute: "2-digit",
			})
			setTime(time)
		}

		update()
		const interval = setInterval(update, 60000)
		return () => clearInterval(interval)
	}, [])

	return (
		<aside className={cn("flex flex-col items-end justify-end gap-2", className)} {...props}>
			<figure className="relative aspect-[5/3] w-full max-w-[25rem] overflow-hidden rounded-md border">
				<Image src={map} alt="Map showing Vladivostok location" width={400} className="max-w-[25rem] object-cover" />
				<figcaption className="absolute right-2 bottom-2 rounded-md bg-black px-4 py-2 text-[.65rem] font-bold whitespace-nowrap text-white">
					{time}
				</figcaption>
			</figure>

			<address className="flex items-center justify-end gap-1 text-sm not-italic">
				<MapPin size={12} />
				<span>Vladivostok, Primorsky Krai</span>
			</address>
		</aside>
	)
}
