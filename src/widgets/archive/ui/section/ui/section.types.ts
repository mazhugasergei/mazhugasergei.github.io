import { ComponentProps } from "react"

export interface SectionProps extends ComponentProps<"section"> {
	id: string
	title?: string
}
