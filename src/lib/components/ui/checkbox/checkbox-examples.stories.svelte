<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CheckboxExamplesWrapper from './checkbox-examples.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Checkbox/Examples',
		component: CheckboxExamplesWrapper
	});
</script>

<Story name="Playground" />
