import { buttonVariants } from "@/shared/ui/button"
import NextLink from "next/link"

export const DownloadCVButton = () => (
	<NextLink
		download="Mazhuga Sergei CV"
		href="/CV - Sergei Mazhuga.pdf"
		className={buttonVariants({ variant: "outline" })}
	>
		Download CV
	</NextLink>
)
