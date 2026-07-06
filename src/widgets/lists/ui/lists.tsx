import { cn } from "@/shared/utils"
import { ListItem, ListProps, lists } from ".."

export function Lists(props: { className?: string }) {
	return lists.map((list, index) => (
		<List key={list.title} title={list.title} index={index} items={list.items} {...props} />
	))
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
