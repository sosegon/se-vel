<script lang="ts">
  import type { Project, Size } from '../types';
  import Divider from './Divider.svelte';
  import GithubIcon from './icons/GithubIcon.svelte';
  import WebIcon from './icons/WebIcon.svelte';
  import InfoStripCard from './InfoStripCard.svelte';

  export let size: Size = 'large';
  export let data: Project = { name: '', type: '', technologies: [''] };
  export let onClickClose: () => {} = () => {};
</script>

<div class={[`project-details-card--${size}`, `bevel--${size}`].join(' ')}>
  <InfoStripCard {size} title={data.name} subtitle="" centerTitle></InfoStripCard>
  <div class="project-details">
    <div class="project-metadata">
      <div class="project-technologies">
        {#each data.technologies as tech}
          <span>{tech}</span>
        {/each}
      </div>
      <div class="project-links">
        {#each Object.keys(data.links) as link}
          <a href={data.links[link]} target="_blank">
            {#if link === 'github'}
              <GithubIcon size={size === 'small' ? 16 : 32}></GithubIcon>
            {/if}
            {#if link === 'web'}
              <WebIcon size={size === 'small' ? 16 : 32}></WebIcon>
            {/if}
          </a>
        {/each}
      </div>
    </div>
    <div>
      <Divider></Divider>
      <div class="project-description">
        <span>
          {data.description}
        </span>
      </div>
      <Divider></Divider>
    </div>
    <div class="project-close">
      <span onclick={onClickClose}>Close</span>
    </div>
  </div>
</div>

<style>
  .project-details {
    display: flex;
    flex-direction: column;
    background-color: var(--color-neutral);
  }
  .project-metadata {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    opacity: 0.7;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    color: var(--color-primary);
  }
  .project-technologies,
  .project-links {
    display: flex;
    flex-direction: row;
    gap: 32px;
    text-transform: capitalize;
  }
  .project-description {
    font-family: 'IBM Plex Serif';
    font-weight: 500;
  }
  .project-close {
    text-align: end;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    text-decoration: underline;
    span {
      cursor: pointer;
    }
  }
  .project-details-card--small {
    .project-details {
      padding: 16px;
      gap: 16px;
    }
    .project-metadata,
    .project-description,
    .project-close {
      font-size: 12px;
    }
  }
  .project-details-card--medium {
    .project-details {
      padding: 24px;
      gap: 24px;
    }
    .project-metadata,
    .project-description,
    .project-close {
      font-size: 16px;
    }
  }
  .project-details-card--large {
    .project-details {
      padding: 24px 32px;
      gap: 24px;
    }
    .project-metadata,
    .project-description,
    .project-close {
      font-size: 16px;
    }
  }
</style>
