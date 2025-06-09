import { CustomAnimatedText } from "@/components/custom-animated-text"
import { VladivostokClock } from "@/components/vladivostok-clock"
import { headingFont } from "@/fonts"
import { cn } from "@/utils"
import Link from "next/link"

interface List {
  title: string
  items: ListItem[]
}

interface ListItem {
  name: string
  href: string
  year?: number
  service?: string
}

const lists: List[] = [
  {
    title: "Clients",
    items: [
      { name: "Cleopatra Trading Co.", href: "https://cleopatrading.com", year: 25, service: "Web Development" },
      { name: "EverestAvto", href: "https://everestavtovl.ru", year: 25, service: "Web Development" },
      { name: "Molotov Group", href: "https://molotov-group.ru", year: 24, service: "Frontend Development" },
      { name: "Energy Vostok", href: "https://energy-vostok.ru", year: 24, service: "Frontend Development" },
      { name: "DVZ-TIM", href: "https://dvz-tim.ru", year: 24, service: "Frontend Development" },
      { name: "Монтажстрой Подряд", href: "https://mspvl.ru", year: 24, service: "Frontend Development" },
      { name: "STAKEME", href: "https://stakeme.pro", year: 22, service: "Web Development" },
      { name: "KANCOO", href: "https://www.kancoo.tech", year: 21, service: "Web Development" },
    ],
  },
  {
    title: "Projects",
    items: [{ name: "Nimbus", href: "https://github.com/logscore/Nimbus", year: 25, service: "Frontend Contribution" }],
  },
  {
    title: "Contacts",
    items: [
      { name: "ghbdtnghbdtn8@gmail.com", href: "mailto:ghbdtnghbdtn8@gmail.com" },
      { name: "@mazhugasergei", href: "https://x.com/mazhugasergei" },
    ],
  },
]

export default function Page() {
  return (
    <main className="grid flex-1 grid-cols-1 gap-6 p-6 text-xs md:grid-cols-2">
      <div className="flex flex-col gap-6">
        <section className="animate-slide-in-x">
          <h1 className={cn(headingFont.className, "text-xl font-bold")}>
            <CustomAnimatedText>Mazhuga</CustomAnimatedText> <CustomAnimatedText>Sergei</CustomAnimatedText>
          </h1>

          <CustomAnimatedText>Frontend Developer</CustomAnimatedText>

          <p className="mt-4 text-xs text-balance">
            A web developer based in Vladivostok, Russia, occasionally residing in Incheon, South Korea. I craft
            intuitive, purposeful websites and web services with a focus on clarity and usability. Passionate about open
            source and committed to shaping the future of the web through thoughtful, collaborative development.
          </p>
        </section>

        {lists.map((list, index) => (
          <section
            key={list.title}
            className={cn("animate-slide-in-x space-y-2", index === lists.length - 1 && "mt-auto")}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <h2 className="text-secondary-foreground font-bold">{list.title}</h2>

            <ul>
              {list.items.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} target="_blank" className="group flex items-center gap-1 leading-5">
                    <span className="group-hover:underline">{item.name}</span>
                    {item.year && <span className="opacity-50">'{item.year}</span>}
                    {item.service && <span className="ml-auto">{item.service}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="relative">
        <VladivostokClock className="absolute right-0 bottom-0" />
      </div>
    </main>
  )
}
