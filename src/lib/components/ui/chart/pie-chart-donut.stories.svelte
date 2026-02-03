<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartDonutWrapper from './pie-chart-donut.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/Donut',
		component: PieChartDonutWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Donut', description: 'January - June 2024' }}
/>
