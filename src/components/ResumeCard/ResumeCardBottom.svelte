<script lang="ts">
  import type { Size } from '../../types';

  export let dates: string;
  export let size: Size = 'large';
</script>

<div class={`${size}`}>
  <span>{dates}</span>
</div>

<style>
  div {
    text-align: end;
    color: var(--color-primary);
    font-family: 'Roboto', sans-serif;
    opacity: 0.7;
  }

  .large {
    span {
      font-size: 16px;
    }
  }

  .medium {
    span {
      font-size: 16px;
    }
  }

  .small {
    span {
      font-size: 12px;
    }
  }
</style>
