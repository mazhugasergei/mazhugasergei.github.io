import { cn } from "@/lib/utils"
import { Link } from "./components/ui"
import { headingFont } from "./fonts"

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
      <div className="grid md:grid-cols-[1fr_auto] items-start gap-4">
        <div>
          <h1 className={cn(headingFont.className, "text-5xl font-bold")}>Mazhuga Sergei</h1>
          <p className="text-balance mt-2">
            Web developer with a passion for creating visually stunning and intuitive websites. Former contributor and
            maintainer of{" "}
            <Link external target="_blank" href="https://molotov-group.ru">
              Molotov Group's
            </Link>{" "}
            public and internal projects.
          </p>
        </div>
        <Link
          download="Mazhuga Sergei CV"
          href="/resume.pdf"
          className="no-underline flex items-center gap-2 bg-foreground text-background rounded px-4 py-2"
        >
          Download CV
        </Link>
      </div>
    </section>
  )
}
