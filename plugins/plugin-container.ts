import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import sizes from './sizes'
import { createPxComment } from './comment'
import { createNumber } from './utils'

export default plugin(
  function ({ matchUtilities, addUtilities, theme }) {
    addUtilities({
      '.flex-center': {
        alignItems: 'center',
        justifyContent: 'center',
      },
    })
    matchUtilities(
      {
        stack: (value) => ({
          display: 'flex',
          flexDirection: 'column' + value,
        }),
        cluster: (value) => ({
          display: 'flex',
          flexDirection: 'row' + value,
          flexWrap: 'wrap',
        }),
      },
      { values: theme('containersReverse') }
    )
    matchUtilities(
      {
        center: (value) => ({
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%',
          maxWidth: `${value}` + createPxComment(value),
        }),
      },
      { values: theme('containersWidth') }
    )
    matchUtilities(
      {
        switcher: (value) => ({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          '& > *': {
            flexGrow: '1',
            flexBasis: `calc((${value} - 100%) * 999)` + createPxComment(value),
            '& > *': {
              maxWidth: '100%',
            },
          },
        }),
        'switcher-reverse': (value) => ({
          display: 'flex',
          flexDirection: 'row-reverse',
          flexWrap: 'wrap',
          '& > *': {
            flexGrow: '1',
            flexBasis: `calc((${value} - 100%) * 999)` + createPxComment(value),
            '& > *': {
              maxWidth: '100%',
            },
          },
        }),
      },
      { values: theme('containersSize') }
    )
    matchUtilities(
      {
        'switcher-threshold': (value) => ({
          [`& > :nth-last-child(n + ${value}), & > :nth-last-child(n + ${value}) ~ *`]:
            {
              flexBasis: '100%',
            },
        }),
      },
      { values: theme('switcherThreshold') }
    )
  },
  {
    theme: {
      containersSize: {
        ...defaultTheme.spacing,
        ...sizes,
      },
      containersWidth: {
        ...sizes,
      },
      containersReverse: {
        DEFAULT: '',
        reverse: '-reverse',
      },
      switcherThreshold: createNumber(16),
    },
  }
)
