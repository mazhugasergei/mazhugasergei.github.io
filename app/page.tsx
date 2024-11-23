import { Link, SymbolTransitionText } from "./components/ui"
import { headingFont } from "./fonts"
import { cn } from "./lib/utils"

export default function Home() {
  return (
    <main>
      <Intro />
    </main>
  )
}

const Intro = () => {
  return (
    <section className="pt-2">
      <div className="grid items-start gap-4 md:grid-cols-[1fr_auto]">
        <div className="space-y-2">
          <h1 className={cn(headingFont.className, "text-5xl font-bold")}>
            <SymbolTransitionText text="Mazhuga Sergei" />
          </h1>

          <p className="text-balance">
            Web developer with a passion for creating visually stunning and intuitive websites. Former contributor and
            maintainer of{" "}
            <Link external target="_blank" href="https://molotov-group.ru">
              Molotov Group's
            </Link>{" "}
            public and internal projects.
          </p>

          <div className="inline-grid grid-cols-2 gap-2">
            <Link
              href="mailto:ghbdtnghbdtn8@gmail.com"
              className="bg-foreground px-4 py-2 font-bold text-background no-underline hover:underline"
            >
              Contact me
            </Link>

            <Link
              download="Mazhuga Sergei CV"
              href="/resume.pdf"
              className="px-4 py-2 text-foreground no-underline hover:underline"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
