<script lang="ts" context="module">
  import type { Meta } from '@storybook/svelte'
  import Button from './Button.svelte'

  export const meta = {
    title: 'Example/Button',
    tags: ['autodocs'],
    args: {
      title: 'A title',
      content: 'A content',
    },
    argTypes: {
      title: { control: 'text', name: 'Title' },
      content: { control: 'text', name: 'Content' },
    },
  } satisfies Meta
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf'

  let number = 1

  function clickAdd() {
    number++
  }
</script>

<Template let:args>
  <Button on:click={clickAdd} text={args.title}>
    {args.content}
  </Button>
  <p>Clicks: {number}</p>
</Template>

<Story name="Default" args={{ title: 'A text content' }} />
