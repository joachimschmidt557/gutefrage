<script>
  import Survey from '$lib/Survey.svelte';

  let { surveyItems, loggedIn } = $props();
</script>

{#if surveyItems}
  {#each surveyItems as item (item.id)}
    <Survey {item} {loggedIn} />
  {/each}
{/if}
