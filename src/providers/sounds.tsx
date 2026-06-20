"use client"

import { SoundKey, SOUNDS } from "@/hooks/use-sounds"
import { createContext, useEffect, useRef, useState } from "react"

interface SoundsContext {
	soundsEnabled: boolean
	toggle: () => void
	play: (key: SoundKey) => void
}

export const SoundsContext = createContext<SoundsContext | null>(null)

export function SoundsProvider({ children }: { children: React.ReactNode }) {
	const audioRefs = useRef<Partial<Record<SoundKey, HTMLAudioElement>>>({})
	const [soundsEnabled, setSoundsEnabled] = useState(true)

	useEffect(() => {
		setSoundsEnabled(localStorage.getItem("sounds-enabled") !== "false")
	}, [])

	const toggle = () => {
		setSoundsEnabled((prev) => {
			const next = !prev
			localStorage.setItem("sounds-enabled", String(next))
			return next
		})
	}

	const play = (key: SoundKey) => {
		if (!audioRefs.current[key]) {
			const paths = SOUNDS[key]
			const tryNext = (index: number) => {
				if (index >= paths.length) return
				const audio = new Audio(paths[index])
				audio.onerror = () => tryNext(index + 1)
				audioRefs.current[key] = audio
			}
			tryNext(0)
		}

		const audio = audioRefs.current[key]
		if (!audio) return
		audio.currentTime = 0
		audio.play().catch(() => {})
	}

	return <SoundsContext.Provider value={{ soundsEnabled, toggle, play }}>{children}</SoundsContext.Provider>
}
