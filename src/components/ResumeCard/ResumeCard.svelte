<script lang="ts">
  import type { ResumeItem, Size } from '../../types';
  import ResumeCardBottom from './ResumeCardBottom.svelte';
  import ResumeCardTop from './ResumeCardTop.svelte';
  import Divider from '../Divider.svelte';

  export let resumeItem: ResumeItem;
  export let size: Size = 'large';
  export let { role, organization, location, description, dates } = resumeItem;
</script>

<div class={[`${size}`, `bevel--${size}`].join(' ')}>
  <ResumeCardTop {role} {organization} {location} {size} />
  <Divider />
  <div class="description">{description}</div>
  <Divider />
  <ResumeCardBottom {dates} {size} />
</div>

<style>
  div {
    background-color: var(--color-neutral);
  }

  .large {
    padding: 16px 32px;
    .description {
      font-size: 16px;
    }
  }

  .medium {
    padding: 16px 24px;
    .description {
      font-size: 16px;
    }
  }

  .small {
    padding: 16px 20px;
    .description {
      font-size: 12px;
    }
  }

  .description {
    font-family: 'IBM Plex Serif';
    color: var(--color-text);
  }
</style>
