"use client"

import { Button } from "@/components/ui/button"
import { ComponentProps, useCallback, useEffect, useRef, useState } from "react"
import { DownloadIcon, LoaderIcon, PauseIcon, PlayIcon, RecordIcon } from "./icons"

export function audioBufferToWav(buffer: AudioBuffer): ArrayBuffer {
	const numOfChan = buffer.numberOfChannels
	const length = buffer.length * numOfChan * 2 + 44
	const result = new ArrayBuffer(length)
	const view = new DataView(result)
	const channels: Float32Array[] = []
	let offset = 0
	let pos = 0

	const writeString = (str: string) => {
		for (let i = 0; i < str.length; i++) {
			view.setUint8(pos++, str.charCodeAt(i))
		}
	}

	// Write WAV header
	writeString("RIFF")
	view.setUint32(pos, length - 8, true)
	pos += 4
	writeString("WAVE")
	writeString("fmt ")
	view.setUint32(pos, 16, true)
	pos += 4
	view.setUint16(pos, 1, true)
	pos += 2 // PCM
	view.setUint16(pos, numOfChan, true)
	pos += 2
	view.setUint32(pos, buffer.sampleRate, true)
	pos += 4
	view.setUint32(pos, buffer.sampleRate * numOfChan * 2, true)
	pos += 4
	view.setUint16(pos, numOfChan * 2, true)
	pos += 2
	view.setUint16(pos, 16, true)
	pos += 2
	writeString("data")
	view.setUint32(pos, length - pos - 4, true)
	pos += 4

	// Extract channel data
	for (let i = 0; i < numOfChan; i++) {
		channels.push(buffer.getChannelData(i))
	}

	// Interleave samples (TypeScript-safe)
	const maxSamples = buffer.length
	while (offset < maxSamples) {
		for (let i = 0; i < numOfChan; i++) {
			const sample = channels[i]?.[offset] ?? 0 // Safe access with fallback

			const clamped = Math.max(-1, Math.min(1, sample))
			const scaled = clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff

			view.setInt16(pos, scaled | 0, true) // | 0 ensures integer
			pos += 2
		}
		offset++
	}

	return result
}

export function AudioRecorder({ className, ...props }: ComponentProps<"div">) {
	const audioPlayerRef = useRef<HTMLAudioElement>(null)
	const mediaRecorderRef = useRef<MediaRecorder | null>(null)
	const chunksRef = useRef<Blob[]>([])
	const streamRef = useRef<MediaStream | null>(null)
	const audioBlobRef = useRef<Blob | null>(null)

	const [analyser, setAnalyser] = useState<AnalyserNode | null>(null)
	const [isRecording, setIsRecording] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const [elapsed, setElapsed] = useState(0)
	const [playbackTime, setPlaybackTime] = useState<number | null>(null)
	const [status, setStatus] = useState<string | null>(null)
	const [hasRecording, setHasRecording] = useState(false)
	const [progress, setProgress] = useState(0)

	// live recording timer — independent of the canvas, just counts up while recording
	useEffect(() => {
		if (!isRecording) return
		const start = Date.now()
		const id = setInterval(() => setElapsed((Date.now() - start) / 1000), 100)
		return () => clearInterval(id)
	}, [isRecording])

	const handleStop = useCallback(() => {
		const blob = new Blob(chunksRef.current, { type: "audio/webm" })
		audioBlobRef.current = blob
		if (audioPlayerRef.current) audioPlayerRef.current.src = URL.createObjectURL(blob)
		setHasRecording(true)
		// fresh recording, no playback position to show yet
		setPlaybackTime(null)
	}, [])

	const toggleRecord = useCallback(async () => {
		if (isRecording) {
			mediaRecorderRef.current?.stop()
			streamRef.current?.getTracks().forEach((t) => t.stop())
			setIsRecording(false)
			setAnalyser(null)
			return
		}

		try {
			setStatus(null)
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
			streamRef.current = stream

			const AudioCtx =
				window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
			const audioCtx = new AudioCtx()
			const analyserNode = audioCtx.createAnalyser()
			analyserNode.fftSize = 2048
			audioCtx.createMediaStreamSource(stream).connect(analyserNode)

			const mr = new MediaRecorder(stream)
			mediaRecorderRef.current = mr
			chunksRef.current = []
			mr.ondataavailable = (e) => chunksRef.current.push(e.data)
			mr.onstop = handleStop
			mr.start()

			setIsRecording(true)
			setElapsed(0)
			setAnalyser(analyserNode)
		} catch {
			setStatus("mic access denied")
		}
	}, [isRecording, handleStop])

	const togglePlay = useCallback(() => {
		const player = audioPlayerRef.current
		if (!player || !hasRecording) return
		isPlaying ? player.pause() : player.play()
		setIsPlaying(!isPlaying)
	}, [isPlaying, hasRecording])

	const seekAudio = useCallback((value: number) => {
		const player = audioPlayerRef.current
		if (!player || !player.duration) return
		player.currentTime = (value / 100) * player.duration
	}, [])

	useEffect(() => {
		const player = audioPlayerRef.current
		if (!player) return
		const onTimeUpdate = () => {
			if (!player.duration) return
			setProgress((player.currentTime / player.duration) * 100)
			// also captures the exact position when paused, since currentTime
			// doesn't change after pause — no separate "pause" listener needed
			setPlaybackTime(player.currentTime)
		}
		const onEnded = () => {
			setIsPlaying(false)
			setProgress(0)
			// played all the way through, fall back to showing total duration
			setPlaybackTime(null)
		}
		player.addEventListener("timeupdate", onTimeUpdate)
		player.addEventListener("ended", onEnded)
		return () => {
			player.removeEventListener("timeupdate", onTimeUpdate)
			player.removeEventListener("ended", onEnded)
		}
	}, [])

	// while recording: live recording timer
	// otherwise: playback position if there is one (mid-play or paused), else the recorded duration
	const displayTime = isRecording ? elapsed : (playbackTime ?? elapsed)

	return (
		<div
			className={`w-full max-w-md space-y-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4 ${className || ""}`}
			{...props}
		>
			<div className="flex justify-between gap-4">
				<p className="text-[0.6875rem] tracking-[0.075rem] text-neutral-500 uppercase">audio recorder</p>
				{status && <p className="text-[0.6875rem] tracking-[0.075rem] text-neutral-500">{status}</p>}
			</div>

			<Dsplay
				analyser={analyser}
				isActive={isRecording}
				className="rounded-xl border border-neutral-800 bg-neutral-900 py-1"
			/>

			<div className="flex items-center gap-3">
				<RecordButton isRecording={isRecording} onClick={toggleRecord} disabled={isPlaying} />
				<PlayButton isPlaying={isPlaying} disabled={!hasRecording || isRecording} onClick={togglePlay} />
				<SeekBar progress={progress} onSeek={seekAudio} disabled={!hasRecording || isRecording} />
				<Time time={displayTime} />
				<DownloadButton blob={audioBlobRef.current} originalName="recording" disabled={!hasRecording || isRecording} />
				<audio ref={audioPlayerRef} className="hidden" />
			</div>

			<DecorativeSpeakers />
		</div>
	)
}

