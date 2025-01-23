<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ResumeCardTop from './ResumeCardTop.svelte';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/ResumeCardTop',
    component: ResumeCardTop,
    tags: ['autodocs'],
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
  name="Primary"
  args={{ size: 'large', role: 'Role', organization: 'Organization', location: 'Location' }}
/>
