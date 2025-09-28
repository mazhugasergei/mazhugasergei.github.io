import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"

export function Header() {
	return (
		<header>
			<Link href={"/"} className="flex items-center gap-1">
				<ChevronLeftIcon size={18} />
				<span>Back</span>
			</Link>
		</header>
	)
}
