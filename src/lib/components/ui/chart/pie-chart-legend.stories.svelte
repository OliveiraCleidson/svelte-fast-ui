<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartLegendWrapper from './pie-chart-legend.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/Legend',
		component: PieChartLegendWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Legend', description: 'January - June 2024' }}
/>
