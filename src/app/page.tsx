import { CustomAnimatedText } from "@/components/shared/custom-animated-text"
import { headingFont } from "@/fonts"
import { cn } from "@/utils"
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex min-h-screen max-w-xl flex-col gap-6 p-6 text-xs">
      <Intro className="animate-slide-in-x" />
      <Clients className="animate-slide-in-x" style={{ animationDelay: "100ms" }} />
      <Projects className="animate-slide-in-x" style={{ animationDelay: "200ms" }} />
      <Contacts className="animate-slide-in-x mt-auto" style={{ animationDelay: "300ms" }} />
    </main>
  )
}

const Intro = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section {...props}>
      <h1 className={cn(headingFont.className, "text-xl font-bold")}>
        <CustomAnimatedText text="Mazhuga" /> <CustomAnimatedText text="Sergei" />
      </h1>

      <CustomAnimatedText text="Frontend Developer" className="text-xs" />

      <p className="mt-4 text-xs text-balance">
        A web developer based in Vladivostok, Russia, occasionally residing in Incheon, South Korea. I craft intuitive,
        purposeful websites and web services with a focus on clarity and usability. Passionate about open source and
        committed to shaping the future of the web through thoughtful, collaborative development.
      </p>
    </section>
  )
}

const Clients = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const clients = [
    { name: "Cleopatra Trading Co.", href: "https://cleopatrading.com", year: 25, service: "Web Development" },
    { name: "EverestAvto", href: "https://everestavtovl.ru", year: 25, service: "Web Development" },
    { name: "Molotov Group", href: "https://molotov-group.ru", year: 24, service: "Frontend Development" },
    { name: "Energy Vostok", href: "https://energy-vostok.ru", year: 24, service: "Frontend Development" },
    { name: "DVZ-TIM", href: "https://dvz-tim.ru", year: 24, service: "Frontend Development" },
    { name: "Монтажстрой Подряд", href: "https://mspvl.ru", year: 24, service: "Frontend Development" },
    { name: "STAKEME", href: "https://stakeme.pro", year: 22, service: "Web Development" },
    { name: "KANCOO", href: "https://www.kancoo.tech", year: 21, service: "Web Development" },
  ]

  return (
    <section {...props}>
      <h2 className="text-secondary-foreground font-bold">Clients</h2>

      <ul className="mt-2">
        {clients.map(({ name, href, year, service }) => (
          <li key={name}>
            <Link href={href} target="_blank" className="group flex items-center gap-1 leading-5">
              <span className="group-hover:underline">{name}</span>
              <span className="opacity-50">'{year}</span>
              <span className="ml-auto">{service}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

const Projects = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const projects = [
    { name: "Nimbus", href: "https://github.com/logscore/Nimbus", year: 25, service: "Frontend Contribution" },
  ]

  return (
    <section {...props}>
      <h2 className="text-secondary-foreground font-bold">Projects</h2>

      <ul className="mt-2">
        {projects.map(({ name, href, year, service }) => (
          <li key={name}>
            <Link href={href} target="_blank" className="group flex items-center gap-1 leading-5">
              <span className="group-hover:underline">{name}</span>
              <span className="opacity-50">'{year}</span>
              <span className="ml-auto">{service}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

const Contacts = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const contactLinks = [
    { label: "ghbdtnghbdtn8@gmail.com", href: "mailto:ghbdtnghbdtn8@gmail.com" },
    { label: "@mazhugasergei", href: "https://x.com/mazhugasergei" },
  ]

  return (
    <section {...props}>
      <h2 className="text-secondary-foreground font-bold">Contacts</h2>

      <ul className="mt-2">
        {contactLinks.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} target="_blank" className="group flex items-center gap-1 leading-5">
              <span className="group-hover:underline">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
