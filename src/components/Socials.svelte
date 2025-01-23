<script lang="ts">
  import './socials.css';
  import GithubIcon from './icons/GithubIcon.svelte';
  import UpworkIcon from './icons/UpworkIcon.svelte';
  import LinkedInIcon from './icons/LinkedInIcon.svelte';

  export let links: { github: string; upwork: string; linkedin: string };
  export let isElevated: boolean = false;
</script>

<div class={['socials'].join(' ')} class:elevated={isElevated}>
  <a href={links?.upwork}>
    <UpworkIcon />
  </a>
  <a href={links?.github}>
    <GithubIcon />
  </a>
  <a href={links?.linkedin}>
    <LinkedInIcon />
  </a>
</div>
