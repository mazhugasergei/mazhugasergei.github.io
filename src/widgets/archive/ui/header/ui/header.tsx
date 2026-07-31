"use client"

import { buttonVariants } from "@/shared/ui/button"
import { SoundLink } from "@/shared/ui/sound-link"
import { cn } from "@/shared/utils"
import { ChevronLeftIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { HeaderProps } from ".."

export function Header({ title, ...props }: HeaderProps) {
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
				<SoundLink
					href={title === "Archive" ? "/" : "/archive"}
					className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
				>
					<ChevronLeftIcon size={18} />
				</SoundLink>

				{title && (
					<span
						className={cn(
							"truncate text-lg font-bold transition",
							title !== "Archive" && "opacity-0",
							scrollY > 100 && "opacity-100"
						)}
					>
						{title}
					</span>
				)}
			</div>
		</header>
	)
}
