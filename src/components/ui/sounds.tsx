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
	onMouseEnter,
	onClick,
	disabled,
	children,
	className,
	clickSound = "click",
	...props
}: SoundButtonProps) {
	const { soundsEnabled, playSound } = useSounds()

	return (
		<span className={cn("relative isolate", className)}>
			<div
				className={cn(
					"absolute inset-0 z-0 rounded-[inherit]",
					disabled ? "pointer-events-auto" : "pointer-events-none"
				)}
				onClick={() => {
					if (soundsEnabled && disabled) playSound("disabled")
				}}
			/>
			<Button
				onMouseEnter={(e) => {
					soundsEnabled && playSound("hover")
					onMouseEnter?.(e)
				}}
				onClick={(e) => {
					soundsEnabled && playSound(clickSound)
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

export function SoundLink({ children, onMouseEnter, onClick, ...props }: ComponentProps<typeof Link>) {
	const { soundsEnabled, playSound } = useSounds()

	return (
		<Link
			onMouseEnter={(e) => {
				soundsEnabled && playSound("hover")
				onMouseEnter?.(e)
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
