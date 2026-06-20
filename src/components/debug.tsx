"use client"

import { useSounds } from "@/hooks/use-sounds"

export function Debug() {
	const { soundsReady } = useSounds()

	return (
		<div className="fixed top-2 left-1/2 z-50 -translate-x-1/2 rounded bg-black px-2 py-1 font-mono text-xs text-white">
			sounds: {soundsReady ? "✅ soundsReady" : "⏳ loading"}
		</div>
	)
}
