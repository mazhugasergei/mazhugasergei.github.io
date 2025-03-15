import { cn } from "@/utils"
import { ArrowUpRight } from "lucide-react"
import NextLink from "next/link"
import React from "react"

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  external?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, external, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        target={external ? "_blank" : "_self"}
        className={cn("inline-flex items-start text-primary underline", className)}
        {...props}
      >
        {children}
        {external && <ArrowUpRight size={12} />}
      </NextLink>
    )
  }
)

Link.displayName = "Link"
