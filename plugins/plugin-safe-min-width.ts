import plugin from 'tailwindcss/plugin'
import { createPxComment } from './comment'

export default plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      'safe-min-w': (value) => ({
        minWidth: `min(${value}, 100%)` + createPxComment(value),
      }),
    },
    { values: theme('minWidth') },
  )
})
