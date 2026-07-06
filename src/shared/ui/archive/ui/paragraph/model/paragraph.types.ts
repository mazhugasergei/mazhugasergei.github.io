import { ComponentProps } from "react"

export interface ParagraphProps extends ComponentProps<"p"> {
	children: string
}
