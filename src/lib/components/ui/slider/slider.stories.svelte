<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './slider.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Slider',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
