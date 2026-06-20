"use client"

import { SoundButton } from "@/components/ui/sounds"
import { useSounds } from "@/hooks/use-sounds"
import { Volume2Icon, VolumeOffIcon } from "lucide-react"
import { ComponentProps } from "react"

export function DisableSoundsButton(props: ComponentProps<typeof SoundButton>) {
	const { enabled, toggle } = useSounds()

	const _enabled = enabled === true || enabled === null

	return (
		<SoundButton
			aria-label={_enabled ? "Mute sounds" : "Unmute sounds"}
			variant="outline"
			size="icon"
			onClick={toggle}
			{...props}
		>
			{_enabled ? <Volume2Icon className="size-3.5" /> : <VolumeOffIcon className="size-3.5" />}
		</SoundButton>
	)
}
