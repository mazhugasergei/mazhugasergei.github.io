"use client"

import { SoundKey, SOUNDS } from "@/hooks/use-sounds"
import { createContext, useEffect, useRef, useState } from "react"

interface SoundsContext {
	enabled: boolean
	toggle: () => void
	play: (key: SoundKey) => void
}

export const SoundsContext = createContext<SoundsContext | null>(null)

export function SoundsProvider({ children }: { children: React.ReactNode }) {
	const audioRefs = useRef<Partial<Record<SoundKey, HTMLAudioElement>>>({})
	const [enabled, setEnabled] = useState(true)

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

			setEnabled(localStorage.getItem("sounds-enabled") !== "false")

			tryNext(0)
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
		const audio = audioRefs.current[key]
		if (!audio) return
		audio.currentTime = 0
		audio.play().catch(() => {})
	}

	return <SoundsContext.Provider value={{ enabled, toggle, play }}>{children}</SoundsContext.Provider>
}
