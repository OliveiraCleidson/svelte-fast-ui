<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PieChartCustomLabelWrapper from './pie-chart-custom-label.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Pie/CustomLabel',
		component: PieChartCustomLabelWrapper
	});
</script>

<Story
	name="Playground"
	args={{ title: 'Pie Chart - Custom Label', description: 'January - June 2024' }}
/>
