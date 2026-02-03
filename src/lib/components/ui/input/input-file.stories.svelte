<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-file.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Input/File',
		component: Wrapper
	});
</script>

<Story name="Playground" />
