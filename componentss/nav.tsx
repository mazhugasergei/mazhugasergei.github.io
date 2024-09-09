"use client"

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
  ]

  return (
    <nav className={className}>
      <ul className="max-lg:flex max-lg:items-center max-lg:gap-2 lg:my-6">
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              href={route.href}
              className={`"block text-[0.8125rem] text-${
                pathname === route.href ? "primary" : "muted"
              } hover:text-primary transition p-1 -mx-1"`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
