import { List, lists } from "@/widgets/lists"

export default function Page() {
	const archivedItems = lists.flatMap(({ items }) => {
		const res = items.filter((item) => item.href?.startsWith("/archive"))
		return res
	})

	return (
		<main className="mx-auto w-full px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
			<List title="Archive" items={archivedItems} />
		</main>
	)
}
