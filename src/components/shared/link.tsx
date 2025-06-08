import { cn } from "@/utils"
import NextLink from "next/link"
import React from "react"

export const Link = ({ children, className, ...props }: React.ComponentProps<typeof NextLink>) => {
  return (
    <NextLink
      target={props.href?.toString().startsWith("http") ? "_blank" : "_self"}
      className={cn("text-primary hover:underline", className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
