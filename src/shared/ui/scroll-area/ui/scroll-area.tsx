import { ScrollAreaProps } from ".."
import styles from "./scroll-area.module.css"

export function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
	return (
		<div className={`${styles.scrollbar} overflow-auto ${className || ""}`} {...props}>
			{children}
		</div>
	)
}
