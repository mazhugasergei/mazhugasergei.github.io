import Link from "@/components/link"
import { buttonVariants } from "@/components/ui/button"
import { Ghost } from "lucide-react"

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">404</h1>
      <h2>Page not found</h2>
      <Ghost size={48} className="mt-4" />
      <Link href="/" className={buttonVariants({ className: "no-underline !rounded-full mt-4" })}>
        Home
      </Link>
    </div>
  )
}
