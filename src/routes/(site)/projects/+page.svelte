<script lang="ts">
  import '../../../app.css';
  import { projects } from '../../../data';
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

<div id="projects-wrapper">
  {#if size === 'large'}
    <div class="large-first-column"><div class="page-title">PROJECTS</div></div>
  {/if}
  <div id="projects-cards-wrapper">
    {#each projects as prj, index}
      <ProjectCard
        {size}
        isOdd={index % 2 !== 0}
        projectName={prj.name}
        projectType={prj.type}
        imgUrl={prj.imgUrl}
      ></ProjectCard>
    {/each}
  </div>
</div>

<style>
  #projects-wrapper {
    padding: 24px 32px;
    overflow-y: scroll;
    margin-top: 80px;
    margin-bottom: 60px;
  }

  #projects-cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  @media (min-width: 768px) {
    #projects-wrapper {
      margin-bottom: 74px;
    }
    #projects-cards-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1440px) {
    #projects-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 33.33%);
    }
    #projects-cards-wrapper {
      grid-column: 2/-1;
    }
  }
</style>
