"use client"

import { SoundKey, SOUNDS } from "@/hooks/use-sounds"
import { createContext, useEffect, useRef, useState } from "react"

interface SoundsContext {
	soundsEnabled: boolean
	toggle: () => void
	play: (key: SoundKey) => void
}

export const SoundsContext = createContext<SoundsContext | null>(null)

const SOUND_UNAVAILABLE = Symbol("unavailable")

export function SoundsProvider({ children }: { children: React.ReactNode }) {
	const audioRefs = useRef<Partial<Record<SoundKey, HTMLAudioElement | typeof SOUND_UNAVAILABLE>>>({})
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
		if (audioRefs.current[key] === undefined) {
			const paths = SOUNDS[key]
			const tryNext = (index: number) => {
				if (index >= paths.length) {
					audioRefs.current[key] = SOUND_UNAVAILABLE
					return
				}
				const audio = new Audio(paths[index])
				audio.onerror = () => {
					audioRefs.current[key] = undefined // reset so next error can try next path
					tryNext(index + 1)
				}
				audioRefs.current[key] = audio // store immediately
			}
			tryNext(0)
		}

		const audio = audioRefs.current[key]
		if (!audio || audio === SOUND_UNAVAILABLE) return

		const clone = audio.cloneNode() as HTMLAudioElement
		clone.play().catch(() => {})
	}

	return <SoundsContext.Provider value={{ soundsEnabled, toggle, play }}>{children}</SoundsContext.Provider>
}
