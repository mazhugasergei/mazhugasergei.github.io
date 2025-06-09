import { CustomAnimatedText } from "@/components/shared/custom-animated-text"
import { Link } from "@/components/shared/link"
import { headingFont } from "@/fonts"
import { cn } from "@/utils"

export default function Page() {
  return (
    <main className="max-w-xl space-y-6">
      <Intro className="animate-slide-in-x" />
      <Clients className="animate-slide-in-x" style={{ animationDelay: "100ms" }} />
      <Projects className="animate-slide-in-x" style={{ animationDelay: "200ms" }} />
      <Contacts className="animate-slide-in-x" style={{ animationDelay: "300ms" }} />
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

      <p className="mt-2 text-xs text-balance">
        A web developer based in Vladivostok, Russia, occasionally residing in Incheon, South Korea. I craft intuitive,
        purposeful websites and web services with a focus on clarity and usability. Passionate about open source and
        committed to shaping the future of the web through thoughtful, collaborative development.
      </p>
    </section>
  )
}

const Clients = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const clients = [
    { name: "Cleopatra Trading Co.", href: "https://cleopatrading.com", year: 25 },
    { name: "EverestAvto", href: "https://everestavtovl.ru", year: 25 },
    { name: "Molotov Group", href: "https://molotov-group.ru", year: 24 },
    { name: "Energy Vostok", href: "https://energy-vostok.ru", year: 24 },
    { name: "DVZ-TIM", href: "https://dvz-tim.ru", year: 24 },
    { name: "Монтажстрой Подряд", href: "https://mspvl.ru", year: 24 },
    { name: "KANCOO", href: "https://www.kancoo.tech", year: 21 },
  ]

  return (
    <section {...props}>
      <h2 className="text-secondary-foreground font-bold">Clients</h2>

      <ul className="mt-2">
        {clients.map(({ name, href, year }) => (
          <li key={name}>
            <Link href={href} className="text-xs no-underline opacity-70 transition hover:opacity-100">
              {name} <span className="opacity-50">'{year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

const Projects = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const projects = [
    { name: "Nimbus", href: "https://github.com/logscore/Nimbus", year: 25 },
    { name: "Optic Shop", href: "https://mazhugasergei.github.io/optic-shop", year: 22 },
  ]

  return (
    <section {...props}>
      <h2 className="text-secondary-foreground font-bold">Projects</h2>

      <ul className="mt-2">
        {projects.map(({ name, href, year }) => (
          <li key={name}>
            <Link href={href} className="text-xs no-underline opacity-70 transition hover:opacity-100">
              {name} <span className="opacity-50">'{year}</span>
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
            <Link href={href} target="_blank" className="text-xs no-underline opacity-60 transition hover:opacity-100">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
