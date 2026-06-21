import { SoundLink } from "@/components/ui/sounds"
import { cn } from "@/utils/classname"

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

export const lists: List[] = [
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
		items: [
			{ name: "Components", href: "/components", year: 26, service: "Web Development" },
			{ name: "(moon)", href: "/the-moon", year: 25, service: "Web Development" },
			{ name: "Dot Image Generator", href: "/dot-image-generator", year: 26, service: "Web Development" },
			{ name: "Nimbus", href: "https://github.com/logscore/Nimbus", year: 25, service: "Frontend Contribution" },
		],
	},
	{
		title: "Contacts",
		items: [
			{ name: "mazhugasergei8@gmail.com", href: "mailto:mazhugasergei8@gmail.com" },
			{ name: "@mazhugasergei", href: "https://x.com/mazhugasergei" },
		],
	},
]

export function Lists(props: { className?: string }) {
	return lists.map((list, index) => (
		<List key={list.title} title={list.title} index={index} items={list.items} {...props} />
	))
}

interface ListProps extends React.ComponentProps<"section"> {
	index: number
	title: string
	items: (typeof lists)[0]["items"]
}

export function List({ title, index, items, className, ...props }: ListProps) {
	return (
		<section
			className={cn("animate-slide-in-x space-y-2 last:mt-auto", className)}
			style={{ animationDelay: `${(index + 1) * 100}ms` }}
			{...props}
		>
			<div className="text-muted-foreground flex items-center justify-between">
				<h2 className="font-bold">{title}</h2>
				<span className={cn(index === lists.length - 1 && "lg:hidden")}>{title.toLocaleLowerCase()}.json</span>
			</div>

			<ul className="max-lg:space-y-1">
				{items.map((item) => (
					<li key={item.name}>
						<SoundLink
							href={item.href}
							target={item.href.startsWith("/archive/") ? "_self" : "_blank"}
							className="group focus-visible:bg-accent -mx-2 flex items-center gap-1 rounded px-2 py-1 leading-5 outline-0"
						>
							<span className="group-hover:underline group-focus-visible:underline">{item.name}</span>
							{item.year && <span className="text-muted-foreground">'{item.year}</span>}
							{item.service && <span className="ml-auto">{item.service}</span>}
						</SoundLink>
					</li>
				))}
			</ul>
		</section>
	)
}
