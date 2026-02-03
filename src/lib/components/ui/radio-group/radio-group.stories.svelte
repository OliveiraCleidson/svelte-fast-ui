<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './radio-group.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/RadioGroup',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
