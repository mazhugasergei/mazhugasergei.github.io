import { cn } from "@/utils"
import NextImage from "next/image"
import { ComponentProps } from "react"

export default function Image(props: ComponentProps<typeof NextImage>) {
	return <NextImage {...props} placeholder="blur" className={cn("rounded-xl", props.className)} />
}
