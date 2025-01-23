<script lang="ts">
  import type { Size, Position } from '../types';

  export let size: Size = 'large'; // 'small', 'medium', or 'large'
  export let position: Position = 'top'; // 'top' or 'bottom'
  export let style: Record<string, string> = {};
</script>

<div
  class={[size, position].join(' ')}
  style={Object.entries(style)
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ')}
>
  <slot></slot>
</div>

<style>
  div {
    background-color: var(--color-neutral);
  }
  .small {
    height: 60px;
  }
  .medium {
    height: 100px;
  }
  .large {
    height: 100px;
  }
  .top {
    border-bottom: solid 1px var(--color-primary);
  }
  .bottom {
    border-top: solid 1px var(--color-primary);
  }
</style>
