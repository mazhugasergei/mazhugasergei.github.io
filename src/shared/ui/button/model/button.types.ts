import { VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"
import { buttonVariants } from ".."

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }
