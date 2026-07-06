import { ComponentProps } from "react"

export interface SectionHeaderProps extends ComponentProps<"header"> {
	id: string
	title: string
}