export interface DisplayProps extends ComponentProps<"div"> {
	analyser: AnalyserNode | null
	isActive: boolean
}

export function Dsplay({ analyser, isActive, className, ...props }: DisplayProps) {
	const BAR_WIDTH = 3
	const BAR_GAP = 2
	const SAMPLE_INTERVAL = 60 // ms
	const LINE_STOP = 0.9
	const LINE_START = 0.0
	const LINE_WIDTH = 2

	const canvasRef = useRef<HTMLCanvasElement>(null)
	const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null)
	const animFrameRef = useRef(0)
	const historyRef = useRef<number[]>([])
	const lastSampleRef = useRef(0)

	const drawBaseline = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
		const dpr = window.devicePixelRatio
		const slot = (BAR_WIDTH + BAR_GAP) * dpr
		const barHeight = 2 * dpr
		const count = Math.ceil(w / slot)

		ctx.fillStyle = "rgba(148,163,184,0.25)"
		for (let i = 0; i < count; i++) {
			ctx.fillRect(i * slot, (h - barHeight) / 2, BAR_WIDTH * dpr, barHeight)
		}
	}, [])

	const drawIdle = useCallback(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		canvas.width = canvas.offsetWidth * window.devicePixelRatio
		canvas.height = canvas.offsetHeight * window.devicePixelRatio
		const ctx = canvas.getContext("2d")
		if (!ctx) return
		const { width: w, height: h } = canvas
		ctx.clearRect(0, 0, w, h)
		drawBaseline(ctx, w, h)
	}, [drawBaseline])

	const drawBars = useCallback(() => {
		const canvas = canvasRef.current
		const dataArray = dataArrayRef.current
		if (!analyser || !dataArray || !canvas) return

		animFrameRef.current = requestAnimationFrame(drawBars)

		analyser.getByteTimeDomainData(dataArray)

		let sumSquares = 0
		for (let i = 0; i < dataArray.length; i++) {
			const v = ((dataArray[i] ?? 128) - 128) / 128
			sumSquares += v * v
		}
		const rms = Math.sqrt(sumSquares / dataArray.length)
		const level = Math.min(1, rms * 4)

		const dpr = window.devicePixelRatio
		const slot = (BAR_WIDTH + BAR_GAP) * dpr
		const { width: w, height: h } = canvas

		const maxVisibleBars = Math.max(1, Math.ceil((w * LINE_STOP) / slot))
		const targetX = maxVisibleBars * slot

		const now = Date.now()
		if (now - lastSampleRef.current >= SAMPLE_INTERVAL) {
			lastSampleRef.current = now
			const history = historyRef.current
			history.push(level)
			if (history.length > maxVisibleBars) history.shift()
		}

		const ctx = canvas.getContext("2d")
		if (!ctx) return
		ctx.clearRect(0, 0, w, h)

		drawBaseline(ctx, w, h)

		const history = historyRef.current
		history.forEach((lvl, i) => {
			const barHeight = Math.max(2 * dpr, lvl * h * 0.9)
			const x = i * slot
			ctx.fillStyle = "#fff"
			ctx.fillRect(x, (h - barHeight) / 2, BAR_WIDTH * dpr, barHeight)
		})

		// red line travels from LINE_START_PERCENT → LINE_STOP_PERCENT as bars fill
		const startX = w * LINE_START
		const lineX =
			history.length >= maxVisibleBars ? targetX : startX + (history.length / maxVisibleBars) * (targetX - startX)
		ctx.fillStyle = "#f87171"
		ctx.fillRect(lineX, 0, LINE_WIDTH * dpr, h)
	}, [analyser, drawBaseline])

	useEffect(() => {
		drawIdle()
		window.addEventListener("resize", drawIdle)
		return () => window.removeEventListener("resize", drawIdle)
	}, [drawIdle])

	useEffect(() => {
		if (isActive && analyser) {
			dataArrayRef.current = new Uint8Array(new ArrayBuffer(analyser.fftSize))
			historyRef.current = []
			lastSampleRef.current = 0
			drawBars()
		} else {
			cancelAnimationFrame(animFrameRef.current)
			drawIdle()
		}

		return () => cancelAnimationFrame(animFrameRef.current)
	}, [isActive, analyser, drawBars, drawIdle])

	return (
		<div className={`overflow-hidden ${className || ""}`} {...props}>
			<canvas ref={canvasRef} className="block h-20 w-full" />
		</div>
	)
}

