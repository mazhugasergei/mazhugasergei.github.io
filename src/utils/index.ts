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
