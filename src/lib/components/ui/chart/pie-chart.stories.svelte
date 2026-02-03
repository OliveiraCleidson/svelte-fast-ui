<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartWrapper from './pie-chart.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/Basic',
		component: PieChartWrapper
	});
</script>

<Story name="Playground" args={{ title: 'Pie Chart', description: 'January - June 2024' }} />
