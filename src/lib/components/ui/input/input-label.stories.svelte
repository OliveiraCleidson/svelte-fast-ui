<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-label.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Input/Label',
		component: Wrapper
	});
</script>

<Story name="Playground" />
