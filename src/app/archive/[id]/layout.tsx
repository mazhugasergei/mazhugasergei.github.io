import { Header } from "@/components/archive/header"
import { items } from "@/lib/archive"
import { notFound } from "next/navigation"

export function generateStaticParams() {
	return items
}

export const generateMetadata = async (props: LayoutProps<"/archive/[id]">) => {
	const _params = await props.params

	const _item = items.find((item) => item.id === _params.id)
	if (!_item) return

	return {
		title: _item.title,
	}
}

export default async function Layout(props: LayoutProps<"/archive/[id]">) {
	const _params = await props.params

	const _item = items.find((item) => item.id === _params.id)
	if (!_item) return notFound()

	return (
		<div>
			<Header title={_item.title} />
			<main className="mx-auto px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">{props.children}</main>
		</div>
	)
}
