<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CalendarWrapper from './calendar.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Calendar/Basic',
		component: CalendarWrapper,
		argTypes: {
			captionLayout: {
				control: 'select',
				options: ['dropdown', 'dropdown-months', 'dropdown-years', 'label'],
				description: 'Layout do cabeçalho do calendário'
			},
			weekdayFormat: {
				control: 'select',
				options: ['short', 'long', 'narrow'],
				description: 'Formato dos dias da semana'
			},
			locale: {
				control: 'text',
				description: 'Locale para formatação (ex: en-US, pt-BR)'
			},
			disableDaysOutsideMonth: {
				control: 'boolean',
				description: 'Desabilitar dias fora do mês atual'
			}
		}
	});
</script>

<Story
	name="Playground"
	args={{
		captionLayout: 'dropdown',
		weekdayFormat: 'short',
		locale: 'en-US',
		disableDaysOutsideMonth: false
	}}
/>

<Story
	name="Dropdown"
	args={{
		captionLayout: 'dropdown',
		weekdayFormat: 'short',
		locale: 'en-US'
	}}
/>

<Story
	name="Label"
	args={{
		captionLayout: 'label',
		weekdayFormat: 'short',
		locale: 'en-US'
	}}
/>

<Story
	name="Portuguese"
	args={{
		captionLayout: 'dropdown',
		weekdayFormat: 'short',
		locale: 'pt-BR'
	}}
/>
