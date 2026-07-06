import Image from "@/components/archive/image"
import { Paragraph } from "@/components/archive/paragraph"
import Post from "@/components/archive/post"
import Section from "@/components/archive/section"
import catalog_before from "./images/catalog_before.jpg"
import header_catalog from "./images/header_catalog.jpg"
import header_catalog_mobile from "./images/header_catalog_mobile.jpg"
import main_after from "./images/main_after.jpg"
import main_before from "./images/main_before.jpg"
import product_after from "./images/product_after.jpg"
import product_before from "./images/product_before.jpg"
import search from "./images/search.jpg"

export const EnergyVostok = {
	id: "energy-vostok",
	title: "Energy Vostok renewing",
	children: (
		<Post title="Energy Vostok renewing" subtitle="October 2024">
			<Section id="" title="The story">
				<Paragraph>
					Energy Vostok, part of the Molotov Group, required improvements on their web front-end. I joined to implement
					and extend core functionality.
				</Paragraph>
			</Section>

			<Section id="header" title="Header">
				<Paragraph>
					The first task was adding search functionality. That required reorganizing the header to provide a clear place
					for the search trigger. Below is the original state of the page:
				</Paragraph>
				<Image src={main_before} alt="main page before redesign" />
				<Paragraph>
					After restructuring, the header became more functional and provided space for the new search entry point:
				</Paragraph>
				<Image src={main_after} alt="main page after redesign" />
			</Section>

			<Section id="header_catalog" title="Header catalog">
				<Paragraph>
					The header catalog was redesigned to provide users with quick access to the full product catalog. Below is the
					original catalog layout before redesign:
				</Paragraph>
				<Image src={catalog_before} alt="catalog" />

				<Paragraph>
					After the redesign, the header catalog now shows a clear hierarchy of categories for intuitive navigation.
					Hovering over a category reveals subcategories, and the layout adapts seamlessly for both desktop and mobile
					screens:
				</Paragraph>
				<Image src={header_catalog} alt="header catalog" />
				<Image src={header_catalog_mobile} alt="header catalog mobile" />
			</Section>

			<Section id="search" title="Search">
				<Paragraph>
					The search dialog was then implemented. Results are split into categories and products. Category results lead
					to category pages with filters. Product results lead directly to product detail pages. Hitting enter or
					clicking the search button loads the full search results page.
				</Paragraph>
				<Image src={search} alt="search dialog" />
			</Section>

			<Section id="product" title="Product">
				<Paragraph>
					The product page also required modernization. The old layout was cluttered and hard to navigate:
				</Paragraph>
				<Image src={product_before} alt="product page before" />
				<Paragraph>The redesign provides a cleaner layout with improved usability and product visibility:</Paragraph>
				<Image src={product_after} alt="product page after" />
			</Section>
		</Post>
	),
}
