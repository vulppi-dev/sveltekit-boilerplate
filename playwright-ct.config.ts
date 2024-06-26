import { defineConfig, devices } from '@playwright/experimental-ct-svelte'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  testDir: 'src',
  testMatch: /(.+\.)?comp(onent)?\.(test|spec)\.[cm]?[jt]s/,
  snapshotDir: './__snapshots__',
  timeout: 10000,
  fullyParallel: true,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    ctViteConfig: {
      assetsInclude: ['**/*.svg', '**/*.png'],
      plugins: [
        svelte({
          preprocess: [vitePreprocess()],
        }),
      ],
      resolve: {
        alias: {
          $lib: resolve('./src/lib'),
        },
      },
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
})
