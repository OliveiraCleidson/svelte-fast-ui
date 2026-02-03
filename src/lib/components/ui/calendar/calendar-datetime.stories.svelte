<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CalendarDatetimeWrapper from './calendar-datetime.story-wrapper.svelte';

	const { Story } = defineMeta({
		title: 'UI/Inputs/Calendar/DateTime',
		component: CalendarDatetimeWrapper,
		argTypes: {
			dateLabel: {
				control: 'text',
				description: 'Label do campo de data'
			},
			timeLabel: {
				control: 'text',
				description: 'Label do campo de hora'
			},
			datePlaceholder: {
				control: 'text',
				description: 'Placeholder do campo de data'
			},
			defaultTime: {
				control: 'text',
				description: 'Hora padrão (formato HH:MM:SS)'
			},
			captionLayout: {
				control: 'select',
				options: ['dropdown', 'dropdown-months', 'dropdown-years', 'label'],
				description: 'Layout do cabeçalho'
			},
			showSeconds: {
				control: 'boolean',
				description: 'Mostrar segundos no input de hora'
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
		dateLabel: 'Date',
		timeLabel: 'Time',
		datePlaceholder: 'Select date',
		defaultTime: '10:30:00',
		captionLayout: 'dropdown',
		showSeconds: true,
		weekdayFormat: 'short',
		locale: 'en-US'
	}}
/>

<Story
	name="Default"
	args={{
		dateLabel: 'Date',
		timeLabel: 'Time',
		datePlaceholder: 'Select date',
		defaultTime: '10:30:00',
		showSeconds: true
	}}
/>

<Story
	name="WithoutSeconds"
	args={{
		dateLabel: 'Date',
		timeLabel: 'Time',
		datePlaceholder: 'Select date',
		defaultTime: '14:00',
		showSeconds: false
	}}
/>

<Story
	name="Meeting"
	args={{
		dateLabel: 'Meeting Date',
		timeLabel: 'Start Time',
		datePlaceholder: 'Pick a date',
		defaultTime: '09:00:00',
		captionLayout: 'label',
		showSeconds: false
	}}
/>

<Story
	name="Portuguese"
	args={{
		dateLabel: 'Data',
		timeLabel: 'Hora',
		datePlaceholder: 'Selecione',
		defaultTime: '08:30:00',
		captionLayout: 'dropdown',
		showSeconds: true,
		locale: 'pt-BR'
	}}
/>
