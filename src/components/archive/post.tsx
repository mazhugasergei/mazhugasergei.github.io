import { mainSansFont } from "@/fonts"
import { cn } from "@/utils"
import { ComponentProps } from "react"

interface PostProps extends ComponentProps<"div"> {
	title: string
	subtitle: string
}

export default function Post(props: PostProps) {
	return (
		<div {...props} className={cn("space-y-10 py-10", props.className)}>
			<div className="space-y-2">
				<h1 className="text-4xl font-bold">{props.title}</h1>
				<p className="text-muted-foreground">{props.subtitle}</p>
			</div>

			<div className={cn(mainSansFont.className, "space-y-10 text-base")}>{props.children}</div>
		</div>
	)
}
