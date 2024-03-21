import type { StorybookConfig } from '@storybook/sveltekit'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts', '../src/**/*.stories.svelte'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-svelte-csf',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
}

export default config
