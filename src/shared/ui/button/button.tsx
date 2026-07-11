import { cn } from "@/shared/utils"
import { Slot } from "@radix-ui/react-slot"
import { ButtonProps, buttonVariants } from "."

export function Button({ type = "button", className, variant, size, asChild = false, ...props }: ButtonProps) {
	const Comp = asChild ? Slot : "button"
	return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
