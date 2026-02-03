<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './bar-chart-vertical.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Bar/Vertical',
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
		title: 'Bar Chart',
		description: 'January - June 2024'
	}}
/>
