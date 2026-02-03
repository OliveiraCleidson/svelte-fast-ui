<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartLabelListWrapper from './pie-chart-label-list.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/LabelList',
		component: PieChartLabelListWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Label List', description: 'January - June 2024' }}
/>
