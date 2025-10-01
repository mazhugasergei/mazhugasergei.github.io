export function replaceLastSpaceWithNbsp(str: string): string {
	const idx = str.lastIndexOf(" ")
	return idx === -1 ? str : str.slice(0, idx) + "\u00A0" + str.slice(idx + 1)
}
