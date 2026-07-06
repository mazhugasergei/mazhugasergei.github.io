export function preventOrphan(str: string | null | undefined): string | null | undefined {
	if (!str) return str
	const idx = str.lastIndexOf(" ")
	return idx === -1 ? str : str.slice(0, idx) + "\u00A0" + str.slice(idx + 1)
}
