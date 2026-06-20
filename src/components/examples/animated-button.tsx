"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import React from "react"

const LABELS = ["Click me", "I'm clicked!", "Clicked again!"]

export function AnimatedButtonExample() {
	const [index, setIndex] = React.useState(0)

	return <AnimatedButton onClick={() => setIndex((prev) => (prev + 1) % LABELS.length)}>{LABELS[index]}</AnimatedButton>
}
