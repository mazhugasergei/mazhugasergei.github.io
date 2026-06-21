"use client"

import { Button } from "@/components/ui/button"
import { SoundButton } from "@/components/ui/sounds"
import { useSounds } from "@/hooks/use-sounds"
import { cn } from "@/utils/classname"
import { Volume2Icon, VolumeOffIcon } from "lucide-react"
import { ComponentProps } from "react"

export function DisableSoundsButton({ onClick, className, ...props }: ComponentProps<typeof Button>) {
	const { soundsEnabled, toggleSounds, playSound } = useSounds()

	return (
		<SoundButton
			aria-label={soundsEnabled ? "Mute sounds" : "Unmute sounds"}
			variant="outline"
			size="icon"
			clickSound={soundsEnabled ? "sound-off" : "sound-on"}
			onMouseEnter={() => soundsEnabled && playSound("hover")}
			onClick={(e) => {
				toggleSounds()
				onClick?.(e)
			}}
			className={cn("text-muted-foreground rounded-full! bg-transparent!", className)}
			{...props}
		>
			{soundsEnabled ? <Volume2Icon className="size-3.5" /> : <VolumeOffIcon className="size-3.5" />}
		</SoundButton>
	)
}
