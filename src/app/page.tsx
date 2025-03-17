import { Projects } from "@/components/aside"
import { SymbolTransitionText } from "@/components/ui"
import { Link } from "@/components/ui/link"
import { PolaroidImage } from "@/components/ui/pfp"
import { headingFont } from "@/fonts"
import bg from "@/images/bg.jpg"
import noise from "@/images/noise.png"
import pfp from "@/images/pfp.jpg"
import { cn } from "@/utils"
import Image from "next/image"
import NextLink from "next/link"

export default function Home() {
  return (
    <main className="relative isolate min-h-screen">
      <NoiseOverlay />
      <BG />

      <div className="absolute bottom-0 left-10 right-10 top-0 -z-10 mx-auto max-w-5xl border-x" />

      <div className="flex min-h-screen flex-col justify-center py-10">
        <div className="border-y">
          <div className="mx-auto flex max-w-5xl flex-col items-center px-10">
            <Intro className="py-16" />
          </div>
        </div>
      </div>
    </main>
  )
}

const NoiseOverlay = () => (
  <div
    className="pointer-events-none absolute z-50 h-full w-full object-cover mix-blend-overlay"
    style={{
      backgroundImage: `url(${noise.src})`,
      backgroundSize: "200px 200px",
    }}
  />
)

const BG = () => (
  <Image
    src={bg}
    alt=""
    placeholder="blur"
    className="absolute -z-10 h-full w-full object-cover brightness-[.15] grayscale"
  />
)

const Intro = ({ className }: { className?: string }) => {
  return (
    <section className={cn("mx-auto flex flex-col gap-8", className)}>
      <div className="flex flex-col sm:items-center">
        <PfpWithLink className="mb-6" />

        <h1 className={cn(headingFont.className, "flex flex-wrap text-3xl font-bold")}>
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
          <ContactButton />
          <DownloadCVButton />
        </div>
      </div>

      <div className="space-y-2">
        <h2>Projects</h2>
        <Projects />
      </div>
    </section>
  )
}

const PfpWithLink = (props: React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <NextLink href="https://x.com/mazhugasergei" target="_blank" {...props}>
      <PolaroidImage src={pfp} />
    </NextLink>
  )
}

const ContactButton = () => (
  <NextLink
    href="mailto:ghbdtnghbdtn8@gmail.com"
    className="rounded-md bg-foreground px-3 py-1 text-center font-bold text-background no-underline hover:underline"
  >
    Contact me
  </NextLink>
)

const DownloadCVButton = () => (
  <NextLink
    download="Mazhuga Sergei CV"
    href="/CV - Sergei Mazhuga.pdf"
    className="rounded-md px-3 py-1 text-center text-foreground no-underline hover:underline"
  >
    Download CV
  </NextLink>
)
