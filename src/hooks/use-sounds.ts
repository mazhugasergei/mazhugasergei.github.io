import { useEffect, useRef, useState } from "react"

type SoundKey = "hover" | "click" | "disabled"

const SOUNDS: Record<SoundKey, string> = {
	hover: "/sounds/hover.mp3",
	click: "/sounds/click.mp3",
	disabled: "/sounds/disabled_click.mp3",
}

export function useSounds() {
	const audioRefs = useRef<Partial<Record<SoundKey, HTMLAudioElement>>>({})

	const [enabled, setEnabled] = useState<boolean | null>(null)

	useEffect(() => {
		setEnabled(localStorage.getItem("sounds-enabled") !== "false")
	}, [])

	const toggle = () => {
		setEnabled((prev) => {
			const next = !prev
			localStorage.setItem("sounds-enabled", String(next))
			return next
		})
	}

	const play = (key: SoundKey) => {
		if (typeof window === "undefined") return
		if (enabled === null) return
		if (localStorage.getItem("sounds-enabled") === "false") return

		if (!audioRefs.current[key]) {
			audioRefs.current[key] = new Audio(SOUNDS[key])
		}

		const audio = audioRefs.current[key]!
		audio.currentTime = 0
		audio.play().catch(() => {})
	}

	return {
		enabled,
		toggle,
		playHover: () => play("hover"),
		playClick: () => play("click"),
		playDisabled: () => play("disabled"),
	}
}
