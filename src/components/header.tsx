import { CustomAnimatedText } from "@/components/custom-animated-text"
import { Paragraph } from "@/components/paragraph"
import { buttonVariants } from "@/components/ui/button"
import { SHOW_UI_OUTLINE } from "@/lib/constants/config"
import { LOCATION } from "@/lib/constants/data"
import { cn } from "@/utils/classname"

export function Header({ className, ...props }: React.ComponentProps<"header">) {
	return (
		<header className={cn("", className)} {...props}>
			<div className="flex items-center justify-between gap-2">
				<div className="mb-3">
					<CustomAnimatedText
						className={cn(
							"text-muted-foreground mb-2 text-sm tracking-widest uppercase",
							SHOW_UI_OUTLINE && "border-r border-b"
						)}
					>
						Software Engineer
					</CustomAnimatedText>
					<h1 className="text-3xl leading-snug font-medium">
						<CustomAnimatedText>Mazhuga</CustomAnimatedText> <CustomAnimatedText>Sergei</CustomAnimatedText>
					</h1>
				</div>

				<a href="/CV - Sergei Mazhuga.pdf" download className={buttonVariants()}>
					View CV
				</a>
			</div>

			<Paragraph className="text-muted-foreground max-w-md text-xs text-pretty">
				A software developer based in {LOCATION.city}, {LOCATION.country}, occasionally residing in Incheon, South
				Korea. I craft intuitive, purposeful websites and web services with a focus on clarity and usability. Passionate
				about open source and committed to shaping the future of the web through thoughtful, collaborative development.
			</Paragraph>
		</header>
	)
}
