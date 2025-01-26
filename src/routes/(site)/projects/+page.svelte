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

  let oddSequence: Array<boolean> = [true, false];
  const projs = projects.map((prj) => {
    const first = oddSequence[oddSequence.length - 2];
    const second = oddSequence[oddSequence.length - 1];
    let isOdd = false;
    if (first && second) isOdd = false;
    else if (first && !second) isOdd = false;
    else if (!first && second) isOdd = true;
    else if (!first && !second) isOdd = true;
    oddSequence.push(isOdd);
    return { ...prj, isOdd };
  });
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<div id="content-wrapper">
  {#if size === 'large'}
    <div class="large-first-column"><div class="page-title">PROJECTS</div></div>
  {/if}
  <div id="common-cards-wrapper">
    {#each projs as prj, index}
      <ProjectCard
        {size}
        isOdd={size === 'small' ? index % 2 === 0 : prj.isOdd}
        projectName={prj.name}
        projectType={prj.type}
        imgUrl={prj.imgUrl}
      ></ProjectCard>
    {/each}
  </div>
</div>
