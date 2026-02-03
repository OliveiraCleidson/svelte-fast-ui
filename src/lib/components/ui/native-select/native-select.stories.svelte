<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './native-select.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/NativeSelect',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
