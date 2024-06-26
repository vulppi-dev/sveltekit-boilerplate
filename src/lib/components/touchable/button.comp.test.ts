import { test, expect } from '@playwright/experimental-ct-svelte'
import Button from './Button.svelte'

test.use({ viewport: { width: 320, height: 320 } })

test('should work', async ({ mount, page }) => {
  const component = await mount(Button, {
    props: {
      text: 'Um title',
    },
    slots: {
      default: `<h1>Svelte component<h1/>`,
    },
  })
  await expect(component).toContainText('Svelte component')
})
