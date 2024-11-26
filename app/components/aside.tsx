import { cn } from "@/app/lib/utils"
import NextLink from "next/link"
import React from "react"
import { headingFont } from "../fonts"
import { Link } from "./ui"

export const Aside = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <aside ref={ref} {...props} className={className}>
        <div className="h-full space-y-4 rounded-xl bg-secondary p-6">
          <NextLink href="/" className={cn(headingFont.className, "grid text-2xl font-bold leading-7")}>
            <span>Mazhuga</span>
            <span>Sergei</span>
          </NextLink>
          <Nav />
        </div>
      </aside>
    )
  }
)

Aside.displayName = "Aside"

export const Nav = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const routes = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Craft",
        href: "/craft",
      },
    ]
    return (
      <nav ref={ref} {...props} className={className}>
        <ul>
          {routes.map(({ href, name }) => (
            <li key={name}>
              <NextLink
                href={href}
                className="block text-[0.8125rem] leading-loose text-secondary-foreground transition hover:text-foreground"
              >
                {name}
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
)

Nav.displayName = "Nav"

export const Projects = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const projects = [
      {
        name: "Molotov Group",
        href: "https://molotov-group.ru",
      },
      {
        name: "Energy Vostok",
        href: "https://energy-vostok.ru",
      },
      {
        name: "DVZ-TIM",
        href: "https://dvz-tim.ru",
      },
      {
        name: "KANCOO",
        href: "https://www.kancoo.tech",
      },
      {
        name: "MSP",
        href: "https://mspvl.ru",
      },
    ]
    return (
      <nav ref={ref} {...props} className={className}>
        <ul>
          {projects.map(({ name, href }) => (
            <li key={name}>
              <Link
                external
                href={href}
                className="text-[0.8125rem] leading-loose text-secondary-foreground no-underline transition hover:text-foreground"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
)

Projects.displayName = "Projects"
