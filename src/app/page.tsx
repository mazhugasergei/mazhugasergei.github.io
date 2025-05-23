import { ContactButton } from "@/components/shared/contact-button"
import { DownloadCVButton } from "@/components/shared/download-cv-button"
import { CustomAnimatedText } from "@/components/ui/custom-animated-text"
import { Link } from "@/components/ui/link"
import { PolaroidImage } from "@/components/ui/polaroid-image"
import { headingFont } from "@/fonts"
import pfp from "@/images/pfp.jpg"
import { cn } from "@/utils"

export default function Home() {
  return (
    <main className="relative isolate">
      <Intro />
    </main>
  )
}

const Intro = () => {
  return (
    <section className="grid place-content-start gap-8 py-16 sm:place-content-center">
      <div className="flex flex-col sm:items-center">
        <PolaroidImage src={pfp} className="mb-6" />

        <h1 className={cn(headingFont.className, "flex flex-wrap text-3xl font-bold")}>
          <CustomAnimatedText text="Mazhuga" /> <CustomAnimatedText text="Sergei" />
        </h1>

        <p className="mt-3 text-balance">Web developer.</p>

        <div className="mt-4 inline-grid grid-cols-2 gap-3">
          <ContactButton />
          <DownloadCVButton />
        </div>
      </div>

      <Projects />
    </section>
  )
}

const Projects = () => {
  const projects = [
    {
      name: "Cleopatra Trading Co.",
      href: "https://cleopatrading.com",
    },
    {
      name: "Optic Shop",
      href: "https://mazhugasergei.github.io/optic-shop",
    },
    {
      name: "KANCOO",
      href: "https://www.kancoo.tech",
    },
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
      name: "EverestAvto",
      href: "https://everestavtovl.ru",
    },
    {
      name: "MSP",
      href: "https://mspvl.ru",
    },
  ]

  return (
    <div className="space-y-2">
      <h2>Projects</h2>
      <ul>
        {projects.map(({ name, href }) => (
          <li key={name}>
            <Link
              external
              href={href}
              className="text-foreground/50 hover:text-foreground text-xs leading-loose no-underline transition"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
