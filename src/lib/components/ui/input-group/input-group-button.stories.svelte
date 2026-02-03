<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-group-button.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/InputGroup/Button',
		component: Wrapper
	});
</script>

<Story name="Playground" />
