import { Header } from "@/components/header"
import { Lists } from "@/components/lists"
import { SHOW_UI_OUTLINE } from "@/lib/constants/config"

export default function Page() {
	return (
		<main className="grid">
			{SHOW_UI_OUTLINE && <div className="absolute top-6 right-0 left-0 border-t" />}
			{/* left border */}
			{SHOW_UI_OUTLINE && <div className="bg-border animate-slide-in-x absolute top-0 bottom-0 left-6 w-0.25" />}
			{/* right border */}
			{SHOW_UI_OUTLINE && <div className="bg-border animate-slide-in-x absolute top-0 right-6 bottom-0 w-0.25" />}

			<div className="ml-6 grid grid-cols-1 lg:grid-cols-[1fr_auto]">
				{/* left */}
				<div className="relative lg:max-w-xl">
					<div className="flex h-full flex-col gap-6 py-6">
						<Header className="animate-slide-in-x" />
						<Lists />
					</div>

					{/* right border */}
					{SHOW_UI_OUTLINE && <div className="bg-border animate-slide-in-x absolute top-0 right-0 bottom-0 w-0.25" />}
				</div>
			</div>

			{/* bottom border */}
			{SHOW_UI_OUTLINE && <div className="absolute right-0 bottom-6 left-0 border-t" />}
		</main>
	)
}
