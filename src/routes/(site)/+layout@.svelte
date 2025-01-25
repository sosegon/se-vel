<script lang="ts">
  import { page } from '$app/state';
  import '../../app.css';
  import type { Size } from '../../types';
  import Header from '../../components/Header.svelte';
  import { windowWidth } from '../../stores/viewport';
  import { BREAKPOINTS, ROUTES as routes } from '../../constants';
  import HorizontalStrip from '../../components/HorizontalStrip.svelte';
  import Navigation from '../../components/Navigation/Navigation.svelte';
  import Socials from '../../components/Socials.svelte';
  import { socialLinks } from '../../data';

  let size: Size = $state('small');
  let socialsStyle = $state({
    position: '',
    bottom: '',
    margin: '',
    left: '',
    right: '',
  });

  windowWidth.subscribe((v) => {
    if (v < BREAKPOINTS[0]) {
      size = 'small';
    } else if (v >= BREAKPOINTS[0] && v < BREAKPOINTS[1]) {
      size = 'medium';
      socialsStyle = { position: 'fixed', bottom: '24px', margin: '0 auto', left: '0', right: '0' };
    } else if (v >= BREAKPOINTS[1]) {
      size = 'large';
      socialsStyle = {
        position: 'fixed',
        bottom: '24px',
        margin: '0 auto',
        left: 'calc(100vw/9)',
        right: '',
      };
    }
  });

  const route = $derived({ label: '', pathname: page.url.pathname });

  const footerStyle = {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0 32px',
    height: '60px',
  };
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<div id="wrapper">
  <div id="header">
    <Header {size} {routes} {route}></Header>
  </div>
  <div>
    <slot></slot>
  </div>
  {#if size === 'small'}
    <div id="footer">
      <HorizontalStrip size="small" position="bottom" style={footerStyle}>
        <Navigation {size} {routes} {route} />
      </HorizontalStrip>
    </div>
  {:else}
    <Socials links={socialLinks} style={socialsStyle} isElevated></Socials>
  {/if}
</div>

<style>
  #header {
    width: 100%;
    position: fixed;
    z-index: 1;
  }
  #wrapper {
    display: flex;
    flex-direction: column;
  }
  #footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
