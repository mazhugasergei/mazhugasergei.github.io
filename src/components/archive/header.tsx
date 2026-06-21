"use client"

import { SoundLink } from "@/components/ui/sounds"
import { cn } from "@/utils/classname"
import { ChevronLeftIcon } from "lucide-react"
import { ComponentProps, useEffect, useState } from "react"
import { buttonVariants } from "../ui/button"

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
				<SoundLink href={"/"} className={buttonVariants({ variant: "ghost", size: "icon-sm" })}>
					<ChevronLeftIcon size={18} />
				</SoundLink>

				<span className={cn("truncate text-lg font-bold opacity-0 transition", scrollY > 100 && "opacity-100")}>
					{title}
				</span>
			</div>
		</header>
	)
}
