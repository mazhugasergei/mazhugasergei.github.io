import NextLink from "next/link"
import { buttonVariants } from "../ui/button"

export const DownloadCVButton = () => (
  <NextLink
    download="Mazhuga Sergei CV"
    href="/CV - Sergei Mazhuga.pdf"
    className={buttonVariants({ variant: "outline" })}
  >
    Download CV
  </NextLink>
)
