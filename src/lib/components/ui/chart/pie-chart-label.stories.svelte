<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartLabelWrapper from './pie-chart-label.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/Label',
		component: PieChartLabelWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Label', description: 'January - June 2024' }}
/>
