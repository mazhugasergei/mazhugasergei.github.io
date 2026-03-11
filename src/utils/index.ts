import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const validateUrl = (url: string | undefined): string => {
	if (!url) {
		throw new Error("URL is required but not provided")
	}

	try {
		new URL(url)
		return url
	} catch {
		throw new Error(`Invalid URL: ${url}`)
	}
}