export interface RecordButtonProps extends ComponentProps<"button"> {
	isRecording: boolean
}

export function RecordButton({ isRecording, ...props }: RecordButtonProps) {
	return (
		<Button
			aria-label={isRecording ? "Stop recording" : "Start recording"}
			variant="outline"
			size="icon"
			className={`${isRecording ? "border-red-400! bg-red-400/5! text-red-400! hover:bg-red-400/10!" : ""}`}
			{...props}
		>
			<RecordIcon isRecording={isRecording} className={isRecording ? "animate-pulse" : ""} />
		</Button>
	)
}

export interface PlayButtonProps extends ComponentProps<"button"> {
	isPlaying: boolean
}

export function PlayButton({ isPlaying, ...props }: PlayButtonProps) {
	return (
		<Button aria-label={isPlaying ? "Pause" : "Play"} variant="outline" size="icon" {...props}>
			{isPlaying ? <PauseIcon /> : <PlayIcon />}
		</Button>
	)
}

export interface SeekBarProps extends Omit<ComponentProps<"div">, "onChange"> {
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
				className={`absolute inset-0 h-full w-full appearance-none bg-transparent ${disabled ? "" : "cursor-pointer"} [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-transparent`}
			/>
		</div>
	)
}

export interface TimeProps extends ComponentProps<"span"> {
	time: number
}

export function Time({ time, ...props }: TimeProps) {
	return (
		<span className="text-xs text-neutral-600 tabular-nums" {...props}>
			{Math.floor(time / 60)}:{String(Math.floor(time % 60)).padStart(2, "0")}
		</span>
	)
}

export interface DownloadButtonProps extends React.ComponentProps<typeof Button> {
	blob: Blob | null
	originalName?: string
}

export function DownloadButton({ blob, originalName = "recording", disabled, ...props }: DownloadButtonProps) {
	const [loading, setLoading] = useState(false)

	const convertToWav = async () => {
		if (!blob) return
		setLoading(true)

		try {
			const arrayBuffer = await blob.arrayBuffer()
			const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

			const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

			const wavBuffer = audioBufferToWav(audioBuffer) // pure JS function below

			const wavBlob = new Blob([wavBuffer], { type: "audio/wav" })

			const url = URL.createObjectURL(wavBlob)
			const a = document.createElement("a")
			a.href = url
			a.download = `${originalName}-${Date.now()}.wav`
			a.click()
			URL.revokeObjectURL(url)

			// Optional: close context to free memory
			audioContext.close()
		} catch (err) {
			console.error("Conversion failed:", err)
			alert("Failed to convert audio. Try recording in a different format or browser.")
		} finally {
			setLoading(false)
		}
	}

	return (
		<Button
			aria-label="Download the recording"
			variant="outline"
			size="icon"
			onClick={convertToWav}
			disabled={!blob || loading || disabled}
			{...props}
		>
			{loading ? <LoaderIcon className="animate-spin" /> : <DownloadIcon />}
		</Button>
	)
}

export function DecorativeSpeakers() {
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
		<div ref={containerRef} className="relative w-full" style={{ aspectRatio: `${ASPECT_RATIO}` }}>
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
