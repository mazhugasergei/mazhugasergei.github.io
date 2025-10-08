import Image from "@/components/archive/image"
import { Paragraph } from "@/components/archive/paragraph"
import Post from "@/components/archive/post"
import Section from "@/components/archive/section"
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
