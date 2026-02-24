import { validateUrl } from "@/utils"

export const BASE_URL = validateUrl(process.env.NEXT_PUBLIC_SITE_URL)
