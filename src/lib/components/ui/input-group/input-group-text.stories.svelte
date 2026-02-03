<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './input-group-text.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/InputGroup/Text',
		component: Wrapper
	});
</script>

<Story name="Playground" />
