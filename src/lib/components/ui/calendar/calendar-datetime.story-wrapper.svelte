<script lang="ts">
	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import { getLocalTimeZone } from '@internationalized/date';
	import type { CalendarDate } from '@internationalized/date';

	let {
		dateLabel = 'Date',
		timeLabel = 'Time',
		datePlaceholder = 'Select date',
		defaultTime = '10:30:00',
		captionLayout = 'dropdown',
		showSeconds = true,
		weekdayFormat = 'short',
		locale = 'en-US'
	}: {
		dateLabel?: string;
		timeLabel?: string;
		datePlaceholder?: string;
		defaultTime?: string;
		captionLayout?: 'dropdown' | 'dropdown-months' | 'dropdown-years' | 'label';
		showSeconds?: boolean;
		weekdayFormat?: 'short' | 'long' | 'narrow';
		locale?: string;
	} = $props();

	const id = crypto.randomUUID();

	let open = $state(false);
	let value = $state<CalendarDate | undefined>();
	let time = $state(defaultTime);

	const timeStep = $derived(showSeconds ? 1 : 60);
</script>

<div class="flex gap-4">
	<div class="flex flex-col gap-3">
		<Label for="{id}-date" class="px-1">{dateLabel}</Label>
		<Popover.Root bind:open>
			<Popover.Trigger id="{id}-date">
				{#snippet child({ props })}
					<Button {...props} variant="outline" class="w-32 justify-between font-normal">
						{value ? value.toDate(getLocalTimeZone()).toLocaleDateString() : datePlaceholder}
						<ChevronDownIcon />
					</Button>
				{/snippet}
			</Popover.Trigger>
			<Popover.Content class="w-auto overflow-hidden p-0" align="start">
				<Calendar
					type="single"
					bind:value
					onValueChange={() => {
						open = false;
					}}
					{captionLayout}
					{weekdayFormat}
					{locale}
				/>
			</Popover.Content>
		</Popover.Root>
	</div>
	<div class="flex flex-col gap-3">
		<Label for="{id}-time" class="px-1">{timeLabel}</Label>
		<Input
			type="time"
			id="{id}-time"
			step={timeStep}
			bind:value={time}
			class="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
		/>
	</div>
</div>
