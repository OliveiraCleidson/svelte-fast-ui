<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './select-timezone.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Select/Timezone',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
