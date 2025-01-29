<script lang="ts">
  import type { Size } from '@types';

  export let role: string;
  export let organization: string;
  export let location: string;
  export let size: Size = 'large';
</script>

<div class={size}>
  <span class="role">{role}</span>
  <span class="organization">{organization}</span>
  <span class="location">{location}</span>
</div>

<style>
  div {
    display: grid;
    color: var(--color-primary);
    font-family: 'Roboto', sans-serif;
  }
  .organization,
  .location {
    opacity: 0.7;
  }
  .large {
    .role {
      font-size: 40px;
    }
    .organization,
    .location {
      font-size: 16px;
    }
  }
  .medium {
    .role {
      font-size: 32px;
    }
    .organization,
    .location {
      font-size: 16px;
    }
  }
  .small {
    .role {
      font-size: 24px;
    }
    .organization,
    .location {
      font-size: 12px;
    }
  }
  .role {
    grid-row: 1/1;
    font-weight: bold;
  }

  .organization {
    grid-row: 2/3;
    font-weight: lighter;
  }

  .location {
    grid-row: 2/3;
    grid-column: 2/2;
    text-align: end;
    font-weight: lighter;
  }
</style>
