import { SoundLink } from "@/components/ui/sounds"
import { lists } from "@/lib/constants/data"
import { cn } from "@/utils/classname"

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
