<script lang="ts">
  import '../../app.css';
  import type { Size } from '../../types';
  import Header from '../../components/Header.svelte';
  import { windowWidth } from '../../stores/viewport';
  import { BREAKPOINTS } from '../../constants';
  import HorizontalStrip from '../../components/HorizontalStrip.svelte';
  import Navigation from '../../components/Navigation/Navigation.svelte';
  import Socials from '../../components/Socials.svelte';
  import { routes, socialLinks } from '../../data';

  export let size: Size = 'small';
  windowWidth.subscribe((v) => {
    if (v < BREAKPOINTS[0]) {
      size = 'small';
    } else if (v >= BREAKPOINTS[0] && v < BREAKPOINTS[1]) {
      size = 'medium';
    } else if (v >= BREAKPOINTS[1]) {
      size = 'large';
    }
  });

  const footerStyle = {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0 32px',
    height: '60px',
  };

  const socialsStyle = {
    position: 'absolute',
    right: '0',
    left: '0',
    bottom: '24px',
    margin: '0 auto',
  };
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<div id="wrapper">
  <Header {size} {routes}></Header>
  <div id="content">
    <slot></slot>
  </div>
  {#if size === 'small'}
    <div id="footer">
      <HorizontalStrip size="small" position="bottom" style={footerStyle}>
        <Navigation {size} {routes} />
      </HorizontalStrip>
    </div>
  {:else if size === 'medium'}
    <Socials links={socialLinks} style={socialsStyle} isElevated></Socials>
  {/if}
</div>

<style>
  #wrapper {
    display: flex;
    flex-direction: column;
  }
  #content {
    flex: 1 1 auto;
  }
  #footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
