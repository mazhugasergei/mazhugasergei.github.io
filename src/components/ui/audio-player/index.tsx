"use client"

import { Button, ButtonProps } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ComponentProps, useCallback, useEffect, useRef, useState } from "react"
import { ListIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon } from "./icons"

export const TRACKS = [
	"audio/Elysium_Sound_-_Cosmic_Dreamer.mp3",
	"audio/Greg_Kirkelie_-_1980s_Synthwave.mp3",
	"audio/Elysium_Sound_-_Stellar_Sunset_Middle.mp3",
]

const formatTime = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`

export interface AudioPlayerProps extends ComponentProps<"div"> {
	variant?: 1 | 2
	showDecorativeSpeakers?: boolean
}

const getFilenameFromSrc = (src: string): string => {
	const filename = src.split("/").pop() || src
	return filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ") // clean display name
}

// metadata extraction
const extractId3v1Title = async (url: string): Promise<string | null> => {
	try {
		const res = await fetch(url)
		if (!res.ok) return null
		const arrayBuffer = await res.arrayBuffer()
		const dv = new DataView(arrayBuffer)

		const fileSize = arrayBuffer.byteLength
		if (fileSize < 128) return null

		const tagOffset = fileSize - 128
		const tag = String.fromCharCode(dv.getUint8(tagOffset), dv.getUint8(tagOffset + 1), dv.getUint8(tagOffset + 2))

		if (tag !== "TAG") return null

		let title = ""
		for (let i = 0; i < 30; i++) {
			const byte = dv.getUint8(tagOffset + 3 + i)
			if (byte === 0) break
			title += String.fromCharCode(byte)
		}

		return title.trim() || null
	} catch {
		return null
	}
}

export function AudioPlayer({ className, variant = 1, showDecorativeSpeakers = true, ...props }: AudioPlayerProps) {
	const audioPlayerRef = useRef<HTMLAudioElement>(null)
	const audioCtxRef = useRef<AudioContext | null>(null)
	const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null)

	const [analyser, setAnalyser] = useState<AnalyserNode | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [progress, setProgress] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const [trackIndex, setTrackIndex] = useState(0)
	const [isPlayListOpen, setPlayListOpen] = useState(false)

	const currentTrackSrc = TRACKS[trackIndex]!

	const ensureAnalyser = useCallback(() => {
		const player = audioPlayerRef.current
		if (!player || audioCtxRef.current) return

		const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
		const ctx = new AudioCtx()
		audioCtxRef.current = ctx

		const analyserNode = ctx.createAnalyser()
		analyserNode.fftSize = 2048

		const source = ctx.createMediaElementSource(player)
		sourceNodeRef.current = source
		source.connect(analyserNode)
		analyserNode.connect(ctx.destination)

		setAnalyser(analyserNode)
	}, [])

	const playTrack = useCallback(
		async (index: number, shouldPlay: boolean) => {
			const player = audioPlayerRef.current
			if (!player) return

			ensureAnalyser()

			if (audioCtxRef.current?.state === "suspended") {
				await audioCtxRef.current.resume()
			}

			setTrackIndex(index)
			setProgress(0)
			setCurrentTime(0)
			setDuration(0)

			player.src = TRACKS[index]!

			if (shouldPlay) {
				const onCanPlay = async () => {
					player.removeEventListener("canplay", onCanPlay)
					try {
						await player.play()
						setIsPlaying(true)
					} catch {
						setIsPlaying(false)
					}
				}
				player.addEventListener("canplay", onCanPlay)
			} else {
				setIsPlaying(false)
			}

			player.load()
		},
		[ensureAnalyser]
	)

	const togglePlay = useCallback(async () => {
		const player = audioPlayerRef.current
		if (!player) return

		ensureAnalyser()

		if (audioCtxRef.current?.state === "suspended") {
			await audioCtxRef.current.resume()
		}

		if (isPlaying) {
			player.pause()
			setIsPlaying(false)
		} else {
			await player.play()
			setIsPlaying(true)
		}
	}, [isPlaying, ensureAnalyser])

	const prevTrack = useCallback(() => {
		const player = audioPlayerRef.current
		if (!player) return

		// if we've passed 3 seconds, restart the current track from the beginning
		if (currentTime >= 3) {
			player.currentTime = 0
			setProgress(0)
			setCurrentTime(0)

			// ensure it's playing
			if (!isPlaying) {
				player.play().catch(() => {
					setIsPlaying(false)
				})
				setIsPlaying(true)
			}
		} else {
			// otherwise go to the previous track
			const idx = (trackIndex - 1 + TRACKS.length) % TRACKS.length
			playTrack(idx, true)
		}
	}, [currentTime, trackIndex, playTrack, isPlaying])

	const nextTrack = useCallback(() => {
		const idx = (trackIndex + 1) % TRACKS.length
		playTrack(idx, true)
	}, [trackIndex, playTrack])

	const seekAudio = useCallback((value: number) => {
		const player = audioPlayerRef.current
		if (!player || !player.duration) return
		player.currentTime = (value / 100) * player.duration
	}, [])

	useEffect(() => {
		const player = audioPlayerRef.current
		if (!player) return

		const updateDuration = () => {
			if (player.duration && isFinite(player.duration)) setDuration(player.duration)
		}
		const onTimeUpdate = () => {
			if (!player.duration) return
			setProgress((player.currentTime / player.duration) * 100)
			setCurrentTime(player.currentTime)
		}
		const onEnded = () => {
			const next = (trackIndex + 1) % TRACKS.length
			playTrack(next, true)
		}

		player.addEventListener("loadedmetadata", updateDuration)
		player.addEventListener("durationchange", updateDuration)
		player.addEventListener("canplay", updateDuration)
		player.addEventListener("timeupdate", onTimeUpdate)
		player.addEventListener("ended", onEnded)
		updateDuration()

		return () => {
			player.removeEventListener("loadedmetadata", updateDuration)
			player.removeEventListener("durationchange", updateDuration)
			player.removeEventListener("canplay", updateDuration)
			player.removeEventListener("timeupdate", onTimeUpdate)
			player.removeEventListener("ended", onEnded)
		}
	}, [trackIndex, playTrack])

	useEffect(() => {
		return () => {
			audioCtxRef.current?.close()
		}
	}, [])

	return (
		<div
			className={`w-full max-w-md rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 ${className || ""}`}
			{...props}
		>
			<div className="flex items-center justify-between">
				<p className="text-[0.6875rem] tracking-[0.075rem] text-neutral-500 uppercase">audio player</p>
			</div>

			{/* screen */}
			<div className="relative mt-4 grid items-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 max-sm:aspect-3/2">
				<Display analyser={analyser} isActive={isPlaying} barOrigin="center" className="my-1" />
				{variant === 1 && <PlayList isOpen={isPlayListOpen} currentTrackIndex={trackIndex} onTrackSelect={playTrack} />}
			</div>

			{/* buttons */}
			<div className="mt-4 flex gap-3 max-sm:flex-col sm:items-center">
				<div className="flex items-center gap-2">
					<PrevButton size="icon-sm" onClick={prevTrack} />
					<PlayButton size="icon-sm" isPlaying={isPlaying} onClick={togglePlay} />
					<NextButton size="icon-sm" onClick={nextTrack} />
					<PlayListButton
						isOpen={isPlayListOpen}
						onClick={() => setPlayListOpen((v) => !v)}
						className="ml-auto sm:hidden"
					/>
				</div>

				<div className="grid flex-1 grid-cols-[auto_1fr_auto] items-center gap-2">
					<span className="text-xs text-neutral-600 tabular-nums">{formatTime(currentTime)}</span>
					<SeekBar progress={progress} onSeek={seekAudio} />
					<span className="text-xs text-neutral-600 tabular-nums">{formatTime(duration)}</span>
				</div>

				<PlayListButton isOpen={isPlayListOpen} onClick={() => setPlayListOpen((v) => !v)} className="max-sm:hidden" />
			</div>

			{variant === 2 && (
				<PlayList variant={2} isOpen={isPlayListOpen} currentTrackIndex={trackIndex} onTrackSelect={playTrack} />
			)}

			<audio ref={audioPlayerRef} src={currentTrackSrc} preload="metadata" className="hidden" />

			{showDecorativeSpeakers && <DecorativeSpeakers className="mt-4" />}
		</div>
	)
}

type DisplayBarOrigin = "bottom" | "center"

export interface DisplayProps extends ComponentProps<"div"> {
	analyser: AnalyserNode | null
	isActive: boolean
	barOrigin?: DisplayBarOrigin
}

export function Display({ analyser, isActive, barOrigin = "bottom", className, ...props }: DisplayProps) {
	const BAR_WIDTH = 3
	const BAR_GAP = 3
	const SMOOTHING = 0.18
	const STOP_SMOOTHING = 0.08
	const PEAK_HOLD_MS = 100
	const PEAK_FALL_RATE = 0.012

	const canvasRef = useRef<HTMLCanvasElement>(null)
	const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null)
	const animFrameRef = useRef(0)
	const levelsRef = useRef<number[]>([])
	const peaksRef = useRef<{ level: number; heldUntil: number }[]>([])
	const barOriginRef = useRef<DisplayBarOrigin>(barOrigin)
	const isActiveRef = useRef(isActive)

	useEffect(() => {
		barOriginRef.current = barOrigin
	}, [barOrigin])
	useEffect(() => {
		isActiveRef.current = isActive
	}, [isActive])

	const getBarCount = useCallback((w: number, dpr: number) => {
		const slot = (BAR_WIDTH + BAR_GAP) * dpr
		return Math.ceil(w / slot)
	}, [])

	const drawFrame = useCallback(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext("2d")
		if (!ctx) return

		const dpr = window.devicePixelRatio
		const { width: w, height: h } = canvas
		const barCount = getBarCount(w, dpr)
		const slot = (BAR_WIDTH + BAR_GAP) * dpr
		const barW = BAR_WIDTH * dpr
		const centered = barOriginRef.current === "center"
		const half = Math.ceil(barCount / 2)

		ctx.clearRect(0, 0, w, h)

		for (let i = 0; i < barCount; i++) {
			// outer edges = loudest (high binIndex), center = quietest (binIndex 0)
			const binIndex = i < half ? half - 1 - i : i - half

			const level = levelsRef.current[binIndex] ?? 0
			const peak = peaksRef.current[binIndex] ?? { level: 0, heldUntil: 0 }

			const x = i * slot
			const barH = Math.max(2 * dpr, level * h)

			ctx.fillStyle = "#fff"
			if (centered) {
				ctx.fillRect(x, (h - barH) / 2, barW, barH)
			} else {
				ctx.fillRect(x, h - barH, barW, barH)
			}

			if (peak.level > 0.02) {
				ctx.fillStyle = "#f87171"
				if (centered) {
					const peakHalf = (peak.level * h) / 2
					const centerY = h / 2
					ctx.fillRect(x, centerY - peakHalf, barW, 2 * dpr)
					ctx.fillRect(x, centerY + peakHalf - 2 * dpr, barW, 2 * dpr)
				} else {
					ctx.fillRect(x, h - peak.level * h, barW, 2 * dpr)
				}
			}
		}
	}, [getBarCount])

	const drawIdle = useCallback(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		canvas.width = canvas.offsetWidth * window.devicePixelRatio
		canvas.height = canvas.offsetHeight * window.devicePixelRatio
		const ctx = canvas.getContext("2d")
		if (!ctx) return
		const { width: w, height: h } = canvas

		const dpr = window.devicePixelRatio
		const slot = (BAR_WIDTH + BAR_GAP) * dpr
		const barW = BAR_WIDTH * dpr
		const barCount = getBarCount(w, dpr)
		const stubH = 2 * dpr

		ctx.fillStyle = "rgba(148,163,184,0.25)"
		for (let i = 0; i < barCount; i++) {
			ctx.fillRect(i * slot, (h - stubH) / 2, barW, stubH)
		}
	}, [getBarCount])

	const decayLoop = useCallback(() => {
		if (isActiveRef.current) return

		const levels = levelsRef.current
		const peaks = peaksRef.current
		const now = Date.now()
		let anyVisible = false

		for (let i = 0; i < levels.length; i++) {
			levels[i] = (levels[i] ?? 0) * (1 - STOP_SMOOTHING)
			const peak = peaks[i]
			if (peak) {
				if (now > peak.heldUntil) {
					peak.level = Math.max(0, peak.level - PEAK_FALL_RATE)
				}
				if (peak.level > 0.005) anyVisible = true
			}
			if ((levels[i] ?? 0) > 0.005) anyVisible = true
		}

		drawFrame()

		if (anyVisible) {
			animFrameRef.current = requestAnimationFrame(decayLoop)
		} else {
			drawIdle()
		}
	}, [drawFrame, drawIdle])

	const draw = useCallback(() => {
		const canvas = canvasRef.current
		const dataArray = dataArrayRef.current
		if (!analyser || !dataArray || !canvas) return

		animFrameRef.current = requestAnimationFrame(draw)
		analyser.getByteFrequencyData(dataArray)

		const dpr = window.devicePixelRatio
		const { width: w } = canvas
		const barCount = getBarCount(w, dpr)
		const half = Math.ceil(barCount / 2)
		const binCount = dataArray.length
		const now = Date.now()

		if (levelsRef.current.length !== half) {
			levelsRef.current = Array(half).fill(0)
			peaksRef.current = Array.from({ length: half }, () => ({ level: 0, heldUntil: 0 }))
		}

		for (let i = 0; i < half; i++) {
			const startBin = Math.floor(Math.pow(i / half, 1.6) * binCount)
			const endBin = Math.floor(Math.pow((i + 1) / half, 1.6) * binCount)
			let sum = 0
			const count = Math.max(1, endBin - startBin)
			for (let b = startBin; b < endBin; b++) sum += dataArray[b] ?? 0
			const raw = Math.min(1, sum / count / 255)

			const prev = levelsRef.current[i] ?? 0
			const level = prev + (raw - prev) * (1 - SMOOTHING)
			levelsRef.current[i] = level

			const peak = peaksRef.current[i]!
			if (level >= peak.level) {
				peak.level = level
				peak.heldUntil = now + PEAK_HOLD_MS
			} else if (now > peak.heldUntil) {
				peak.level = Math.max(0, peak.level - PEAK_FALL_RATE)
			}
		}

		drawFrame()
	}, [analyser, getBarCount, drawFrame])

	useEffect(() => {
		drawIdle()
		window.addEventListener("resize", drawIdle)
		return () => window.removeEventListener("resize", drawIdle)
	}, [drawIdle])

	useEffect(() => {
		if (!isActive) drawIdle()
	}, [barOrigin, isActive, drawIdle])

	useEffect(() => {
		if (isActive && analyser) {
			const canvas = canvasRef.current
			if (canvas) {
				canvas.width = canvas.offsetWidth * window.devicePixelRatio
				canvas.height = canvas.offsetHeight * window.devicePixelRatio
			}
			dataArrayRef.current = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount))
			const barCount = getBarCount(canvasRef.current?.width ?? 0, window.devicePixelRatio)
			const half = Math.ceil(barCount / 2)
			levelsRef.current = Array(half).fill(0)
			peaksRef.current = Array.from({ length: half }, () => ({ level: 0, heldUntil: 0 }))
			draw()
		} else {
			cancelAnimationFrame(animFrameRef.current)
			animFrameRef.current = requestAnimationFrame(decayLoop)
		}
		return () => cancelAnimationFrame(animFrameRef.current)
	}, [isActive, analyser, draw, drawIdle, getBarCount, decayLoop])

	return (
		<div className={`overflow-hidden ${className || ""}`} {...props}>
			<canvas ref={canvasRef} className="block h-20 w-full" />
		</div>
	)
}

export function PlayButton({ isPlaying, ...props }: { isPlaying: boolean } & ButtonProps) {
	return (
		<Button aria-label={isPlaying ? "Pause" : "Play"} variant="outline" size="icon" {...props}>
			{isPlaying ? <PauseIcon /> : <PlayIcon />}
		</Button>
	)
}

export function PrevButton(props: ButtonProps) {
	return (
		<Button aria-label="Previous" variant="outline" size="icon" {...props}>
			<PrevIcon />
		</Button>
	)
}

export function NextButton(props: ButtonProps) {
	return (
		<Button aria-label="Next" variant="outline" size="icon" {...props}>
			<NextIcon />
		</Button>
	)
}

interface PlayListButtonProps extends ComponentProps<"button"> {
	isOpen: boolean
}

export function PlayListButton({ isOpen, className, ...props }: PlayListButtonProps) {
	return (
		<button
			aria-label={isOpen ? "Close play list" : "Open play list"}
			className={`-m-2 p-2 text-[0.6875rem] tracking-[0.075rem] text-neutral-500 uppercase transition-colors hover:text-neutral-300 ${className || ""}`}
			{...props}
		>
			<ListIcon />
		</button>
	)
}

interface SeekBarProps extends Omit<ComponentProps<"div">, "onChange"> {
	progress: number
	disabled?: boolean
	onSeek?: (value: number) => void
}

export function SeekBar({ progress, disabled, className, onSeek, ...props }: SeekBarProps) {
	return (
		<div className={`relative isolate h-5 flex-1 ${className || ""}`} {...props}>
			<div className="absolute top-1/2 -z-10 h-1 w-full -translate-y-1/2 rounded-full bg-neutral-800" />
			<div
				className="pointer-events-none absolute top-1/2 -z-10 h-1 -translate-y-1/2 rounded-full bg-neutral-400 transition-[width] duration-100"
				style={{ width: `${progress}%` }}
			/>
			<input
				type="range"
				min={0}
				max={100}
				value={progress}
				disabled={disabled}
				onChange={(e) => onSeek?.(Number(e.target.value))}
				className={`absolute inset-0 h-full w-full appearance-none bg-transparent [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-transparent`}
			/>
		</div>
	)
}

interface PlayListProps {
	variant?: 1 | 2
	isOpen: boolean
	currentTrackIndex: number
	onTrackSelect: (index: number, shouldPlay: boolean) => void
}

export function PlayList({ variant = 1, isOpen, currentTrackIndex, onTrackSelect }: PlayListProps) {
	const [trackNames, setTrackNames] = useState<string[]>([])

	// load metadata for all tracks
	useEffect(() => {
		const loadAllMetadata = async () => {
			const names = await Promise.all(
				TRACKS.map(async (track) => {
					const metaTitle = await extractId3v1Title(track)
					return metaTitle || getFilenameFromSrc(track)
				})
			)
			setTrackNames(names)
		}

		loadAllMetadata()
	}, [])

	return (
		<div
			className={`overflow-hidden transition-all duration-150 ease-in-out ${
				variant === 1 ? "absolute inset-0 z-10 bg-neutral-900" : variant === 2 ? "mt-4" : ""
			}`}
			style={{
				opacity: isOpen ? 1 : 0,
				maxHeight: variant === 2 ? (isOpen ? "31.25rem" : "0") : "",
				marginTop: variant === 2 ? (isOpen ? "" : "0") : "",
				pointerEvents: variant === 1 ? (isOpen ? "auto" : "none") : "auto",
			}}
		>
			<ScrollArea
				className={variant === 1 ? "flex h-full flex-col gap-1 p-2" : variant === 2 ? "flex flex-col gap-1" : ""}
			>
				{TRACKS.map((track, i) => {
					const displayName = trackNames[i] ?? getFilenameFromSrc(track)

					return (
						<button
							key={track}
							onClick={() => onTrackSelect(i, true)}
							className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
								i === currentTrackIndex
									? "bg-neutral-800 text-neutral-100"
									: "text-neutral-500 hover:bg-neutral-800/50 hover:text-neutral-300"
							}`}
						>
							<span className="w-4 shrink-0 text-center text-[0.6875rem] text-neutral-600 tabular-nums">{i + 1}</span>
							<span className="text-[0.6875rem] tracking-[0.075rem]">{displayName}</span>
						</button>
					)
				})}
			</ScrollArea>
		</div>
	)
}

