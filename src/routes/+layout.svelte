<script lang="ts">
  import { initI18n, loadDataI18n } from '$lib/locales/load-locales'
  import '../styles.css'

  export let data

  $: loadDataI18n({ dictionaries: data.dictionaries })

  initI18n({
    defaultLocale: data.defaultLocale,
    locale: data.locale,
  })
</script>

<slot />
