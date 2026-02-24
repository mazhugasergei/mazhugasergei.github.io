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
			{ name: "Nimbus", href: "https://github.com/logscore/Nimbus", year: 25, service: "Frontend Contribution" },
			{ name: "(moon)", href: "/the-moon", year: 25, service: "Web Development" },
			{ name: "Dot Image Generator", href: "/dot-image-generator", year: 26, service: "Web Development" },
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
