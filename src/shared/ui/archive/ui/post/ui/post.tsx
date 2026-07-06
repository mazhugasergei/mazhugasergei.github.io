import { mainSansFont } from "@/app/styles/fonts"
import { cn } from "@/shared/utils"
import { DisableSoundsButton } from "@/widgets/disable-sounds-button"
import { PostProps } from ".."

export default function Post(props: PostProps) {
	return (
		<article {...props} className={cn("space-y-10 py-10", props.className)}>
			<header className="flex items-center justify-between gap-4">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">{props.title}</h1>
					<p className="text-muted-foreground">{props.subtitle}</p>
				</div>

				<DisableSoundsButton />
			</header>

			<div className={cn(mainSansFont.className, "space-y-10 text-base")}>{props.children}</div>
		</article>
	)
}
