import { dev } from '$app/environment'
import type { Handle } from '@sveltejs/kit'
import { minify } from 'html-minifier-terser'

export const middlewareMinifyHTML: Handle = async ({ event, resolve }) => {
  if (dev) {
    return resolve(event)
  }

  return resolve(event, {
    transformPageChunk({ html }) {
      return minify(html)
    },
  })
}
