<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { getLocalTimeZone, today, type CalendarDate } from '@internationalized/date';

	let {
		label = 'Date of birth',
		placeholder = 'Select date',
		captionLayout = 'dropdown',
		hasMaxDate = true,
		weekdayFormat = 'short',
		locale = 'en-US'
	}: {
		label?: string;
		placeholder?: string;
		captionLayout?: 'dropdown' | 'dropdown-months' | 'dropdown-years' | 'label';
		hasMaxDate?: boolean;
		weekdayFormat?: 'short' | 'long' | 'narrow';
		locale?: string;
	} = $props();

	const id = crypto.randomUUID();

	let open = $state(false);
	let value = $state<CalendarDate | undefined>();

	const maxValue = $derived(hasMaxDate ? today(getLocalTimeZone()) : undefined);
</script>

<div class="flex flex-col gap-3">
	<Label for="{id}-date" class="px-1">{label}</Label>
	<Popover.Root bind:open>
		<Popover.Trigger id="{id}-date">
			{#snippet child({ props })}
				<Button {...props} variant="outline" class="w-48 justify-between font-normal">
					{value ? value.toDate(getLocalTimeZone()).toLocaleDateString() : placeholder}
					<ChevronDownIcon />
				</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="w-auto overflow-hidden p-0" align="start">
			<Calendar
				type="single"
				bind:value
				{captionLayout}
				onValueChange={() => {
					open = false;
				}}
				{maxValue}
				{weekdayFormat}
				{locale}
			/>
		</Popover.Content>
	</Popover.Root>
</div>
