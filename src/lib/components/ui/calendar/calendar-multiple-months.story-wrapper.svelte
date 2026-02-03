<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import { CalendarDate } from '@internationalized/date';

	let {
		numberOfMonths = 2,
		captionLayout = 'label',
		weekdayFormat = 'short',
		locale = 'en-US',
		pagedNavigation = true
	}: {
		numberOfMonths?: number;
		captionLayout?: 'dropdown' | 'dropdown-months' | 'dropdown-years' | 'label';
		weekdayFormat?: 'short' | 'long' | 'narrow';
		locale?: string;
		pagedNavigation?: boolean;
	} = $props();

	let value = $state<CalendarDate | undefined>(new CalendarDate(2025, 6, 12));
</script>

<Calendar
	type="single"
	bind:value
	class="rounded-lg border shadow-sm"
	{numberOfMonths}
	{captionLayout}
	{weekdayFormat}
	{locale}
	{pagedNavigation}
/>
