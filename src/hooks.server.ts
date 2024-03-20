import { middlewareApiClearResponse } from '$lib/middleware/api-clear-response'
import { middlewareIncludeLocale } from '$lib/middleware/include-locale'
import { middlewareMinifyHTML } from '$lib/middleware/minify-html'
import { sequence } from '@sveltejs/kit/hooks'

export const handle = sequence(
  middlewareApiClearResponse,
  middlewareIncludeLocale,
  middlewareMinifyHTML
)
