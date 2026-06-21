"use client"

import { UISoundsContext } from "@/providers/ui-sounds"
import { useContext } from "react"

export type SoundKey = "hover" | "click" | "disabled" | "sound-on" | "sound-off"

const SOUNDS_PACK = "/assets/sfx/main"

export const SOUNDS: Record<SoundKey, string[]> = {
	hover: [SOUNDS_PACK + "/hover.webm"],
	click: [SOUNDS_PACK + "/click.webm"],
	disabled: [SOUNDS_PACK + "/disabled.webm"],
	"sound-on": [
		// SOUNDS_PACK + "/sound-on.webm",
		SOUNDS_PACK + "/click.webm",
	],
	"sound-off": [
		// SOUNDS_PACK + "/sound-off.webm",
		SOUNDS_PACK + "/click.webm",
	],
}

export function useSounds() {
	const ctx = useContext(UISoundsContext)
	if (!ctx) throw new Error("useSounds must be used within SoundsProvider")
	return {
		soundsEnabled: ctx.soundsEnabled,
		toggleSounds: ctx.toggle,
		playSound: (key: SoundKey) => ctx.play(key),
	}
}
