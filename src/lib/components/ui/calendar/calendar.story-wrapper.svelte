<script lang="ts">
	import { getLocalTimeZone, today } from '@internationalized/date';
	import { Calendar } from '$lib/components/ui/calendar/index.js';

	let {
		captionLayout = 'dropdown',
		weekdayFormat = 'short',
		locale = 'en-US',
		disableDaysOutsideMonth = false
	}: {
		captionLayout?: 'dropdown' | 'dropdown-months' | 'dropdown-years' | 'label';
		weekdayFormat?: 'short' | 'long' | 'narrow';
		locale?: string;
		disableDaysOutsideMonth?: boolean;
	} = $props();

	let value = $state(today(getLocalTimeZone()));
</script>

<Calendar
	type="single"
	bind:value
	class="rounded-md border shadow-sm"
	{captionLayout}
	{weekdayFormat}
	{locale}
	{disableDaysOutsideMonth}
/>
