import { DEFAULT_LOCALE } from '$lib/constants/i18n'
import type { Handle } from '@sveltejs/kit'
import Negotiator from 'negotiator'

function safeLocale(locale: string = '*') {
  if (/^[a-z]{2,2}(?:\-[a-zA-Z]{2,2})?$/.test(locale)) {
    return locale
  }
  return DEFAULT_LOCALE
}

export const middlewareIncludeLocale: Handle = async ({ event, resolve }) => {
  const negotiator = new Negotiator({
    headers: Object.fromEntries(event.request.headers),
  })

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace('%sveltekit.locale%', safeLocale(negotiator.language())),
  })
}
