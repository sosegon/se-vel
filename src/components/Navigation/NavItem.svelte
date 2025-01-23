<script lang="ts">
  import type { Size } from '../../types';

  export let url: string;
  export let size: Size = 'large';
  export let label: string;
  export let selected: boolean = false;
</script>

<a class={size} class:selected href={url}>
  <div>
    {label}
  </div>
</a>

<style>
  a {
    background-color: var(--color-accent-2);
    padding: 12px 16px;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    transform: skewX(-12deg);
    line-height: auto;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    border: solid 1px var(--color-accent-2);
    &:hover {
      background-color: var(--color-primary);
      color: var(--color-accent-2);
      border-color: var(--color-primary);
      cursor: pointer;
    }
    & > div {
      transform: skewX(12deg);
      text-transform: capitalize;
    }
  }

  .small {
    font-size: 16px;
    padding: 12px 2px;
    width: 80px;
    height: 36px;
    & > div {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .large,
  .medium {
    font-size: 24px;
  }

  .selected {
    border-color: var(--color-primary);
    cursor: pointer;
    &:hover {
      background-color: var(--color-accent-2);
      color: var(--color-primary);
      border-color: var(--color-primary);
      cursor: default;
    }
  }
</style>
