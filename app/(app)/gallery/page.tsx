import opticShop from "@/public/gallery/optic-shop.jpg"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  const items = [
    {
      img: opticShop,
      href: "https://mazhugasergei.github.io/optic-shop/",
    },
  ]

  return (
    <main>
      <div className="mb-4">
        <h1 className="text-4xl">Gallery</h1>
        <p>Discover implemented insperations.</p>
      </div>

      <section>
        <ul className="grid md:grid-cols-2 gap-4">
          {items.map(({ img, href }, i) => (
            <li key={href}>
              <Link target="_blank" {...{ href }} className="overflow-hidden block rounded-lg">
                <Image src={img} alt="" placeholder="blur" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
