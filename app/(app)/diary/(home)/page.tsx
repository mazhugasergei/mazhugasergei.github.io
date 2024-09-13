import Link from "@/components/link"

export default function Page() {
  const pages = ["Test page"]

  return (
    <main>
      <div className="mb-4">
        <h1 className="text-4xl">Diary</h1>
        <p>View noted development.</p>
      </div>

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
    </main>
  )
}
