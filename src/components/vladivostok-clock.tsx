"use client"

import map from "@/assets/images/map.png"
import { cn } from "@/utils"
import { MapPin } from "lucide-react"
import Image from "next/image"
import React from "react"

export const VladivostokClock = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	const [time, setTime] = React.useState("00:00 AM")

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
		<div className={cn("flex flex-col items-end justify-end gap-2", className)} {...props}>
			<div className="relative">
				<Image
					src={map}
					alt="map"
					width={200}
					height={200}
					className="aspect-[5/3] w-auto rounded-md border object-cover"
				/>
				<span className="absolute right-2 bottom-2 rounded-full bg-black px-4 py-2 text-[.65rem] font-bold whitespace-nowrap text-white">
					{time}
				</span>
			</div>
			<div className="flex items-center justify-end gap-1 text-sm">
				<MapPin size={12} />
				<span>Vladivostok, Primorsky Krai</span>
			</div>
		</div>
	)
}
