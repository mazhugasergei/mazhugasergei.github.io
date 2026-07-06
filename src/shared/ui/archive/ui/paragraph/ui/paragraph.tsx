import { preventOrphan } from "@/shared/utils/text"
import { ParagraphProps } from ".."

export const Paragraph = ({ children, ...props }: ParagraphProps) => {
	return <p {...props}>{preventOrphan(children)}</p>
}
