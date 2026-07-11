import { ComponentProps } from "react"

export interface PostProps extends ComponentProps<"article"> {
	title: string
	subtitle: string
}
