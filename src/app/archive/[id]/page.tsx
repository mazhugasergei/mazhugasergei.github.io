import { items } from "@/lib/archive"
import { notFound } from "next/navigation"

export default async function Page(props: PageProps<"/archive/[id]">) {
	const _params = await props.params

	const item = items.find((item) => item.id === _params.id)
	if (!item) return notFound()

	return item.children
}
