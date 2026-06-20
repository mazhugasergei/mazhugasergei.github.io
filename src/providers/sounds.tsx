"use client"

import { SOUNDS } from "@/lib/constants/data"
import { SoundKey } from "@/lib/types"
import { createContext, useEffect, useRef, useState } from "react"

interface SoundsContext {
	enabled: boolean
	toggle: () => void
	play: (key: SoundKey) => void
}

export const SoundsContext = createContext<SoundsContext | null>(null)

export function SoundsProvider({ children }: { children: React.ReactNode }) {
	const audioRefs = useRef<Partial<Record<SoundKey, HTMLAudioElement>>>({})
	const [enabled, setEnabled] = useState(() => {
		// Read once at init — avoid the null flash
		if (typeof window === "undefined") return true
		return localStorage.getItem("sounds-enabled") !== "false"
	})

	// Preload all sounds once on mount
	useEffect(() => {
		;(Object.keys(SOUNDS) as SoundKey[]).forEach((key) => {
			const audio = new Audio(SOUNDS[key])
			audio.preload = "auto"
			audioRefs.current[key] = audio
		})
	}, [])

	const toggle = () => {
		setEnabled((prev) => {
			const next = !prev
			localStorage.setItem("sounds-enabled", String(next))
			return next
		})
	}

	const play = (key: SoundKey) => {
		if (!enabled) return
		const audio = audioRefs.current[key]
		if (!audio) return
		audio.currentTime = 0
		audio.play().catch(() => {})
	}

	return <SoundsContext.Provider value={{ enabled, toggle, play }}>{children}</SoundsContext.Provider>
}
