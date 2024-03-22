import plugin from 'tailwindcss/plugin'
import { createPxComment } from './comment'

export default plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      's-rounded': (value) => ({
        borderRadius:
          `max(0px, min(${value}, (100vw - 100% - 1px) * 9999))` +
          createPxComment(value),
        '@media (pointer: fine)': {
          borderRadius:
            `max(0px, min(${value}, (100vw - 100% - 11px) * 9999))` +
            createPxComment(value),
        },
      }),
    },
    { values: theme('borderRadius') },
  )
})
