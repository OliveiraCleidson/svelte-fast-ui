<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-disabled.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Input/Disabled',
		component: Wrapper
	});
</script>

<Story name="Playground" />
