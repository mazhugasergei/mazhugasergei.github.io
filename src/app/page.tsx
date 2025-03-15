import { Projects } from "@/components/aside"
import { SymbolTransitionText } from "@/components/ui"
import { Link } from "@/components/ui/link"
import { headingFont } from "@/fonts"
import bg from "@/images/bg.jpg"
import pfp from "@/images/pfp.jpg"
import { cn } from "@/utils"
import Image from "next/image"
import NextLink from "next/link"

export default function Home() {
  return (
    <main className="relative isolate min-h-screen">
      <Image
        src={bg}
        alt=""
        placeholder="blur"
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
      />

      <div className="absolute bottom-0 left-10 right-10 top-0 -z-10 mx-auto max-w-5xl border-x" />

      <div className="flex min-h-screen flex-col justify-center py-10">
        <div className="border-y">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-10">
            <Intro className="py-10" />
          </div>
        </div>
      </div>
    </main>
  )
}

const Intro = ({ className }: { className?: string }) => {
  return (
    <section className={cn("mx-auto flex flex-col gap-8", className)}>
      <div className="flex flex-col sm:items-center">
        <Image
          src={pfp}
          alt=""
          width={50}
          height={50}
          className="mb-6 -rotate-6 border-[.2rem] border-b-[.5rem] border-[#fff]"
        />

        <h1 className={cn(headingFont.className, "flex flex-wrap text-4xl font-bold")}>
          <SymbolTransitionText text="Mazhuga" /> <SymbolTransitionText text="Sergei" />
        </h1>

        <p className="mt-3 text-balance">
          Web developer. Part of{" "}
          <Link target="_blank" href="https://friendlee.pro/">
            friend Lee
          </Link>{" "}
          team.
        </p>

        <div className="mt-4 inline-grid grid-cols-2 gap-2">
          <NextLink
            href="mailto:ghbdtnghbdtn8@gmail.com"
            className="rounded-md bg-foreground px-3 py-1 text-center font-bold text-background no-underline hover:underline"
          >
            Contact me
          </NextLink>

          <NextLink
            download="Mazhuga Sergei CV"
            href="/CV - Sergei Mazhuga.pdf"
            className="rounded-md px-3 py-1 text-center text-foreground no-underline hover:underline"
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
