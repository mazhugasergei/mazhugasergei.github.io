import type { ComponentProps, ReactNode } from "react"

export interface CarouselSlide {
	label: string
	title: string
	content: ReactNode
	href?: string
}

export interface CarouselProps extends ComponentProps<"div"> {}
