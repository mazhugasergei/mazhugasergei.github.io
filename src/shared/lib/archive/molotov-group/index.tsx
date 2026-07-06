import Image from "@/components/archive/image"
import { Paragraph } from "@/components/archive/paragraph"
import Post from "@/components/archive/post"
import Section from "@/components/archive/section"
import molotov_group from "./images/molotov-group.jpg"

export const MolotovGroup = {
	id: "molotov-group",
	title: "Molotov Group",
	children: (
		<Post title="Molotov Group" subtitle="October 2024">
			<Section id="" title="The story">
				<Paragraph>
					Molotov Group is a union of three companies. My task was to create a corporate website that serves as a
					central hub, providing contact information and direct links to each company’s website.
				</Paragraph>
				<Image src={molotov_group} alt="Molotov Group" />
			</Section>
		</Post>
	),
}
