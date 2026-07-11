"use client"

import { useSounds } from "@/shared/lib/hooks/use-sounds"
import { Button } from "@/shared/ui/button"
import { cn } from "@/shared/utils"
import { SoundButtonProps, SoundKey } from "."

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
