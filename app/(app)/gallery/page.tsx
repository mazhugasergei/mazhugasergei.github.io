import Image from "next/image"
import Link from "next/link"
import opticShop from "@/public/gallery/optic-shop.jpg"

export default function Gallery() {
  const items = [
    {
      img: opticShop,
      href: "https://mazhugasergei.github.io/optic-shop/",
    },
  ]

  return (
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
  )
}
