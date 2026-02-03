<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CalendarPopoverWrapper from './calendar-popover.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Calendar/Popover',
		component: CalendarPopoverWrapper,
		argTypes: {
			label: {
				control: 'text',
				description: 'Label do campo'
			},
			placeholder: {
				control: 'text',
				description: 'Placeholder quando nenhuma data selecionada'
			},
			captionLayout: {
				control: 'select',
				options: ['dropdown', 'dropdown-months', 'dropdown-years', 'label'],
				description: 'Layout do cabeçalho'
			},
			hasMaxDate: {
				control: 'boolean',
				description: 'Limitar data máxima para hoje'
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
		label: 'Date of birth',
		placeholder: 'Select date',
		captionLayout: 'dropdown',
		hasMaxDate: true,
		weekdayFormat: 'short',
		locale: 'en-US'
	}}
/>

<Story
	name="DateOfBirth"
	args={{
		label: 'Date of birth',
		placeholder: 'Select date',
		captionLayout: 'dropdown',
		hasMaxDate: true
	}}
/>

<Story
	name="EventDate"
	args={{
		label: 'Event date',
		placeholder: 'Pick a date',
		captionLayout: 'label',
		hasMaxDate: false
	}}
/>

<Story
	name="Portuguese"
	args={{
		label: 'Data de nascimento',
		placeholder: 'Selecione a data',
		captionLayout: 'dropdown',
		hasMaxDate: true,
		locale: 'pt-BR'
	}}
/>
