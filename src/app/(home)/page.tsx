import { CustomAnimatedText } from "@/components/custom-animated-text"
import { Map } from "@/components/map"
import { buttonVariants } from "@/components/ui/button"
import { headingFont } from "@/fonts"
import { cn } from "@/utils"
import { replaceLastSpaceWithNbsp } from "@/utils/text"
import Link from "next/link"

interface List {
	title: string
	items: ListItem[]
}

interface ListItem {
	name: string
	href: string
	year?: number
	service?: string
}

const lists: List[] = [
	{
		title: "Clients",
		items: [
			{ name: "Cleopatra Trading Co.", href: "https://cleopatrading.com", year: 25, service: "Web Development" },
			{ name: "EverestAvto", href: "https://everestavtovl.ru", year: 25, service: "Web Development" },
			{ name: "Molotov Group", href: "/archive/molotov-group", year: 24, service: "Frontend Development" },
			{ name: "Energy Vostok", href: "/archive/energy-vostok", year: 24, service: "Frontend Development" },
			{ name: "DVZ-TIM", href: "/archive/dvz-tim", year: 24, service: "Frontend Development" },
			{ name: "Монтажстрой Подряд", href: "/archive/mspvl", year: 24, service: "Frontend Development" },
			{ name: "FEFU", href: "/archive/fefu", year: 23, service: "Web Development" },
			{ name: "STAKEME", href: "https://stakeme.pro", year: 22, service: "Web Development" },
			{ name: "KANCOO", href: "https://www.kancoo.tech", year: 21, service: "Web Development" },
		],
	},
	{
		title: "Projects",
		items: [{ name: "Nimbus", href: "https://github.com/logscore/Nimbus", year: 25, service: "Frontend Contribution" }],
	},
	{
		title: "Contacts",
		items: [
			{ name: "ghbdtnghbdtn8@gmail.com", href: "mailto:ghbdtnghbdtn8@gmail.com" },
			{ name: "@mazhugasergei", href: "https://x.com/mazhugasergei" },
		],
	},
]

export default function Page() {
	return (
		<main className="grid grid-cols-1 gap-6 md:flex-1 md:grid-cols-[1fr_auto]">
			<div className="flex max-w-xl flex-col gap-6">
				<section className="animate-slide-in-x">
					<header className="flex items-center justify-between gap-2">
						<div>
							<h1 className={cn(headingFont.className, "text-xl font-bold")}>
								<CustomAnimatedText>Mazhuga</CustomAnimatedText> <CustomAnimatedText>Sergei</CustomAnimatedText>
							</h1>
							<CustomAnimatedText>Software Engineer</CustomAnimatedText>
						</div>

						<a
							href="/CV - Sergei Mazhuga.pdf"
							download
							className={buttonVariants({
								variant: "outline",
							})}
						>
							Download CV
						</a>
					</header>

					<p className="mt-4 text-xs">
						{replaceLastSpaceWithNbsp(
							"A software developer based in Vladivostok, Russia, occasionally residing in Incheon, South Korea. I craft intuitive, purposeful websites and web services with a focus on clarity and usability. Passionate about open source and committed to shaping the future of the web through thoughtful, collaborative development."
						)}
					</p>
				</section>

				{lists.map((list, index) => (
					<section
						key={list.title}
						className={cn("animate-slide-in-x space-y-2", index === lists.length - 1 && "mt-auto")}
						style={{ animationDelay: `${(index + 1) * 100}ms` }}
					>
						<div className="text-secondary-foreground flex items-center justify-between">
							<h2 className="font-bold">{list.title}</h2>
							{index !== lists.length - 1 && <span>{list.title.toLocaleLowerCase()}.json</span>}
						</div>

						<ul className="max-md:space-y-1">
							{list.items.map((item) => (
								<li key={item.name}>
									{item.href.startsWith("/archive/") ? (
										<Link href={item.href as `/archive/${string}`} className="group flex items-center gap-1 leading-5">
											<span className="group-hover:underline">{item.name}</span>
											{item.year && <span className="opacity-50">'{item.year}</span>}
											{item.service && <span className="ml-auto">{item.service}</span>}
										</Link>
									) : (
										<a href={item.href} target="_blank" className="group flex items-center gap-1 leading-5">
											<span className="group-hover:underline">{item.name}</span>
											{item.year && <span className="opacity-50">'{item.year}</span>}
											{item.service && <span className="ml-auto">{item.service}</span>}
										</a>
									)}
								</li>
							))}
						</ul>
					</section>
				))}
			</div>

			<Map />
		</main>
	)
}
