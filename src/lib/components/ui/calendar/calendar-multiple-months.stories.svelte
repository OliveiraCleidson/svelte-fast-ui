<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CalendarMultipleMonthsWrapper from './calendar-multiple-months.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Calendar/MultipleMonths',
		component: CalendarMultipleMonthsWrapper,
		argTypes: {
			numberOfMonths: {
				control: { type: 'number', min: 1, max: 4 },
				description: 'Número de meses exibidos'
			},
			captionLayout: {
				control: 'select',
				options: ['dropdown', 'dropdown-months', 'dropdown-years', 'label'],
				description: 'Layout do cabeçalho'
			},
			weekdayFormat: {
				control: 'select',
				options: ['short', 'long', 'narrow'],
				description: 'Formato dos dias da semana'
			},
			locale: {
				control: 'text',
				description: 'Locale para formatação'
			},
			pagedNavigation: {
				control: 'boolean',
				description: 'Navegação por página (todos os meses juntos)'
			}
		}
	});
</script>

<Story
	name="Playground"
	args={{
		numberOfMonths: 2,
		captionLayout: 'label',
		weekdayFormat: 'short',
		locale: 'en-US',
		pagedNavigation: true
	}}
/>

<Story
	name="TwoMonths"
	args={{
		numberOfMonths: 2,
		captionLayout: 'label',
		pagedNavigation: true
	}}
/>

<Story
	name="ThreeMonths"
	args={{
		numberOfMonths: 3,
		captionLayout: 'label',
		pagedNavigation: true
	}}
/>

<Story
	name="IndependentNavigation"
	args={{
		numberOfMonths: 2,
		captionLayout: 'dropdown',
		pagedNavigation: false
	}}
/>
