"use client"

import { SoundsContext } from "@/providers/sounds"
import { useContext } from "react"

export function useSounds() {
	const ctx = useContext(SoundsContext)
	if (!ctx) throw new Error("useSounds must be used within SoundsProvider")
	return {
		enabled: ctx.enabled,
		toggle: ctx.toggle,
		playHover: () => ctx.play("hover"),
		playClick: () => ctx.play("click"),
		playDisabled: () => ctx.play("disabled"),
	}
}
