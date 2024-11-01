import Image from "@/components/image"
import Link from "@/components/link"
import OnlineLink from "@/components/online-link"
import map from "@/public/map.png"
import { MapPin } from "lucide-react"

export default function Page() {
  return (
    <main>
      {/* about */}
      <section>
        <div>
          <h1 className="text-4xl">Sergei Mazhuga</h1>
          <p>Front-end Web Developer</p>
        </div>

        <p>
          A web developer with a passion for creating visually stunning, intuitive websites and web services. I
          currently work at the{" "}
          <Link href="https://molotov-group.vercel.app" external>
            Molotov Group
          </Link>{" "}
          in Vladivostok, where I develop public websites and internal tools that optimize workflow efficiency. Prior to
          this, I was engaged in various commercial projects, honing my skills in both front-end and backend
          development. Additionally, I created the{" "}
          <Link href="https://www.npmjs.com/package/tgreports" external>
            Telegram Catcher
          </Link>{" "}
          library, which captures errors and delivers them directly to Telegram, making error handling more efficient
          for developers.
        </p>
      </section>

      {/* projects */}
      <section>
        <h2>Projects</h2>
        <div className="space-y-1.5">
          <OnlineLink href="https://mspvl.ru" title="Монтажстрой Подряд" action="Visit" />
          <OnlineLink href="https://energy-vostok.ru" title="Energy Vostok" action="Visit" />
          <OnlineLink href="https://dvz-tim.ru" title="DVZ TIM Construction" action="Visit" />
          <OnlineLink href="/diary/fefu-open-day" title="FEFU Open Day" action="Visit" />
          <OnlineLink href="https://kancoo.tech" title="Dalian Kancoo" action="Visit" />
        </div>
      </section>

      {/* online */}
      <section>
        <h2>Online</h2>
        <div className="space-y-1.5">
          <OnlineLink href="https://twitter.com/mazhugasergei" title="Twitter" action="Follow" />
          <OnlineLink href="https://github.com/mazhugasergei" title="GitHub" action="Follow" />
          <OnlineLink href="https://t.me/mazhugasergei" title="Telegram" action="Contact" />
        </div>
      </section>

      {/* map */}
      <section>
        <div>
          <Image src={map} alt="map" className="aspect-[5/3]" />
          <div className="flex items-center justify-end gap-1 text-sm text-muted mt-2">
            <MapPin size={12} />
            <span>Vladivostok, Primorsky Krai</span>
          </div>
        </div>
      </section>
    </main>
  )
}
