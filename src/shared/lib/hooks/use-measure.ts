import React from "react"

interface Bounds {
	width: number
	height: number
}

type UseMeasureReturn<T extends HTMLElement> = [(node: T | null) => void, Bounds]

export function useMeasure<T extends HTMLElement = HTMLElement>(): UseMeasureReturn<T> {
	const [element, setElement] = React.useState<T | null>(null)
	const [bounds, setBounds] = React.useState<Bounds>({ width: 0, height: 0 })

	const ref = React.useCallback((node: T | null) => {
		setElement(node)
	}, [])

	React.useEffect(() => {
		if (!element) return

		const observer = new ResizeObserver(([entry]) => {
			if (!entry) return

			setBounds({
				width: entry.contentRect.width,
				height: entry.contentRect.height,
			})
		})

		observer.observe(element)
		return () => observer.disconnect()
	}, [element])

	return [ref, bounds]
}
