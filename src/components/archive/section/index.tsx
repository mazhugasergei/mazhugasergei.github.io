import { cn } from "@/utils"
import { ComponentProps } from "react"
import { Header } from "./header"

interface Props extends ComponentProps<"section"> {
	id: string
	title?: string
}

export default function Section(props: Props) {
	return (
		<section {...props} id={props.id} className={cn("space-y-4", props.className)}>
			{props.title && <Header id={props.id} title={props.title} />}

			{props.children}
		</section>
	)
}
