import Link from "@/components/link"
import Post from "@/components/post"

export default function Diary() {
  const pages = ["Test page"]

  return (
    <Post>
      <h1>Diary</h1>
      <section>
        <ul>
          {pages.map((title, i) => (
            <li key={`${i}_${title}`}>
              <p>
                <Link href={`/diary/${title.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                  {title}
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Post>
  )
}
