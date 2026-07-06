import { cn } from "@/shared/utils"
import { SectionHeader } from "@/widgets/archive"
import { SectionProps } from ".."

export default function Section(props: SectionProps) {
	return (
		<section {...props} id={props.id} className={cn("scroll-m-22 space-y-4", props.className)}>
			{props.title && <SectionHeader id={props.id} title={props.title} />}

			{props.children}
		</section>
	)
}
