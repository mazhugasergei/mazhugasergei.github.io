import { ComponentProps } from "react"

const DEFAULT_ICON_SIZE = 14

export interface IconProps extends ComponentProps<"svg"> {
	size?: number
}

export function PlayIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
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

export function PrevIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
	const s = size / 14
	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="currentColor" {...props}>
			<path
				d={`M${2 * s} ${2 * s}h${1.5 * s}v${10 * s}H${2 * s}zM${12 * s} ${3.5 * s}L${5.5 * s} ${7 * s} ${12 * s} ${10.5 * s}V${3.5 * s}z`}
			/>
		</svg>
	)
}

export function NextIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
	const s = size / 14
	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="currentColor" {...props}>
			<path
				d={`M${10.5 * s} ${2 * s}H${12 * s}v${10 * s}h${-1.5 * s}zM${2 * s} ${3.5 * s}L${8.5 * s} ${7 * s} ${2 * s} ${10.5 * s}V${3.5 * s}z`}
			/>
		</svg>
	)
}

export function ListIcon({ size = DEFAULT_ICON_SIZE, ...props }: IconProps) {
	const s = size / 24

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			fill="none"
			stroke="currentColor"
			strokeWidth={2 * s}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d={`M${2 * s} ${4 * s} h${1 * s}`} />
			<path d={`M${2 * s} ${11 * s} h${1 * s}`} />
			<path d={`M${2 * s} ${18 * s} h${1 * s}`} />
			<path d={`M${7 * s} ${4 * s} h${13 * s}`} />
			<path d={`M${7 * s} ${11 * s} h${13 * s}`} />
			<path d={`M${7 * s} ${18 * s} h${13 * s}`} />
		</svg>
	)
}
