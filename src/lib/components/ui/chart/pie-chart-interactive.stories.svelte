<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartInteractiveWrapper from './pie-chart-interactive.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/Interactive',
		component: PieChartInteractiveWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Interactive', description: 'January - June 2024' }}
/>
