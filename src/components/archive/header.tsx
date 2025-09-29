"use client"

import { cn } from "@/utils"
import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"
import { ComponentProps, useEffect, useState } from "react"

interface Props extends ComponentProps<"header"> {
	title: string
}

export function Header({ title, ...props }: Props) {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		handleScroll()
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<header
			{...props}
			className={cn(
				"bg-background/80 backdrop-blur-safe sticky top-0 z-50 py-4",
				scrollY > 10 && "border-border border-b",
				props.className
			)}
		>
			<div className="mx-auto flex items-center gap-6 px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
				<Link href={"/"} className="flex items-center gap-1">
					<ChevronLeftIcon size={18} />
				</Link>

				<span className={cn("truncate text-lg font-bold opacity-0 transition", scrollY > 100 && "opacity-100")}>
					{title}
				</span>
			</div>
		</header>
	)
}
