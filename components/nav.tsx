"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav({ className }: { className?: string }) {
  const pathname = usePathname()

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
    <nav className={className}>
      <ul>
        {routes.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={cn(
                "block text-[0.8125rem] transition p-1",
                (href === "/" ? pathname === "/" : pathname.startsWith(href))
                  ? "text-primary"
                  : "text-muted hover:text-primary"
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
