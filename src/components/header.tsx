import { CustomAnimatedText } from "@/components/custom-animated-text"
import { Paragraph } from "@/components/paragraph"
import { buttonVariants } from "@/components/ui/button"
import { LOCATION } from "@/lib/constants/data"

export function Header() {
	return (
		<header className="animate-slide-in-x">
			<div className="flex items-center justify-between gap-2">
				<div>
					<CustomAnimatedText className="text-muted-foreground mb-2 text-sm tracking-widest uppercase">
						Software Engineer
					</CustomAnimatedText>
					<h1 className="mb-3 text-3xl leading-snug font-medium">
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
