import type { Handle } from '@sveltejs/kit'
import Negotiator from 'negotiator'
import { COOKIES_KEYS } from '../constants/keys'
import { safeLocale } from '../locales/i18n'

export const middlewareIncludeLocale: Handle = async ({ event, resolve }) => {
  const negotiator = new Negotiator({
    headers: Object.fromEntries(event.request.headers),
  })

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(
        '%sveltekit.locale%',
        safeLocale(
          event.cookies.get(COOKIES_KEYS.locale) || negotiator.language()
        )
      ),
  })
}
