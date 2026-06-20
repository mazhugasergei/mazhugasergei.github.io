import { ComponentProps } from "react"

const DEFAULT_ICON_SIZE = 14

export interface IconProps extends ComponentProps<"svg"> {
	size?: number
}

export interface RecordIconProps extends IconProps {
	isRecording?: boolean
	transition?: number
}

export function RecordIcon({ size = DEFAULT_ICON_SIZE, isRecording, transition = 150, ...props }: RecordIconProps) {
	const s = size / 1.75
	const offset = (size - s) / 2

	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="currentColor" {...props}>
			<rect
				x={offset}
				y={offset}
				width={s}
				height={s}
				rx={isRecording ? 0 : s / 2}
				className="transition-[rx]"
				style={{ transitionDuration: `${transition}ms` }}
			/>
		</svg>
	)
}

export function PlayIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
	// proportions match the original 14px path (left=3, top=2.5, dx=9, dy=4.5)
	const left = (size * 3) / 14
	const top = (size * 2.5) / 14
	const dx = (size * 9) / 14
	const dy = (size * 4.5) / 14

	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="currentColor" {...props}>
			<path d={`M${left} ${top}l${dx} ${dy}-${dx} ${dy}V${top}z`} />
		</svg>
	)
}

export function PauseIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="currentColor" {...props}>
			<rect x={size / 7} y={size / 7} width={size / 3.5} height={size - (size / 7) * 2} rx={size / 14} />
			<rect
				x={size - size / 7 - size / 3.5}
				y={size / 7}
				width={size / 3.5}
				height={size - (size / 7) * 2}
				rx={size / 14}
			/>
		</svg>
	)
}

export function DownloadIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
	// proportions match the original 12px path: stem at x=6 from y=1 (len 7),
	// arrowhead at y=5 spanning x=3..9, base line at y=10 spanning x=1..11
	const box = size - 2
	const stemX = (box * 6) / 12
	const stemTop = (box * 1) / 12
	const stemLen = (box * 7) / 12
	const armX = (box * 3) / 12
	const armY = (box * 5) / 12
	const armD = (box * 3) / 12
	const baseX = (box * 1) / 12
	const baseY = (box * 10) / 12
	const baseLen = (box * 10) / 12

	return (
		<svg
			width={box}
			height={box}
			viewBox={`0 0 ${box} ${box}`}
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			{...props}
		>
			<path
				d={`M${stemX} ${stemTop}v${stemLen}M${armX} ${armY}l${armD} ${armD} ${armD}-${armD}M${baseX} ${baseY}h${baseLen}`}
			/>
		</svg>
	)
}

export function LoaderIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
	// proportions match the original 24px path: a ~270° arc of radius 9
	// centered in the box, starting at its rightmost point
	const box = size + 10
	const center = box / 2
	const radius = (box * 9) / 24
	const scale = radius / 9
	const dx = -6.219 * scale
	const dy = -8.56 * scale

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${box} ${box}`}
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d={`M${center + radius} ${center}a${radius} ${radius} 0 1 1 ${dx} ${dy}`} />
		</svg>
	)
}
