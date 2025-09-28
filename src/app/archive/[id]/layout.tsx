import { items } from "@/lib/archive"

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

export default function Layout(props: LayoutProps<"/archive/[id]">) {
	return <main className="mx-auto max-w-5xl">{props.children}</main>
}
