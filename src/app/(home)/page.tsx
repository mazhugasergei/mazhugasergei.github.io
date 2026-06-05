import { CustomAnimatedText } from "@/components/custom-animated-text"
import { Paragraph } from "@/components/paragraph"
import { buttonVariants } from "@/components/ui/button"
import { LOCATION, lists } from "@/lib/constants/data"
import { cn } from "@/utils/classname"
import Link from "next/link"

export default function Page() {
	return (
		<main className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto]">
			<div className="flex flex-col gap-6 lg:max-w-xl">
				<section className="animate-slide-in-x">
					<header>
						<div className="flex items-center justify-between gap-2">
							<div>
								<CustomAnimatedText className="text-muted-foreground mb-2 text-sm tracking-widest uppercase">
									Software Engineer
								</CustomAnimatedText>
								<h1 className="mb-3 text-3xl leading-snug font-medium">
									<CustomAnimatedText>Mazhuga</CustomAnimatedText> <CustomAnimatedText>Sergei</CustomAnimatedText>
								</h1>
							</div>

							<a href="/CV - Sergei Mazhuga.pdf" download className={buttonVariants()}>
								View CV
							</a>
						</div>

						<Paragraph className="text-muted-foreground max-w-md text-xs text-pretty">
							A software developer based in {LOCATION.city}, {LOCATION.country}, occasionally residing in Incheon, South
							Korea. I craft intuitive, purposeful websites and web services with a focus on clarity and usability.
							Passionate about open source and committed to shaping the future of the web through thoughtful,
							collaborative development.
						</Paragraph>
					</header>
				</section>

				{lists.map((list, index) => (
					<section
						key={list.title}
						className="animate-slide-in-x space-y-2 last:mt-auto"
						style={{ animationDelay: `${(index + 1) * 100}ms` }}
					>
						<div className="text-muted-foreground flex items-center justify-between">
							<h2 className="font-bold">{list.title}</h2>
							<span className={cn(index === lists.length - 1 && "lg:hidden")}>
								{list.title.toLocaleLowerCase()}.json
							</span>
						</div>

						<ul className="max-lg:space-y-1">
							{list.items.map((item) => (
								<li key={item.name}>
									{item.href.startsWith("/archive/") ? (
										<Link href={item.href as `/archive/${string}`} className="group flex items-center gap-1 leading-5">
											<span className="group-hover:underline">{item.name}</span>
											{item.year && <span className="text-muted-foreground">'{item.year}</span>}
											{item.service && <span className="ml-auto">{item.service}</span>}
										</Link>
									) : (
										<a href={item.href} target="_blank" className="group flex items-center gap-1 leading-5">
											<span className="group-hover:underline">{item.name}</span>
											{item.year && <span className="text-muted-foreground">'{item.year}</span>}
											{item.service && <span className="ml-auto">{item.service}</span>}
										</a>
									)}
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</main>
	)
}
