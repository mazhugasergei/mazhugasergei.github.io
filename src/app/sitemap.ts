import { BASE_URL } from "@/lib/constants/config"
import { lists } from "@/lib/constants/data"
import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
	// static pages
	const staticPages = [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1.0,
		},
	]

	// extract archive pages from data
	const archivePages =
		lists
			.find((list) => list.title === "Clients")
			?.items.filter((item) => item.href.startsWith("/archive"))
			.map((item) => ({
				url: `${BASE_URL}${item.href}`,
				lastModified: new Date(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			})) || []

	// extract project pages from data
	const projectPages =
		lists
			.find((list) => list.title === "Projects")
			?.items.filter((item) => item.href.startsWith("/"))
			.map((item) => ({
				url: `${BASE_URL}${item.href}`,
				lastModified: new Date(),
				changeFrequency: "monthly" as const,
				priority: 0.8,
			})) || []

	return [...staticPages, ...archivePages, ...projectPages]
}
