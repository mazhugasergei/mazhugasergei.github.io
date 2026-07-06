"use client"

import { useSounds } from "@/shared/lib/hooks/use-sounds"
import { Button } from "@/shared/ui/button"
import { SoundButton } from "@/shared/ui/sound-button"
import { cn } from "@/shared/utils"
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
