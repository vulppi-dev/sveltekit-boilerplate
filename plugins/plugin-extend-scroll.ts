import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar-hide': {
      '-ms-overflow-style': 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '.scroll-stable': {
      scrollbarGutter: 'stable',
    },
    '.scroll-x-stable': {
      scrollbarGutter: 'stable both-edges',
    },
    '.scroll-styled': {
      '--width': '10px',
      '-ms-overflow-style': 'slim',
      scrollbarWidth: 'slim',

      '&::-webkit-scrollbar': {
        width: 'var(--width)',
        height: 'var(--width)',
        backgroundColor: 'theme(colors.accent1)',
      },
      '&::-webkit-scrollbar-corner': {
        backgroundColor: 'theme(colors.accent1)',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
        borderRadius: 'calc(var(--width) / 2)',
        '&:hover': {
          backgroundColor: 'theme(colors.accent2)',
        },
      },
      '&::-webkit-scrollbar-thumb': {
        'box-sizing': 'content-box',
        backgroundColor: 'theme(colors.accent6)',
        border: '2px solid theme(colors.accent1)',
        borderRadius: 'calc(var(--width) / 2)',
        '&:hover': {
          backgroundColor: 'theme(colors.accent7)',
        },
        '&:active': {
          border: '2px solid theme(colors.accent8)',
          backgroundColor: 'theme(colors.accent11)',
        },
      },
    },
  })
})
