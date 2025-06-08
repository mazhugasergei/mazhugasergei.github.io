import { CustomAnimatedText } from "@/components/shared/custom-animated-text"
import { Link } from "@/components/shared/link"
import { headingFont } from "@/fonts"
import { cn } from "@/utils"

export default function Home() {
  return (
    <main className="max-w-xl space-y-6">
      <div className="animate-slide-in-x space-y-1">
        <h1 className={cn(headingFont.className, "text-xl font-bold")}>
          <CustomAnimatedText text="Mazhuga" /> <CustomAnimatedText text="Sergei" />
        </h1>
        <CustomAnimatedText text="Frontend Developer" className="text-xs" />
      </div>

      <p className="animate-slide-in-x text-xs text-balance">
        A web developer based in Vladivostok, Russia, occasionally residing in Incheon, South Korea. I craft intuitive,
        purposeful websites and web services with a focus on clarity and usability. Passionate about open source and
        committed to shaping the future of the web through thoughtful, collaborative development.
      </p>

      <Projects className="animate-slide-in-x" style={{ animationDelay: "150ms" }} />
      <Contacts className="animate-slide-in-x" style={{ animationDelay: "300ms" }} />
    </main>
  )
}

const Projects = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const projects = [
    { name: "Cleopatra Trading Co.", href: "https://cleopatrading.com" },
    { name: "Nimbus", href: "https://github.com/logscore/Nimbus" },
    { name: "Optic Shop", href: "https://mazhugasergei.github.io/optic-shop" },
    { name: "KANCOO", href: "https://www.kancoo.tech" },
    { name: "Molotov Group", href: "https://molotov-group.ru" },
    { name: "Energy Vostok", href: "https://energy-vostok.ru" },
    { name: "DVZ-TIM", href: "https://dvz-tim.ru" },
    { name: "EverestAvto", href: "https://everestavtovl.ru" },
    { name: "Монтажстрой Подряд", href: "https://mspvl.ru" },
  ]

  return (
    <section {...props}>
      <h2 className="opacity-75">Clients</h2>

      <ul className="mt-2">
        {projects.map(({ name, href }) => (
          <li key={name}>
            <Link href={href} className="text-foreground/50 hover:text-foreground text-xs no-underline transition">
              {name}
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
      <h2 className="opacity-75">Contacts</h2>

      <ul className="mt-2">
        {contactLinks.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="text-foreground/50 hover:text-foreground text-xs no-underline transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
