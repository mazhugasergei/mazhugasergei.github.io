"use client"

import { SoundKey, SOUNDS } from "@/hooks/use-sounds"
import { createContext, useEffect, useRef, useState } from "react"

interface SoundsContext {
	soundsEnabled: boolean
	soundsReady: boolean
	toggle: () => void
	play: (key: SoundKey) => void
}

export const SoundsContext = createContext<SoundsContext | null>(null)

export function SoundsProvider({ children }: { children: React.ReactNode }) {
	const audioRefs = useRef<Partial<Record<SoundKey, HTMLAudioElement>>>({})
	const [soundsEnabled, setSoundsEnabled] = useState(true)
	const [soundsReady, setSoundsReady] = useState(false)

	// Preload all sounds once on mount
	useEffect(() => {
		;(Object.keys(SOUNDS) as SoundKey[]).forEach((key) => {
			const paths = SOUNDS[key]

			const tryNext = (index: number) => {
				if (index >= paths.length) return
				const audio = new Audio(paths[index])
				audio.preload = "auto"
				audio.onerror = () => tryNext(index + 1)
				audio.oncanplaythrough = () => {
					audioRefs.current[key] = audio
				}
			}

			setSoundsEnabled(localStorage.getItem("sounds-enabled") !== "false")

			tryNext(0)
		})

		setSoundsReady(true)
	}, [])

	const toggle = () => {
		setSoundsEnabled((prev) => {
			const next = !prev
			localStorage.setItem("sounds-enabled", String(next))
			return next
		})
	}

	const play = (key: SoundKey) => {
		const audio = audioRefs.current[key]
		if (!audio) return
		audio.currentTime = 0
		audio.play().catch(() => {})
	}

	return (
		<SoundsContext.Provider value={{ soundsEnabled, soundsReady, toggle, play }}>{children}</SoundsContext.Provider>
	)
}
