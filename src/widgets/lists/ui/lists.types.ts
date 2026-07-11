import { lists } from ".."

export interface TList {
	title: string
	items: TListItem[]
}

export interface TListItem {
	name: string
	href?: string
	year?: number
	details?: string
}

export interface ListProps extends React.ComponentProps<"section"> {
	index: number
	title: string
	items: (typeof lists)[0]["items"]
}
