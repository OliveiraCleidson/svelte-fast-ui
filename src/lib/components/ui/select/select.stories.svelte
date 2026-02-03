<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './select.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Select',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
