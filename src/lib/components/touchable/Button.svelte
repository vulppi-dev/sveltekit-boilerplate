<script lang="ts">
  export let text: string = ''
</script>

<button
  title={text}
  on:click
  class="rounded-lg border border-red-900 bg-red-500 px-3 py-1 text-white"
>
  <slot />
</button>
