<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './switch.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Switch',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
