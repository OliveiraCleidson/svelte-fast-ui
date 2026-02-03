<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './radial-chart-shape.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Radial/Shape',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			visitors: { control: 'number' },
			maxValue: { control: 'number' },
			outerRadius: { control: 'number' },
			innerRadius: { control: 'number' },
			cornerRadius: { control: 'number' },
			title: { control: 'text' },
			description: { control: 'text' }
		}
	});
</script>

<Story
	name="Playground"
	args={{
		visitors: 1260,
		maxValue: 5040,
		outerRadius: 88,
		innerRadius: 66,
		cornerRadius: 0,
		title: 'Radial Chart - Shape',
		description: 'Showing total visitors for the last 6 months'
	}}
/>

<Story
	name="Default"
	args={{
		visitors: 1260,
		maxValue: 5040,
		outerRadius: 88,
		innerRadius: 66
	}}
/>

<Story
	name="CustomValues"
	args={{
		visitors: 850,
		maxValue: 1000,
		outerRadius: 80,
		innerRadius: 60,
		cornerRadius: 5,
		title: 'Custom Radial',
		description: 'Custom configuration example'
	}}
/>

<Story
	name="Rounded"
	args={{
		visitors: 750,
		maxValue: 1000,
		outerRadius: 88,
		innerRadius: 66,
		cornerRadius: 10
	}}
/>
