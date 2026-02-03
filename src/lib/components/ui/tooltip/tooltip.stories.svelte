<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './tooltip.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Overlays/Tooltip',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			delayDuration: { control: 'number' },
			side: {
				control: 'select',
				options: ['top', 'right', 'bottom', 'left']
			},
			sideOffset: { control: 'number' },
			content: { control: 'text' },
			triggerText: { control: 'text' }
		}
	});
</script>

<Story
	name="Playground"
	args={{
		delayDuration: 200,
		side: 'top',
		sideOffset: 0,
		content: 'Add to library',
		triggerText: 'Hover'
	}}
/>

<Story
	name="Top"
	args={{
		side: 'top',
		content: 'Tooltip on top'
	}}
/>

<Story
	name="Right"
	args={{
		side: 'right',
		content: 'Tooltip on right'
	}}
/>

<Story
	name="Bottom"
	args={{
		side: 'bottom',
		content: 'Tooltip on bottom'
	}}
/>

<Story
	name="Left"
	args={{
		side: 'left',
		content: 'Tooltip on left'
	}}
/>

<Story
	name="WithDelay"
	args={{
		delayDuration: 500,
		content: 'This tooltip has a longer delay'
	}}
/>
