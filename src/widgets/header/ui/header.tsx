import { LOCATION, SHOW_UI_OUTLINE } from "@/shared/config/constants"
import { buttonVariants } from "@/shared/ui/button"
import { Paragraph } from "@/shared/ui/paragraph"
import { SoundLink } from "@/shared/ui/sound-link"
import { cn } from "@/shared/utils"
import { CustomAnimatedText } from "@/widgets/custom-animated-text"
import { DisableSoundsButton } from "@/widgets/disable-sounds-button"

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

				<div className="flex gap-3">
					{/* <SoundButton variant="outline" size="icon" disabled>
						oh
					</SoundButton> */}
					<DisableSoundsButton />
					<SoundLink href="/archive" className={buttonVariants({ className: "rounded-full!" })}>
						See Archive
					</SoundLink>
				</div>
			</div>

			<Paragraph className="text-muted-foreground max-w-md text-xs text-pretty">
				A software developer based in {LOCATION.city}, {LOCATION.country}, occasionally residing in Incheon, South
				Korea. I craft intuitive, purposeful websites and web services with a focus on clarity and usability. Passionate
				about open source and committed to shaping the future of the web through thoughtful, collaborative development.
			</Paragraph>
		</header>
	)
}
