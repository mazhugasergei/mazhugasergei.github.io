"use client"

import { BASE_URL } from "@/lib/constants/config"
import { cn } from "@/utils"
import { CopyCheckIcon, EggIcon, HashIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { ComponentProps, useEffect, useRef, useState } from "react"

interface Props extends ComponentProps<"header"> {
	id: string
	title: string
}

export function Header(props: Props) {
	const pathname = usePathname()
	const headerRef = useRef<HTMLDivElement>(null)
	const [clicked, setClicked] = useState(false)
	const copiedTimes = useRef(0)
	const copyTimeout = useRef<NodeJS.Timeout>()

	useEffect(() => {
		const header = headerRef.current
		if (!header) return

		header.addEventListener("click", () => {
			const id = props.id
			navigator.clipboard.writeText(`${BASE_URL}${pathname}${pathname.substring(0, pathname.indexOf("#"))}#${id}`)
			setClicked(true)
		})
	}, [])

	useEffect(() => {
		if (!clicked) {
			copiedTimes.current = copiedTimes.current === 5 ? 1 : copiedTimes.current + 1
		}

		if (clicked) {
			if (copyTimeout.current) {
				clearTimeout(copyTimeout.current)
			}

			copyTimeout.current = setTimeout(() => {
				copiedTimes.current = 0
			}, 5000)

			setTimeout(() => {
				setClicked(false)
			}, 1000)
		}
	}, [clicked])

	return (
		<header {...props} ref={headerRef} className={cn("group relative cursor-pointer", props.className)}>
			<h2 className="text-3xl font-bold">{props.title}</h2>

			<div className="text-muted-foreground absolute top-0 -left-5.5">
				<CopyCheckIcon
					className={cn(
						"absolute top-1.5 size-4 scale-80 opacity-0 transition duration-150",
						clicked && copiedTimes.current !== 5 && "scale-100 opacity-100 delay-100 duration-250"
					)}
				/>
				<EggIcon
					className={cn(
						"absolute top-1.5 size-4 scale-80 opacity-0 transition duration-150",
						clicked && copiedTimes.current === 5 && "scale-100 opacity-100 delay-100 duration-250"
					)}
				/>
				<HashIcon
					className={cn(
						"absolute top-1.5 size-4 opacity-0 transition duration-250 group-hover:opacity-100",
						clicked && "scale-80 !opacity-0"
					)}
				/>
			</div>
		</header>
	)
}
