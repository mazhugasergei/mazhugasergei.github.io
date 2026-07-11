import { ComponentProps } from "react"

export interface IconProps extends ComponentProps<"svg"> {
	size?: number
}

export interface RecordIconProps extends IconProps {
	isRecording?: boolean
	transition?: number
}
