import { Carousel } from "@/components/carousel"
import { Debug } from "@/components/debug"
import { Header } from "@/components/header"
import { Lists } from "@/components/lists"
import { SHOW_UI_OUTLINE } from "@/lib/constants/config"
import { cn } from "@/utils/classname"

export default function Page() {
	return (
		<main className="grid">
			{SHOW_UI_OUTLINE && <div className="absolute top-6 right-0 left-0 z-50 border-t" />}
			{/* left border */}
			{SHOW_UI_OUTLINE && <div className="bg-border animate-slide-in-x absolute top-0 bottom-0 left-6 z-50 w-0.25" />}
			{/* right border */}
			{SHOW_UI_OUTLINE && <div className="animate-slide-in-x bg-border absolute top-0 right-6 bottom-0 z-50 w-0.25" />}

			<div className="grid grid-cols-1 lg:grid-cols-2">
				{/* left */}
				<div className="relative lg:mr-6 lg:max-w-xl">
					<div className="flex h-full flex-col space-y-6 py-6">
						<Debug />
						<Header className="animate-slide-in-x pl-6 max-lg:pr-6" />
						{SHOW_UI_OUTLINE && <div className="bg-border animate-slide-in-x h-0.25 lg:hidden" />}
						<Carousel
							className={cn("animate-fade-in mx-6 aspect-square sm:aspect-video lg:hidden", SHOW_UI_OUTLINE && "mb-0")}
						/>
						{SHOW_UI_OUTLINE && <div className="bg-border animate-slide-in-x h-0.25 lg:hidden" />}
						<Lists className="pl-6 max-lg:pr-6" />
					</div>

					{/* lg: right border */}
					{SHOW_UI_OUTLINE && (
						<div className="bg-border animate-slide-in-x absolute top-0 right-0 bottom-0 z-50 w-0.25 max-lg:hidden" />
					)}
				</div>

				{/* max-lg: middle border */}
				{SHOW_UI_OUTLINE && <div className="bg-border animate-slide-in-x h-0.25 lg:hidden" />}

				{/* right */}
				<div className="relative grid pr-6 max-lg:hidden max-lg:pl-6">
					{/* lg: left border */}
					{SHOW_UI_OUTLINE && (
						<div className="animate-slide-in-x bg-border absolute top-0 bottom-0 left-0 z-50 w-0.25" />
					)}
					<Carousel className="animate-fade-in" />
				</div>
			</div>

			{/* bottom border */}
			{SHOW_UI_OUTLINE && <div className="absolute right-0 bottom-6 left-0 z-50 border-t" />}
		</main>
	)
}
