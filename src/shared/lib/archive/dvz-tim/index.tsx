import Image from "@/components/archive/image"
import { Paragraph } from "@/components/archive/paragraph"
import Post from "@/components/archive/post"
import Section from "@/components/archive/section"
import contact_form from "./images/contact-form.jpg"
import page from "./images/page.jpg"

export const DvzTim = {
	id: "dvz-tim",
	title: "DVZ-TIM",
	children: (
		<Post title="DVZ-TIM" subtitle="October 2024">
			<Section id="" title="The story">
				<Paragraph>
					DVZ-TIM is one of the three companies within Molotov Group. I created its corporate website from scratch,
					designing and implementing the full structure, layout, and components.
				</Paragraph>
				<Image src={page} alt="DVZ-TIM website" />
			</Section>

			<Section id="contact-form" title="Contact Form">
				<Paragraph>
					The website includes a contact form for direct communication with the company. It handles input validation and
					ensures messages can be submitted quickly and reliably.
				</Paragraph>
				<Image src={contact_form} alt="contact form" />
			</Section>
		</Post>
	),
}
