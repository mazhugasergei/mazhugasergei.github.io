import { preventOrphan } from "@/shared/utils/text"
import { ComponentProps } from "react"

interface Props extends ComponentProps<"p"> {
	children: string
}

export const Paragraph = ({ children, ...props }: Props) => {
	return <p {...props}>{preventOrphan(children)}</p>
}
