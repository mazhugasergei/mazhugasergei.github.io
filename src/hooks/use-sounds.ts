"use client"

import { SoundsContext } from "@/providers/sounds"
import { useContext } from "react"

export type SoundKey = "hover" | "click" | "disabled" | "sound-on" | "sound-off"

const SOUNDS_PACK = "electro"

export const SOUNDS: Record<SoundKey, string[]> = {
	hover: ["/sounds/" + SOUNDS_PACK + "/hover.webm"],
	click: ["/sounds/" + SOUNDS_PACK + "/click.webm"],
	disabled: ["/sounds/" + SOUNDS_PACK + "/disabled.webm"],
	"sound-on": ["/sounds/" + SOUNDS_PACK + "/sound-on.webm", "/sounds/" + SOUNDS_PACK + "/click.webm"],
	"sound-off": ["/sounds/" + SOUNDS_PACK + "/sound-off.webm", "/sounds/" + SOUNDS_PACK + "/click.webm"],
}

export function useSounds() {
	const ctx = useContext(SoundsContext)
	if (!ctx) throw new Error("useSounds must be used within SoundsProvider")
	return {
		soundsEnabled: ctx.soundsEnabled,
		toggleSounds: ctx.toggle,
		playSound: (key: SoundKey) => ctx.play(key),
	}
}
