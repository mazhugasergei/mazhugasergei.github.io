import Image from "@/components/archive/image"
import { Paragraph } from "@/components/archive/paragraph"
import Post from "@/components/archive/post"
import Section from "@/components/archive/section"
import catalog_categories from "./images/catalog_categories.jpg"
import catalog_list from "./images/catalog_list.jpg"
import contact_form from "./images/contact_form.jpg"
import hero from "./images/hero.jpg"

export const Mspvl = {
	id: "mspvl",
	title: "Монтажстрой Подряд",
	children: (
		<Post title="Монтажстрой Подряд" subtitle="October 2024">
			<Section id="" title="The story">
				<Paragraph>
					Монтажстрой Подряд (MSPVL) was created from scratch as a standalone corporate website. I led the full
					front-end implementation, building all core sections, layout, and components from the ground up.
				</Paragraph>
			</Section>

			<Section id="hero" title="Hero">
				<Paragraph>
					The homepage features a hero section that establishes a strong corporate identity and clear messaging.
				</Paragraph>
				<Image src={hero} alt="hero" />
			</Section>

			<Section id="contact_form" title="Contact Form">
				<Paragraph>
					An integrated contact form was implemented for direct client communication. The form handles validation and
					provides a straightforward user experience.
				</Paragraph>
				<Image src={contact_form} alt="contact form" />
			</Section>

			<Section id="catalog_categories" title="Catalog Categories">
				<Paragraph>
					The catalog categories section was designed to give users a clear entry point into the product structure. Each
					category links to filtered catalog list.
				</Paragraph>
				<Image src={catalog_categories} alt="catalog categories" />
			</Section>

			<Section id="catalog_list" title="Catalog List">
				<Paragraph>
					The catalog list presents records in a straightforward vertical format. Each record includes all necessary
					details directly, without requiring clicks, ensuring users get complete information at a glance.
				</Paragraph>
				<Image src={catalog_list} alt="catalog list" />
			</Section>
		</Post>
	),
}
