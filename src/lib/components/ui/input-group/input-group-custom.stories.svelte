<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-group-custom.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/InputGroup/Custom',
		component: Wrapper
	});
</script>

<Story name="Playground" />
