<script lang="ts">
	import { RangeCalendar } from './index.js';

	let {
		numberOfMonths = 1,
		weekdayFormat = 'short',
		captionLayout = 'label',
		fixedWeeks = false,
		locale = 'en-US'
	}: {
		numberOfMonths?: number;
		weekdayFormat?: 'narrow' | 'short' | 'long';
		captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
		fixedWeeks?: boolean;
		locale?: string;
	} = $props();
</script>

<RangeCalendar
	{numberOfMonths}
	{weekdayFormat}
	{captionLayout}
	{fixedWeeks}
	{locale}
	class="rounded-md border"
/>
