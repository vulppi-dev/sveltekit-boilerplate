import { Config } from 'tailwindcss'

import sizes from './styles/static/sizes'
import vars from './styles/static/vars'

import pluginContainer from './styles/plugins/plugin-container'
import pluginScroll from './styles/plugins/plugin-extend-scroll'
import pluginGrid from './styles/plugins/plugin-grid-auto'
import pluginSafeWidth from './styles/plugins/plugin-safe-min-width'
import pluginScreenRounded from './styles/plugins/plugin-screen-rounded'
import pluginVariants from './styles/plugins/plugin-variants'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svelte,md,mdx,html}'],
  theme: {
    extend: {
      width: sizes,
      height: sizes,
      minWidth: sizes,
      minHeight: sizes,
      maxWidth: sizes,
      maxHeight: sizes,
      margin: vars,
      padding: vars,
      backgroundImage: {
        'gradient-radial-left':
          'radial-gradient(left, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    pluginContainer,
    pluginScroll,
    pluginGrid,
    pluginSafeWidth,
    pluginScreenRounded,
    pluginVariants,
  ],
}

export default config
