import { Button } from "@/shared/ui/button"
import { ComponentProps } from "react"

export type SoundKey = "click" | "sound-on" | "sound-off"

export interface SoundButtonProps extends ComponentProps<typeof Button> {
	clickSound?: SoundKey
}
