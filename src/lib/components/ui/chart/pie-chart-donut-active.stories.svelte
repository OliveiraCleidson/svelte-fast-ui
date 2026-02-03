<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartDonutActiveWrapper from './pie-chart-donut-active.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/DonutActive',
		component: PieChartDonutActiveWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Donut Active', description: 'January - June 2024' }}
/>
