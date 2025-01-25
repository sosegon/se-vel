<script lang="ts">
  import '../../../app.css';
  import { blog } from '../../../data';
  import ProjectCard from '../../../components/ProjectCard.svelte';
  import { windowWidth } from '../../../stores/viewport';
  import { BREAKPOINTS } from '../../../constants';
  import type { Size } from '../../../types';

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
    <div class="large-first-column"><div class="page-title">BLOG</div></div>
  {/if}
  <div id="common-cards-wrapper">
    {#each blog as prj, index}
      <ProjectCard
        {size}
        isOdd={index % 2 !== 0}
        projectName={prj.title}
        projectType=""
        imgUrl={prj.imgUrl}
      ></ProjectCard>
    {/each}
  </div>
</div>
