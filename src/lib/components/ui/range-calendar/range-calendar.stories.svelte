<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Wrapper from './range-calendar.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Date/RangeCalendar',
		component: Wrapper,
		tags: ['autodocs'],
		argTypes: {
			numberOfMonths: { control: 'number' },
			weekdayFormat: {
				control: 'select',
				options: ['narrow', 'short', 'long']
			},
			captionLayout: {
				control: 'select',
				options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years']
			},
			fixedWeeks: { control: 'boolean' },
			locale: {
				control: 'select',
				options: ['en-US', 'pt-BR']
			}
		}
	});
</script>

<Story
	name="Playground"
	args={{
		numberOfMonths: 1,
		weekdayFormat: 'short',
		captionLayout: 'label',
		fixedWeeks: false,
		locale: 'en-US'
	}}
/>

<Story
	name="Default"
	args={{
		numberOfMonths: 1,
		weekdayFormat: 'short',
		captionLayout: 'label'
	}}
/>

<Story
	name="TwoMonths"
	args={{
		numberOfMonths: 2
	}}
/>

<Story
	name="ThreeMonths"
	args={{
		numberOfMonths: 3
	}}
/>

<Story
	name="FixedWeeks"
	args={{
		fixedWeeks: true
	}}
/>

<Story
	name="NarrowWeekdays"
	args={{
		weekdayFormat: 'narrow'
	}}
/>

<Story
	name="LongWeekdays"
	args={{
		weekdayFormat: 'long'
	}}
/>

<Story
	name="DropdownCaption"
	args={{
		captionLayout: 'dropdown'
	}}
/>

<Story
	name="DropdownMonthsOnly"
	args={{
		captionLayout: 'dropdown-months'
	}}
/>

<Story
	name="DropdownYearsOnly"
	args={{
		captionLayout: 'dropdown-years'
	}}
/>

<Story
	name="PortugueseBrazil"
	args={{
		locale: 'pt-BR'
	}}
/>

<Story
	name="TwoMonthsWithDropdown"
	args={{
		numberOfMonths: 2,
		captionLayout: 'dropdown'
	}}
/>
