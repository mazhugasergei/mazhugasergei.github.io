import { Header } from "@/components/header"
import { Lists } from "@/components/lists"

export default function Page() {
	return (
		<main className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto]">
			<div className="flex flex-col gap-6 lg:max-w-xl">
				<Header />
				<Lists />
			</div>
		</main>
	)
}
