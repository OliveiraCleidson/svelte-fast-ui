<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-group-dropdown.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/InputGroup/Dropdown',
		component: Wrapper
	});
</script>

<Story name="Playground" />
