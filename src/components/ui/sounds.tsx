"use client"
import { useSounds } from "@/hooks/use-sounds"
import { cn } from "@/utils/classname"
import Link from "next/link"
import { ComponentProps } from "react"
import { Button } from "./button"

export function SoundButton({
	onMouseEnter,
	onClick,
	disabled,
	children,
	className,
	...props
}: ComponentProps<typeof Button>) {
	const { playHover, playClick, playDisabled } = useSounds()

	return (
		<span className={cn("relative isolate", className)}>
			<div
				className={cn(
					"absolute inset-0 z-0 rounded-[inherit]",
					disabled ? "pointer-events-auto" : "pointer-events-none"
				)}
				onClick={() => {
					if (disabled) playDisabled()
				}}
			/>
			<Button
				onMouseEnter={(e) => {
					playHover()
					onMouseEnter?.(e)
				}}
				onClick={(e) => {
					playClick()
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
	const { playHover, playClick, playDisabled } = useSounds()

	return (
		<Link
			onMouseEnter={(e) => {
				playHover()
				onMouseEnter?.(e)
			}}
			onClick={(e) => {
				playClick()
				onClick?.(e)
			}}
			{...props}
		>
			{children}
		</Link>
	)
}
