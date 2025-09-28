import Image from "@/components/archive/image"
import Post from "@/components/archive/post"
import Section from "@/components/archive/section"
import main_after from "./images/main_after.png"
import main_before from "./images/main_before.png"
import product_after from "./images/product_after.png"
import product_before from "./images/product_before.png"
import search from "./images/search.png"

export const EnergyVostok = {
	id: "energy-vostok",
	title: "Energy Vostok",
	children: (
		<Post title="Energy Vostok renewing" subtitle="October 2024">
			<Section id="" title="The story">
				<p>Energy Vostok is one of the Molotov Group's companies. And they needed a front-end developer.</p>
			</Section>

			<Section id="header" title="Header">
				<p>
					My first task was to add search functionality with a searchbar somewhere in the header on Vostok Energy
					website. I just need a place to put it. Thankfully soon enough I found out I can do whatever I like with the
					website. Let's look at our patient.
				</p>
				<Image src={main_before} alt="main page before redesign" />
				<p>
					Let's add a little bit of magic... 🪄 <span className="text-muted-foreground italic">*poof*</span>
				</p>
				<Image src={main_after} alt="main page after redesign" />
				<p>Alright, now I just can put search icon in the header and open a dialog when a user clicks it.</p>
			</Section>

			<Section id="search" title="Search">
				<p>
					Then I added a search dialog. The search results are categories that look like wide blocks and the products
					list. When a user clicks on a category search result, it opens the category page with the list of products in
					it and filters. Clicking on a product opens the product page with its details. And pressing enter or clicking
					the search button right after the input opens the search results page.
				</p>
				<Image src={search} alt="search dialog" />
			</Section>

			<Section id="product" title="Product">
				<p>Let's also renew the product page.</p>
				<Image src={product_before} alt="product page before" />
				<p>
					Same here... 🪄 <span className="text-muted-foreground italic">*poof*</span>
				</p>
				<Image src={product_after} alt="product page after" />
			</Section>

			{/* <Section id="">
		<CodeBlock
			code={`import { create } from 'zustand'

const useStore = create((set) => ({
bears: 0,
increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
removeAllBears: () => set({ bears: 0 }),
updateBears: (newBears) => set({ bears: newBears }),
}))`}
			language="javascript"
		/>

		<Video src="/test.mp4" />
	</Section> */}
		</Post>
	),
}
