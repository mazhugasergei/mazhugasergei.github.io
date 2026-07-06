"use client"

import { useSounds } from "@/shared/lib/hooks/use-sounds"
import Link from "next/link"
import { ComponentProps } from "react"

export function SoundLink({ children, onPointerEnter, onClick, ...props }: ComponentProps<typeof Link>) {
	const { soundsEnabled, playSound } = useSounds()

	return (
		<Link
			onPointerEnter={(e) => {
				soundsEnabled && playSound("hover")
				onPointerEnter?.(e)
			}}
			onClick={(e) => {
				soundsEnabled && playSound("click")
				onClick?.(e)
			}}
			{...props}
		>
			{children}
		</Link>
	)
}
