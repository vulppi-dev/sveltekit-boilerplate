import { Config } from 'tailwindcss'

import pluginContainer from './plugins/plugin-container'
import pluginScroll from './plugins/plugin-extend-scroll'
import pluginGrid from './plugins/plugin-grid-auto'
import pluginSafeWidth from './plugins/plugin-safe-min-width'
import pluginScreenRounded from './plugins/plugin-screen-rounded'
import pluginVariants from './plugins/plugin-variants'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svelte,md,mdx,html}'],
  theme: {
    extend: {},
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