export function DecorativeSpeakers({ className, ...props }: ComponentProps<"div">) {
	const ASPECT_RATIO = 10 / 1
	const DOT_SIZE = 3
	const DOT_GAP = 5

	const containerRef = useRef<HTMLDivElement>(null)
	const [grid, setGrid] = useState({ cols: 0, rows: 0 })

	useEffect(() => {
		const container = containerRef.current
		if (!container) return
		const updateGrid = () => {
			const { width, height } = container.getBoundingClientRect()
			const cell = DOT_SIZE + DOT_GAP
			const cols = Math.max(0, Math.floor((width + DOT_GAP) / cell))
			const rows = Math.max(0, Math.floor((height + DOT_GAP) / cell))
			setGrid({ cols, rows })
		}
		updateGrid()
		const observer = new ResizeObserver(updateGrid)
		observer.observe(container)
		return () => observer.disconnect()
	}, [])

	const dots = Array.from({ length: grid.cols * grid.rows })

	return (
		<div
			ref={containerRef}
			className={`relative w-full ${className || ""}`}
			style={{ aspectRatio: `${ASPECT_RATIO}` }}
			{...props}
		>
			<div
				className="absolute inset-0 grid place-content-center"
				style={{
					gridTemplateColumns: `repeat(${grid.cols}, ${DOT_SIZE}px)`,
					gridTemplateRows: `repeat(${grid.rows}, ${DOT_SIZE}px)`,
					gap: `${DOT_GAP}px`,
				}}
			>
				{dots.map((_, i) => (
					<span key={i} className="rounded-full bg-black" style={{ width: DOT_SIZE, height: DOT_SIZE }} />
				))}
			</div>
		</div>
	)
}
