<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './radial-chart-stacked.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Radial/Stacked',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			desktop: { control: 'number' },
			mobile: { control: 'number' },
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
		desktop: 1260,
		mobile: 570,
		innerRadius: 76,
		cornerRadius: 4,
		title: 'Radial Chart - Stacked',
		description: 'January - June 2024'
	}}
/>

<Story
	name="Default"
	args={{
		desktop: 1260,
		mobile: 570,
		innerRadius: 76,
		cornerRadius: 4
	}}
/>

<Story
	name="HighMobile"
	args={{
		desktop: 800,
		mobile: 1200,
		innerRadius: 76,
		cornerRadius: 8,
		title: 'Mobile Dominant',
		description: 'Mobile traffic exceeds desktop'
	}}
/>

<Story
	name="EqualSplit"
	args={{
		desktop: 500,
		mobile: 500,
		innerRadius: 76,
		cornerRadius: 4,
		title: 'Equal Split',
		description: '50/50 traffic distribution'
	}}
/>
