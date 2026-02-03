<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CalendarDropdownWrapper from './calendar-dropdown.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Calendar/Dropdown',
		component: CalendarDropdownWrapper,
		argTypes: {
			initialDropdown: {
				control: 'select',
				options: ['dropdown', 'dropdown-months', 'dropdown-years'],
				description: 'Layout inicial do dropdown'
			},
			weekdayFormat: {
				control: 'select',
				options: ['short', 'long', 'narrow'],
				description: 'Formato dos dias da semana'
			},
			locale: {
				control: 'text',
				description: 'Locale para formatação'
			}
		}
	});
</script>

<Story
	name="Playground"
	args={{
		initialDropdown: 'dropdown',
		weekdayFormat: 'short',
		locale: 'en-US'
	}}
/>

<Story
	name="MonthAndYear"
	args={{
		initialDropdown: 'dropdown'
	}}
/>

<Story
	name="MonthOnly"
	args={{
		initialDropdown: 'dropdown-months'
	}}
/>

<Story
	name="YearOnly"
	args={{
		initialDropdown: 'dropdown-years'
	}}
/>
