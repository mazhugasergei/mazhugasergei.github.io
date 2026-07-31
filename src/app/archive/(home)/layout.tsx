import { Header } from "@/widgets/archive"

export default async function Layout(props: LayoutProps<"/archive">) {
	const _params = await props.params

	return (
		<>
			<Header title="Archive" />
			{props.children}
		</>
	)
}
