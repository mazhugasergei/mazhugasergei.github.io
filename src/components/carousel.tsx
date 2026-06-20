"use client"

import { AnimatedButtonExample } from "@/components/examples/animated-button"
import { AudioPlayer } from "@/components/ui/audio-player"
import { AudioRecorder } from "@/components/ui/audio-recorder"
import { SoundLink } from "@/components/ui/sounds"
import { cn } from "@/utils/classname"
import { ArrowUpRightIcon } from "lucide-react"
import { ComponentProps, ReactNode, useCallback, useEffect, useRef, useState } from "react"

const SLIDE_DURATION = 10000

interface Slide {
	label: string
	title: string
	content: ReactNode
	href?: string
}

const slides: Slide[] = [
	{
		label: "Latest Release",
		title: "Audio Player",
		content: <AudioPlayer />,
		href: "/components/audio-player",
	},
	{
		label: "New Component",
		title: "Audio Recorder",
		content: <AudioRecorder />,
		href: "/components/audio-recorder",
	},
	{
		label: "Open Source",
		title: "Personal UI Library",
		content: <AnimatedButtonExample />,
		href: "/components",
	},
]

interface Props extends ComponentProps<"div"> {}

export function Carousel({ className, ...props }: Props) {
	const [current, setCurrent] = useState(0)
	const [progress, setProgress] = useState(0)
	const [paused, setPaused] = useState(false)
	const [direction, setDirection] = useState<"forward" | "backward">("forward")

	const rafRef = useRef<number | null>(null)
	const startTimeRef = useRef<number | null>(null)
	const resettingRef = useRef(false)

	const resetTimer = () => {
		startTimeRef.current = null
		setProgress(0)
	}

	const goTo = useCallback(
		(index: number) => {
			resettingRef.current = true
			setDirection(index > current ? "forward" : "backward")
			setCurrent(index)
			resetTimer()
		},
		[current]
	)

	const goNext = useCallback(() => {
		resettingRef.current = true
		setDirection("forward")
		setCurrent((c) => (c + 1) % slides.length)
		resetTimer()
	}, [])

	useEffect(() => {
		const handleVisibility = () => {
			if (document.hidden) {
				setPaused(true)
			} else {
				resetTimer()
				setPaused(false)
			}
		}
		document.addEventListener("visibilitychange", handleVisibility)
		return () => document.removeEventListener("visibilitychange", handleVisibility)
	}, [])

	useEffect(() => {
		if (paused) {
			if (rafRef.current) cancelAnimationFrame(rafRef.current)
			rafRef.current = null
			return
		}

		const tick = (timestamp: number) => {
			if (!startTimeRef.current) {
				startTimeRef.current = timestamp
			}
			const elapsed = timestamp - startTimeRef.current
			const pct = Math.min(elapsed / SLIDE_DURATION, 1)
			resettingRef.current = false
			setProgress(pct)

			if (pct < 1) {
				rafRef.current = requestAnimationFrame(tick)
			} else {
				goNext()
			}
		}

		rafRef.current = requestAnimationFrame(tick)
		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current)
				rafRef.current = null
			}
		}
	}, [paused, current])

	const handleMouseLeave = () => {
		resetTimer()
		setPaused(false)
	}

	const slide = slides[current]
	const isResetting = resettingRef.current
	const contentAnimClass = direction === "forward" ? "-animate-slide-in-x-750" : "animate-slide-in-x-750"
	const titleAnimClass = direction === "forward" ? "-animate-slide-in-x-500" : "animate-slide-in-x-500"

	return (
		<div
			className={cn(
				"relative mb-6 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-[#151515] lg:mt-6",
				className
			)}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			{/* slides — all mounted, only active one visible */}
			{slides.map((s, index) => (
				<div
					key={index}
					aria-hidden={index !== current}
					className="flex w-full items-center justify-center"
					style={{ display: index === current ? "flex" : "none" }}
				>
					<div
						key={`${current}-content`}
						className={cn("flex w-full items-center justify-center p-12", contentAnimClass)}
					>
						{s.content}
					</div>
				</div>
			))}

			{/* visit link */}
			{slide.href && (
				<SoundLink
					key={`${current}-href`}
					href={slide.href}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						"text-muted-foreground absolute top-2 right-2 flex items-center gap-0.75 p-2 text-xs hover:underline",
						"animate-fade-in"
					)}
				>
					Visit
					<ArrowUpRightIcon size={12} />
				</SoundLink>
			)}

			{/* bottom overlay */}
			<div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent px-4 pt-6 pb-3">
				<div className="mb-3">
					<p
						key={`${current}-label`}
						className={cn("text-[11px] font-medium tracking-widest text-white/40 uppercase", titleAnimClass)}
					>
						{slide.label}
					</p>
					<h2 key={`${current}-title`} className={cn("text-lg leading-tight font-semibold text-white", titleAnimClass)}>
						{slide.title}
					</h2>
				</div>

				<div className="flex gap-1.5">
					{slides.map((s, i) => {
						const isCurrent = i === current
						const isPast = i < current
						const fillPct = isCurrent ? progress : isPast ? 1 : 0
						const noTransition = isResetting || isCurrent

						return (
							<button
								key={i}
								onClick={() => goTo(i)}
								aria-label={`Go to slide ${i + 1}: ${s.title}`}
								className="group relative h-[3px] flex-1 cursor-pointer rounded-full bg-white/15 before:absolute before:inset-x-0 before:-inset-y-2 before:content-[''] focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
							>
								<div className="absolute inset-0 overflow-hidden rounded-full">
									<div
										className="absolute inset-y-0 left-0 rounded-full bg-white"
										style={{
											width: `${fillPct * 100}%`,
											opacity: isCurrent ? 0.9 : isPast ? 0.5 : 0,
											transition: noTransition ? "none" : "width 0.15s ease, opacity 0.15s ease",
										}}
									/>
								</div>
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}
