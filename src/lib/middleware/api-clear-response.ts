import { json, type Handle } from '@sveltejs/kit'
import { getReasonPhrase } from 'http-status-codes'

export const middlewareApiClearResponse: Handle = async ({
  event,
  resolve,
}) => {
  const response = await resolve(event)

  if (event.url.pathname.startsWith('/api/')) {
    if (response.status >= 400) {
      return json(
        {
          message: getReasonPhrase(response.status),
        },
        {
          status: response.status,
        }
      )
    }
  }

  return response
}
