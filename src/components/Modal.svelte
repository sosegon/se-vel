<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements';

  export let isOpen: boolean = false;
  export let onClose: MouseEventHandler<HTMLDivElement> = () => {};
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-backdrop" on:click={onClose} on:keypress={() => {}}>
    <div on:click|stopPropagation on:keypress={() => {}}>
      <slot></slot>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background-color: rgba(122, 95, 204, 0.7); /* secondary color */
  }
</style>
