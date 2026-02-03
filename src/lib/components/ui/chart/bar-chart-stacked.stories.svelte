<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './bar-chart-stacked.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Bar/Stacked',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			title: { control: 'text' },
			description: { control: 'text' }
		}
	});
</script>

<Story
	name="Default"
	args={{
		title: 'Bar Chart - Stacked + Legend',
		description: 'January - June 2024'
	}}
/>
