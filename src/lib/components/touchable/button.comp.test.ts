import { test, expect } from '@playwright/experimental-ct-svelte'
import Button from './Button.svelte'

test.use({ viewport: { width: 500, height: 500 } })

test('should work', async ({ mount }) => {
  const component = await mount(Button, {
    slots: {
      default: 'Svelte component',
    },
  })
  await expect(component).toContainText('Svelte component')
})
