<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './bar-chart-horizontal.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Bar/Horizontal',
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
		title: 'Bar Chart - Horizontal',
		description: 'January - June 2024'
	}}
/>
