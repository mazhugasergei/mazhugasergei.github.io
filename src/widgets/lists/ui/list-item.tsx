import { SoundLink } from "@/shared/ui/sound-link"

export function ListItem({ href, ...props }: Partial<React.ComponentProps<typeof SoundLink>>) {
	if (!href) {
		return <span {...props} />
	}

	return (
		<SoundLink
			href={href}
			target={href.toString().startsWith("/archive/") ? "_self" : "_blank"}
			rel={href.toString().startsWith("/archive/") ? undefined : "noreferrer"}
			{...props}
		/>
	)
}
