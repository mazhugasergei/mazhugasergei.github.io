import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import NextLink from "next/link"
import React from "react"

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  external?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, external, ...props }, ref) => {
    return (
      <NextLink ref={ref} className={cn("inline-flex items-center underline text-blue-400", className)} {...props}>
        {children}
        {external && <ArrowUpRight size={13} />}
      </NextLink>
    )
  }
)
