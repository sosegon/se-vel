<script lang="ts">
  import type { Route, Size } from '../../types';
  import NavItem from './NavItem.svelte';

  export let size: Size = 'large';
  export let route: Route = 'home';

  const routes = ['home', 'projects', 'resume', 'about', 'blog'];
</script>

<div class={size}>
  {#each routes as r}
    <NavItem {size} label={r} selected={r === route} url={`/${r}`} />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
  }
  .small {
    gap: 6px;
  }
  .medium,
  .large {
    gap: 12px;
  }
</style>
