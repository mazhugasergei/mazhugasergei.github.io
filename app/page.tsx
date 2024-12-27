import NextLink from "next/link"
import { Projects } from "./components/aside"
import { Link, SymbolTransitionText } from "./components/ui"
import { headingFont } from "./fonts"
import { cn } from "./lib/utils"

export default function Home() {
  return (
    <div className="relative">
      <BG />
      <main className="mx-auto grid min-h-screen max-w-7xl px-8 py-20">
        <Intro />
      </main>
    </div>
  )
}

const Intro = () => {
  return (
    <section className="grid gap-8 max-md:place-content-center md:grid-cols-[3fr_1fr] md:items-center">
      <div>
        <h1 className={cn(headingFont.className, "flex flex-wrap text-5xl font-bold")}>
          <SymbolTransitionText text="Mazhuga" /> <SymbolTransitionText text="Sergei" />
        </h1>

        <p className="mt-3 text-balance">
          Web developer. Former contributor and maintainer of{" "}
          <Link external target="_blank" href="https://molotov-group.ru">
            Molotov Group's
          </Link>{" "}
          projects.
        </p>

        <div className="mt-4 inline-grid grid-cols-2 gap-2">
          <NextLink
            href="mailto:ghbdtnghbdtn8@gmail.com"
            className="bg-foreground px-4 py-2 text-center font-bold text-background no-underline hover:underline"
          >
            Contact me
          </NextLink>

          <NextLink
            download="Mazhuga Sergei CV"
            href="/CV - Sergei Mazhuga.pdf"
            className="px-4 py-2 text-center text-foreground no-underline hover:underline"
          >
            Download CV
          </NextLink>
        </div>
      </div>

      <div className="space-y-2">
        <h2>Projects</h2>
        <Projects />
      </div>
    </section>
  )
}

const BG = () => {
  return (
    <div className="absolute inset-2 isolate z-[-1] md:inset-4">
      {/* top left */}
      <div className="absolute left-0 top-0 z-[-1]">
        {/* top */}
        <div className="absolute left-0 top-0 h-1 w-20 bg-foreground" />
        {/* left */}
        <div className="absolute left-0 top-0 h-10 w-1 bg-foreground" />
      </div>

      {/* bottom right */}
      <div className="absolute bottom-0 right-0 z-[-1]">
        {/* bottom */}
        <div className="absolute bottom-0 right-0 h-1 w-20 bg-foreground" />
        {/* right */}
        <div className="absolute bottom-0 right-0 h-10 w-1 bg-foreground" />
      </div>
    </div>
  )
}
