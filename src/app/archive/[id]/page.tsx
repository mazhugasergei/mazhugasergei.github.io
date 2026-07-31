import { items } from "@/shared/lib/archive"
import { notFound } from "next/navigation"

export default async function Page(props: PageProps<"/archive/[id]">) {
	const _params = await props.params

	const item = items.find((item) => item.id === _params.id)
	if (!item) return notFound()

	return <main className="mx-auto px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">{item.children}</main>
}
