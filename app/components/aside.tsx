import { cn } from "@/app/lib/utils"
import Link from "next/link"
import React from "react"
import { headingFont } from "../fonts"

export const Aside = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <aside ref={ref} {...props} className={className}>
        <div className="h-full space-y-4 rounded-xl bg-secondary p-6">
          <Link href="/" className={cn(headingFont.className, "grid text-2xl font-bold leading-7")}>
            <span>Mazhuga</span>
            <span>Sergei</span>
          </Link>
          <Nav />
        </div>
      </aside>
    )
  }
)

export const Nav = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const routes = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Diary",
        href: "/diary",
      },
      {
        name: "Gallery",
        href: "/gallery",
      },
    ]
    return (
      <nav ref={ref} {...props} className={className}>
        <ul>
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.href}
                className="block text-[0.8125rem] leading-loose text-secondary-foreground transition hover:text-foreground"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
)
