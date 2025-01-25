<script lang="ts">
  import type { Size } from '../types';
  import './projectCard.css';
  import InfoStripCard from './InfoStripCard.svelte';

  export let size: Size = 'large';
  export let isOdd: boolean = true;
  export let projectName: string;
  export let projectType: string;
  export let imgUrl: string;
</script>

<div class={['project-card', `project-card--${size}`, `bevel--${size}`]}>
  <img src={imgUrl} alt={`${projectName}-${projectType}`} />
  <InfoStripCard title={projectName} subtitle={projectType} {isOdd} {size} />
</div>

<style>
  img {
    object-position: 0 0;
  }
</style>
