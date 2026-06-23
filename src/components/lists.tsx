import { SoundLink } from "@/components/ui/sounds"
import { cn } from "@/utils/classname"

interface List {
	title: string
	items: ListItem[]
}

interface ListItem {
	name: string
	href?: string
	year?: number
	details?: string
}

export function ListItem({ href, ...props }: Partial<React.ComponentProps<typeof SoundLink>>) {
	if (!href) {
		return <span {...props} />
	}

	return (
		<SoundLink
			href={href}
			target={href.toString().startsWith("/archive/") ? "_self" : "_blank"}
			rel={href.toString().startsWith("/archive/") ? undefined : "noreferrer"}
			{...props}
		/>
	)
}

export const lists: List[] = [
	{
		title: "Education",
		items: [
			{
				name: "Far Eastern Federal University",
				href: "https://dvfu.ru",
				year: 24,
				details: "Bachelor of Computer Science",
			},
		],
	},
	{
		title: "Clients",
		items: [
			{ name: "Cleopatra Trading Co.", year: 25, details: "Web Development" },
			{ name: "EverestAvto", href: "https://everestavtovl.ru", year: 25, details: "Web Development" },
			{ name: "Molotov Group", href: "/archive/molotov-group", year: 24, details: "Frontend Development" },
			{ name: "Energy Vostok", href: "/archive/energy-vostok", year: 24, details: "Frontend Development" },
			{ name: "DVZ-TIM", href: "/archive/dvz-tim", year: 24, details: "Frontend Development" },
			{ name: "Монтажстрой Подряд", href: "/archive/mspvl", year: 24, details: "Frontend Development" },
			{ name: "FEFU", href: "/archive/fefu", year: 23, details: "Web Development" },
			{ name: "STAKEME", href: "https://stakeme.pro", year: 22, details: "Web Development" },
			{ name: "KANCOO", href: "https://www.kancoo.tech", year: 21, details: "Web Development" },
		],
	},
	{
		title: "Projects",
		items: [
			{ name: "Components", href: "/components", year: 26, details: "Web Development" },
			{ name: "(moon)", href: "/the-moon", year: 25, details: "Web Development" },
			{ name: "Dot Image Generator", href: "/dot-image-generator", year: 26, details: "Web Development" },
			{ name: "Nimbus", href: "https://github.com/logscore/Nimbus", year: 25, details: "Frontend Contribution" },
		],
	},
	{
		title: "Languages",
		items: [
			{ name: "English", details: "C1" },
			{ name: "Russian", details: "Native" },
			{ name: "German", details: "A2" },
			{ name: "Japanese", details: "N4" },
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
				{items.map((item) => {
					return (
						<li key={item.name}>
							<ListItem
								href={item.href}
								className="group focus-visible:bg-accent -mx-2 flex items-center gap-1 rounded px-2 py-1 leading-5 outline-0"
							>
								<span className={cn(item.href && "group-hover:underline group-focus-visible:underline")}>
									{item.name}
								</span>
								{item.year && <span className="text-muted-foreground">'{item.year}</span>}
								{item.details && <span className="ml-auto">{item.details}</span>}
							</ListItem>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
