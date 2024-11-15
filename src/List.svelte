<script>
  import Item from './Item.svelte';

  let { items, loggedIn } = $props();
</script>

{#if items}
  {#each items as item (item.id)}
    <Item {item} {loggedIn} />
  {/each}
{/if}
