<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './bar-chart-active.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Bar/Active',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			activeIndex: { control: 'number' },
			title: { control: 'text' },
			description: { control: 'text' }
		}
	});
</script>

<Story
	name="Default"
	args={{
		activeIndex: 2,
		title: 'Bar Chart - Active',
		description: 'January - June 2024'
	}}
/>

<Story
	name="FirstActive"
	args={{
		activeIndex: 0,
		title: 'Bar Chart - First Active',
		description: 'January - June 2024'
	}}
/>

<Story
	name="LastActive"
	args={{
		activeIndex: 4,
		title: 'Bar Chart - Last Active',
		description: 'January - June 2024'
	}}
/>
