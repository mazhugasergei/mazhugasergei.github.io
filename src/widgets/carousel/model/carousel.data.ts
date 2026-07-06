import { AnimatedButtonExample } from "@/shared/ui/animated-button"
import { AudioPlayer } from "@/widgets/audio-player"
import { AudioRecorder } from "@/widgets/audio-recorder"
import { createElement } from "react"
import type { CarouselSlide } from "./carousel.types"

export const carouselSlides: CarouselSlide[] = [
	{
		label: "Latest Release",
		title: "Audio Player",
		content: createElement(AudioPlayer),
		href: "/components/audio-player",
	},
	{
		label: "New Component",
		title: "Audio Recorder",
		content: createElement(AudioRecorder),
		href: "/components/audio-recorder",
	},
	{
		label: "Open Source",
		title: "Personal UI Library",
		content: createElement(AnimatedButtonExample),
		href: "/components",
	},
]
