"use client"

import { SoundButton } from "@/components/ui/sounds"
import { useSounds } from "@/hooks/use-sounds"
import { ComponentProps } from "react"

const SpeakerIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
		<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
	</svg>
)

const SpeakerOffIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
		<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
		<line x1="23" y1="1" x2="1" y2="23" />
	</svg>
)

export function DisableSoundsButton(props: ComponentProps<typeof SoundButton>) {
	const { enabled, toggle } = useSounds()

	return (
		<SoundButton variant="outline" size="icon" onClick={toggle} {...props}>
			{enabled ? <SpeakerIcon /> : <SpeakerOffIcon />}
		</SoundButton>
	)
}
