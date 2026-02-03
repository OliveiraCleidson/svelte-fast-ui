<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartDonutTextWrapper from './pie-chart-donut-text.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/DonutText',
		component: PieChartDonutTextWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Donut with Text', description: 'January - June 2024' }}
/>
