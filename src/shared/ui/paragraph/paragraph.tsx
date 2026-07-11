import { cn } from "@/shared/utils"
import { preventOrphan } from "@/shared/utils/text"

export function Paragraph({ children, className, ...props }: React.ComponentProps<"p">) {
	const textContent = typeof children === "string" ? preventOrphan(children) : children
	return (
		<p className={cn("text-sm leading-relaxed", className)} {...props}>
			{textContent}
		</p>
	)
}
