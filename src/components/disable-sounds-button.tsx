"use client"

import { useSounds } from "@/hooks/use-sounds"
import { Volume2Icon, VolumeOffIcon } from "lucide-react"
import { ComponentProps } from "react"
import { Button } from "./ui/button"
import { SoundButton } from "./ui/sounds"

export function DisableSoundsButton(props: ComponentProps<typeof Button>) {
	const { soundsEnabled, toggleSounds, playSound } = useSounds()

	return (
		<SoundButton
			aria-label={soundsEnabled ? "Mute sounds" : "Unmute sounds"}
			variant="outline"
			size="icon"
			clickSound={"sound-off"}
			onMouseEnter={() => soundsEnabled && playSound("hover")}
			onClick={() => {
				!soundsEnabled && playSound("sound-on")
				toggleSounds()
			}}
			{...props}
		>
			{soundsEnabled ? <Volume2Icon className="size-3.5" /> : <VolumeOffIcon className="size-3.5" />}
		</SoundButton>
	)
}
