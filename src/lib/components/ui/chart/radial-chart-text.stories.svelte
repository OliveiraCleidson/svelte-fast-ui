<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './radial-chart-text.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Radial/Text',
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
		visitors: 200,
		maxValue: 300,
		outerRadius: -20,
		innerRadius: -12,
		cornerRadius: 20,
		title: 'Radial Chart - Text',
		description: 'Showing total visitors for the last 6 months'
	}}
/>

<Story
	name="Default"
	args={{
		visitors: 200,
		maxValue: 300,
		outerRadius: -20,
		innerRadius: -12,
		cornerRadius: 20
	}}
/>

<Story
	name="Progress75"
	args={{
		visitors: 75,
		maxValue: 100,
		outerRadius: -20,
		innerRadius: -12,
		cornerRadius: 20,
		title: 'Progress Indicator',
		description: '75% complete'
	}}
/>

<Story
	name="Progress50"
	args={{
		visitors: 50,
		maxValue: 100,
		outerRadius: -20,
		innerRadius: -12,
		cornerRadius: 20,
		title: 'Halfway There',
		description: '50% complete'
	}}
/>
