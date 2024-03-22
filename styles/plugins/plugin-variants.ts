import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addVariant, addUtilities, matchVariant }) {
  addVariant('can-hover', '@media (pointer: fine)')
  addVariant('in-input', '& > :is(input, textarea, select, button)')
  matchVariant('not', (value) => `&:not(${value})`)
  addUtilities({
    '.grid-layer': {
      gridTemplateAreas: '"stack"',
      gridTemplateColumns: '1fr',
      '& > *': {
        gridArea: 'stack',
      },
    },
    '.skeleton-mask': {
      maskImage: 'linear-gradient(to top, transparent 5%, #fff 70%)',
    },
  })
})
