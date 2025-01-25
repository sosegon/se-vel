<script lang="ts">
  import '../../../app.css';
  import { about } from '../../../data';
  import { windowWidth } from '../../../stores/viewport';
  import { BREAKPOINTS } from '../../../constants';
  import type { Size } from '../../../types';
  import TextArea from '../../../components/TextArea.svelte';
  import Portrait from '../../../components/Portrait.svelte';

  let size: Size = $state('small');
  windowWidth.subscribe((v) => {
    if (v < BREAKPOINTS[0]) {
      size = 'small';
    } else if (v >= BREAKPOINTS[0] && v < BREAKPOINTS[1]) {
      size = 'medium';
    } else if (v >= BREAKPOINTS[1]) {
      size = 'large';
    }
  });
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<div id="content-wrapper">
  {#if size === 'large'}
    <div class="large-first-column"><div class="page-title">ABOUT</div></div>
  {/if}
  <div id="about-wrapper">
    <div class="portrait">
      <Portrait url="/images/main.jpg"></Portrait>
    </div>
    <div class="about-area">
      <TextArea {size} text={about}></TextArea>
    </div>
  </div>
</div>

<style>
  #about-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    align-self: center;
  }

  @media (min-width: 768px) {
    #about-wrapper {
      gap: 24px;
    }
  }

  @media (min-width: 1440px) {
    #about-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 33.33%);
      grid-column: 2/-1;
      gap: 32px;
    }
    .portrait {
      grid-column: 3;
      grid-row: 1;
    }
    .about-area {
      grid-column: 1/3;
    }
  }
</style>
