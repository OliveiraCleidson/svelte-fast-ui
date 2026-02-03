<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './alert.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Alert',
		component: Wrapper,
		tags: ['autodocs']
	});
</script>

<Story name="Playground" />
