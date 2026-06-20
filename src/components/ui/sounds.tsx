"use client"
import { useSounds } from "@/hooks/use-sounds"
import Link from "next/link"
import { ComponentProps } from "react"
import { Button } from "./button"

export function SoundButton({ onMouseEnter, onClick, disabled, ...props }: ComponentProps<typeof Button>) {
	const { playHover, playClick, playDisabled } = useSounds()

	return (
		<Button
			onMouseEnter={(e) => {
				playHover()
				onMouseEnter?.(e)
			}}
			onClick={(e) => {
				if (disabled) {
					playDisabled()
					return
				}
				playClick()
				onClick?.(e)
			}}
			disabled={disabled}
			{...props}
		/>
	)
}

export function SoundLink({ children, ...props }: ComponentProps<typeof Link>) {
	const { playHover, playClick } = useSounds()

	return (
		<Link onMouseEnter={playHover} onClick={playClick} {...props}>
			{children}
		</Link>
	)
}
