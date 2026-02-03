<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartStackedWrapper from './pie-chart-stacked.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/Stacked',
		component: PieChartStackedWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Stacked', description: 'January - June 2024' }}
/>
