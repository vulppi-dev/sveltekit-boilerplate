import { defineConfig, devices } from '@playwright/experimental-ct-svelte'

export default defineConfig({
  testDir: 'src',
  testMatch: /(.+\.)?comp(onent)?\.(test|spec)\.[cm]?[jt]s/,
  snapshotDir: './__snapshots__',
  timeout: 10 * 1000,
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    ctPort: 3100,
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
