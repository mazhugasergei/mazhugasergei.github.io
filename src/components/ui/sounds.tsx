"use client"
import { SoundKey, useSounds } from "@/hooks/use-sounds"
import { cn } from "@/utils/classname"
import Link from "next/link"
import { ComponentProps } from "react"
import { Button } from "./button"

interface SoundButtonProps extends ComponentProps<typeof Button> {
	clickSound?: SoundKey
}

export function SoundButton({
	onPointerEnter,
	onPointerDown,
	onKeyDown,
	onClick,
	disabled,
	children,
	className,
	clickSound = "click",
	...props
}: SoundButtonProps) {
	const { soundsEnabled, playSound } = useSounds()

	const shouldPlay = (key: SoundKey) => soundsEnabled || key === "sound-on" || key === "sound-off"

	return (
		<span className={cn("relative isolate", className)}>
			<div
				className={cn(
					"absolute inset-0 z-0 rounded-[inherit]",
					disabled ? "pointer-events-auto" : "pointer-events-none"
				)}
				onPointerDown={() => {
					if (disabled && soundsEnabled) playSound("disabled")
				}}
			/>
			<Button
				onPointerEnter={(e) => {
					soundsEnabled && playSound("hover")
					onPointerEnter?.(e)
				}}
				onClick={(e) => {
					if (shouldPlay(clickSound)) playSound(clickSound)
					onClick?.(e)
				}}
				disabled={disabled}
				className={className}
				{...props}
			>
				{children}
			</Button>
		</span>
	)
}

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
