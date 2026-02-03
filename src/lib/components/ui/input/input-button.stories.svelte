<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-button.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Input/Button',
		component: Wrapper
	});
</script>

<Story name="Playground" />
