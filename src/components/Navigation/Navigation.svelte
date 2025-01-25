<script lang="ts">
  import type { Size } from '../../types';
  import NavItem from './NavItem.svelte';

  export let size: Size = 'large';
  export let routes: Array<string> = ['link1', 'link2', 'link3'];
  export let route: string = routes[0];
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
