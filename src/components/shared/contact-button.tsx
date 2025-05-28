import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MailIcon, MessageCircleIcon, SendIcon } from "lucide-react"
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"

const ContactLinks = [
  { label: "Email", icon: MailIcon, href: "mailto:ghbdtnghbdtn8@gmail.com" },
  { label: "Telegram", icon: SendIcon, href: "https://t.me/mazhugasergei" },
  { label: "WhatsApp", icon: MessageCircleIcon, href: "https://wa.me/message/ALDKJYRQH7LIE1" },
]

export const ContactButton = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button className="cursor-pointer">Contact me</Button>
    </DialogTrigger>
    <DialogContent className="!max-w-md">
      <DialogHeader>
        <DialogTitle>Let's get in touch</DialogTitle>
        <DialogDescription>Choose a way to message me</DialogDescription>
      </DialogHeader>
      {ContactLinks.map(({ href, label, icon: Icon }) => (
        <Link key={label} target="_blank" href={href} className={buttonVariants({ variant: "outline" })}>
          <Icon /> {label}
        </Link>
      ))}
    </DialogContent>
  </Dialog>
)
