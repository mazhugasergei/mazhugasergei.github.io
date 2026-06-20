"use client"

import { SoundsContext } from "@/providers/sounds"
import { useContext } from "react"

export type SoundKey = "hover" | "click" | "disabled" | "sound-on" | "sound-off"

const SOUNDS_PACK = "electro"

export const SOUNDS: Record<SoundKey, string[]> = {
	hover: ["/sounds/" + SOUNDS_PACK + "/hover.mp3"],
	click: ["/sounds/" + SOUNDS_PACK + "/click.mp3"],
	disabled: ["/sounds/" + SOUNDS_PACK + "/disabled.mp3"],
	"sound-on": ["/sounds/" + SOUNDS_PACK + "/sound-on.mp3", "/sounds/" + SOUNDS_PACK + "/click.mp3"],
	"sound-off": ["/sounds/" + SOUNDS_PACK + "/sound-off.mp3", "/sounds/" + SOUNDS_PACK + "/click.mp3"],
}

export function useSounds() {
	const ctx = useContext(SoundsContext)
	if (!ctx) throw new Error("useSounds must be used within SoundsProvider")
	return {
		soundsEnabled: ctx.soundsEnabled,
		soundsReady: ctx.soundsReady,
		toggleSounds: ctx.toggle,
		playSound: (key: SoundKey) => ctx.play(key),
	}
}
