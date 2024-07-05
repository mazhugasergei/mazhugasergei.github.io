import Image from "@/components/Image"
import Link from "@/components/Link"
import Post from "@/components/Post"
import OnlineLink from "@/components/OnlineLink"
import map from "@/public/map.png"
import profile from "@/public/profile.jpeg"

export default function Page() {
  return (
    <Post title="Mazhuga Sergei" subtitle="June 2024">
      {/* about */}
      <section className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] items-center gap-4">
        <Image src={profile} alt="profile" className="max-w-[9rem] aspect-square rounded-full mx-auto" />
        <div>
          <h2 className="pt-0">About</h2>
          <p>
            Hey, I'm Sergei, a web developer. I currently work at{" "}
            <Link href="https://energy-vokstok.ru" external>
              Energy Vostok
            </Link>
            . Before that I was busy with some{" "}
            <Link href="https://github.com/stars/mazhugasergei/lists/commercial" external>
              commercial projects
            </Link>
            . I have also created{" "}
            <Link href="https://www.npmjs.com/package/tgreports" external>
              Telegram Catcher
            </Link>{" "}
            library that catches errors and sends them to your Telegram.
          </p>
        </div>
      </section>

      {/* projects */}
      <section>
        <h2>Projects</h2>
        <div className="space-y-1.5">
          <OnlineLink href="https://energy-vokstok.ru" title="Energy Vostok" action="Visit" />
          <OnlineLink href="https://dod.dvfu.ru" title="FEFU Open Day" action="Visit" />
          <OnlineLink href="https://dvz-tim.ru" title="TVZ TIM Construction" action="Visit" />
          <OnlineLink href="https://kancoo.tech" title="KANCOO" action="Visit" />
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
          <Image src={map} alt="map" className="aspect-[944/502]" border />
          <div className="flex items-center justify-end gap-2 text-sm text-muted mt-2">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Vladivostok, Primorsky Krai</span>
          </div>
        </div>
      </section>
    </Post>
  )
}
