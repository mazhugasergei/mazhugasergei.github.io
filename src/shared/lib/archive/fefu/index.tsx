import Image from "@/shared/ui/archive/image/image"
import { Paragraph } from "@/shared/ui/archive/paragraph/paragraph"
import Post from "@/shared/ui/archive/post/post"
import Section from "@/widgets/archive/ui/section/ui/section"
import events from "./images/events.jpg"
import hero from "./images/hero.jpg"
import main from "./images/main.jpg"

export const Fefu = {
	id: "fefu",
	title: "FEFU Open Day",
	children: (
		<Post title="FEFU Open Day" subtitle="March 2023">
			<Image src={hero} alt="hero" />

			<Section id="" title="The story">
				<Paragraph>
					I attended a 2D/3D animation and video production studio at Far Eastern Federal University (FEFU), where the
					advertising department requested I create a website for the university's upcoming Open Day event. The
					website's purpose was to engage prospective students, provide essential event details, and showcase FEFU’s
					facilities and programs.
				</Paragraph>
				<Image src={main} alt="main" />
			</Section>

			<Section id="events" title="Events Map Page">
				<Image src={events} alt="events" />
			</Section>
		</Post>
	),
}
