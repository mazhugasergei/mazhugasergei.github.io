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
		try {
			setSoundsEnabled(localStorage.getItem("sounds-enabled") !== "false")
		} catch (e) {
			setSoundsEnabled(true)
		}
	}, [])

	const toggle = () => {
		setSoundsEnabled((prev) => {
			const next = !prev
			try {
				localStorage.setItem("sounds-enabled", String(next))
			} catch (e) {
				// ignore
			}
			return next
		})
	}

	// simple per-key rate limiting to avoid massive overlapping clones
	const lastPlayedRef = useRef<Partial<Record<SoundKey, number>>>({})

	const play = (key: SoundKey) => {
		// allow on/off feedback sounds even when sounds are currently disabled
		if (!soundsEnabled && key !== "sound-on" && key !== "sound-off") return

		const now = Date.now()
		const last = lastPlayedRef.current[key] ?? 0
		if (now - last < 80) return
		lastPlayedRef.current[key] = now

		if (audioRefs.current[key] === undefined) {
			const paths = SOUNDS[key]
			const tryNext = (index: number) => {
				if (index >= paths.length) {
					audioRefs.current[key] = SOUND_UNAVAILABLE
					return
				}
				const audio = new Audio(paths[index])
				audio.preload = "auto"
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
		clone.preload = "auto"
		clone.play().catch(() => {})
	}

	return <SoundsContext.Provider value={{ soundsEnabled, toggle, play }}>{children}</SoundsContext.Provider>
}
