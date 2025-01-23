<script lang="ts">
  import type { Size } from '../types';
  import HorizontalStrip from './HorizontalStrip.svelte';
  import Navigation from './Navigation/Navigation.svelte';
  import Socials from './Socials.svelte';

  export let size: Size = 'large';
  const style = {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-items': 'center',
    padding: '0 32px',
    height: '80px',
  };
</script>

<HorizontalStrip {style} {size} position="top">
  <span class={size}>SE-VEL</span>
  {#if size !== 'small'}
    <Navigation {size} />
  {:else}
    <Socials />
  {/if}
</HorizontalStrip>

<style>
  span {
    font-family: 'League Gothic';
    color: var(--color-primary);
    font-size: 48px;
  }
</style>
