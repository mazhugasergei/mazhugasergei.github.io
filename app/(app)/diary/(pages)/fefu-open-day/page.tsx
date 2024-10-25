import Image from "@/components/image"
import Post from "@/components/post"
import events from "./images/events.png"
import hero from "./images/hero.png"
import main from "./images/main.png"

export default function Page() {
  return (
    <main>
      <Post title="FEFU Open Day" subtitle="March 2023">
        <Image src={hero} alt="hero" />

        <section id="">
          <h2>The story</h2>
          <p>
            I attended a 2D/3D animation and video production studio at Far Eastern Federal University (FEFU), where the
            advertising department requested I create a website for the university's upcoming Open Day event. The
            website's purpose was to engage prospective students, provide essential event details, and showcase FEFU’s
            facilities and programs.
          </p>
          <Image src={main} alt="main" />
        </section>

        <section id="events">
          <h2>Events Map Page</h2>
          <Image src={events} alt="events" />
        </section>
      </Post>
    </main>
  )
}
