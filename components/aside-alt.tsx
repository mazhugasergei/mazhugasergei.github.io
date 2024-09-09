import Link from "next/link"
import Contents from "./contents"

export default function AsideAlt({ title, href, className }: { title: string; href: string; className?: string }) {
  return (
    <aside className="max-w-[42rem] lg:fixed top-0 flex flex-col max-lg:pb-[inherit] lg:pt-[inherit] lg:px-6 mx-auto">
      {/* back */}
      <Link
        {...{ href }}
        className={`flex self-start items-center gap-1 text-secondary hover:text-primary transition p-1 -m-1 ${className}`}
      >
        <svg width="18px" height="18px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" color="currentColor">
          <path
            d="M10.25 4.75l-3.5 3.5 3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6.75 8.25h6a4 4 0 014 4v7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="text-[0.875rem]">{title}</span>
      </Link>

      {/* contents */}
      <Contents />
    </aside>
  )
}
