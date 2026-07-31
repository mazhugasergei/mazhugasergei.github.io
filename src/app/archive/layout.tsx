export default function Layout(props: LayoutProps<"/archive">) {
	return <div className="min-h-100dvh grid grid-rows-[auto_1fr_auto]">{props.children}</div>
}
