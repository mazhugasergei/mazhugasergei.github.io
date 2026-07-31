import { items } from "@/shared/lib/archive"
import { Header } from "@/widgets/archive"
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
		<>
			<Header title={_item.title} />
			{props.children}
		</>
	)
}
