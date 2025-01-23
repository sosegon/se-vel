<script lang="ts">
  import type { Size } from '../types';

  export let title: string;
  export let subtitle: string;
  export let isOdd: boolean = true;
  export let size: Size = 'large';
</script>

<div class={['strip', `${size}`].join(' ')} class:strip--odd={isOdd} class:strip--even={!isOdd}>
  <div class="strip-title">
    {title}
  </div>
  {#if subtitle}
    <div class="strip-subtitle">{subtitle}</div>
  {/if}
</div>

<style>
  .strip {
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
  }

  .strip--odd {
    color: var(--color-primary);
    background-color: var(--color-accent-2);
  }

  .strip--even {
    color: var(--color-accent-2);
    background-color: var(--color-primary);
  }

  .large {
    height: 96px;
    .strip-title {
      font-size: 40px;
      padding: 0 0 0 32px;
    }
    .strip-subtitle {
      font-size: 16px;
      padding: 0 16px 8px 0;
    }
  }

  .medium {
    height: 80px;
    .strip-title {
      font-size: 32px;
      padding: 0 0 0 24px;
    }
    .strip-subtitle {
      font-size: 16px;
      padding: 0 8px 8px 0;
    }
  }

  .small {
    height: 60px;
    .strip-title {
      font-size: 24px;
      padding: 0 0 0 16px;
    }
    .strip-subtitle {
      font-size: 12px;
      padding: 0 8px 8px 0;
    }
  }

  .strip-title {
    font-weight: bold;
    flex: 1 1 auto;
    align-self: center;
  }

  .strip-subtitle {
    font-weight: lighter;
    align-self: flex-end;
  }
</style>
