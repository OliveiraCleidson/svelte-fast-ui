<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './native-select-invalid.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/NativeSelect/Invalid',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
