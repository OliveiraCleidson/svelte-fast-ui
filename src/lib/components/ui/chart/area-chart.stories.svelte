<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './area-chart.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Feedback/Chart/Area',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			curve: {
				control: 'select',
				options: ['natural', 'linear', 'step']
			},
			fillOpacity: {
				control: { type: 'range', min: 0, max: 1, step: 0.1 }
			},
			title: { control: 'text' },
			description: { control: 'text' }
		}
	});
</script>

<Story
	name="Playground"
	args={{
		curve: 'natural',
		fillOpacity: 0.4,
		title: 'Area Chart',
		description: 'Showing total visitors for the last 6 months'
	}}
/>

<Story
	name="Natural"
	args={{
		curve: 'natural',
		fillOpacity: 0.4,
		title: 'Natural Curve',
		description: 'Smooth interpolation between points'
	}}
/>

<Story
	name="Linear"
	args={{
		curve: 'linear',
		fillOpacity: 0.4,
		title: 'Linear Curve',
		description: 'Direct lines between points'
	}}
/>

<Story
	name="Step"
	args={{
		curve: 'step',
		fillOpacity: 0.4,
		title: 'Step Curve',
		description: 'Stepped transitions between values'
	}}
/>

<Story
	name="HighOpacity"
	args={{
		curve: 'natural',
		fillOpacity: 0.8,
		title: 'High Opacity',
		description: 'Area with 80% fill opacity'
	}}
/>

<Story
	name="LowOpacity"
	args={{
		curve: 'natural',
		fillOpacity: 0.2,
		title: 'Low Opacity',
		description: 'Area with 20% fill opacity'
	}}
/>
