<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './bar-chart-label.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Bar/Label',
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
		title: 'Bar Chart - Label',
		description: 'January - June 2024'
	}}
/>
