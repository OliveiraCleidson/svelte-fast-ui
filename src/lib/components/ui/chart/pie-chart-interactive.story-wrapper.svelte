<script lang="ts">
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
	import * as Chart from './index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Arc, PieChart, Text } from 'layerchart';
	import ChartStyle from './chart-style.svelte';

	let {
		title = 'Pie Chart - Interactive',
		description = 'January - June 2024'
	}: {
		title?: string;
		description?: string;
	} = $props();

	const id = 'pie-interactive';

	const desktopData = [
		{ month: 'january', desktop: 186, color: 'var(--color-january)' },
		{ month: 'february', desktop: 305, color: 'var(--color-february)' },
		{ month: 'march', desktop: 237, color: 'var(--color-march)' },
		{ month: 'april', desktop: 73, color: 'var(--color-april)' },
		{ month: 'may', desktop: 209, color: 'var(--color-may)' }
	];

	const chartConfig = {
		visitors: { label: 'Visitors' },
		desktop: { label: 'Desktop' },
		mobile: { label: 'Mobile' },
		january: { label: 'January', color: 'var(--chart-1)' },
		february: { label: 'February', color: 'var(--chart-2)' },
		march: { label: 'March', color: 'var(--chart-3)' },
		april: { label: 'April', color: 'var(--chart-4)' },
		may: { label: 'May', color: 'var(--chart-5)' }
	} satisfies Chart.ChartConfig;

	let activeMonth = $state(desktopData[0].month);
	const activeIndex = $derived(desktopData.findIndex((item) => item.month === activeMonth));
	const months = desktopData.map((item) => item.month);
</script>

<Card.Root data-chart={id} class="flex flex-col">
	<ChartStyle {id} config={chartConfig} />
	<Card.Header class="flex-row items-start space-y-0 pb-0">
		<div class="grid gap-1">
			<Card.Title>{title}</Card.Title>
			<Card.Description>{description}</Card.Description>
		</div>
		<Select.Root type="single" bind:value={activeMonth}>
			<Select.Trigger class="ml-auto h-7 w-[130px] rounded-lg pl-2.5" aria-label="Select a value">
				{chartConfig[activeMonth as keyof typeof chartConfig]?.label ?? 'Select month'}
			</Select.Trigger>
			<Select.Content align="end" class="rounded-xl">
				{#each months as month}
					{@const config = chartConfig[month as keyof typeof chartConfig]}
					{#if config}
						<Select.Item value={month} class="rounded-lg [&_span]:flex">
							<div class="flex items-center gap-2 text-xs">
								<span
									class="flex h-3 w-3 shrink-0 rounded-sm"
									style="background-color: var(--color-{month});"
								></span>
								{config.label}
							</div>
						</Select.Item>
					{/if}
				{/each}
			</Select.Content>
		</Select.Root>
	</Card.Header>
	<Card.Content class="flex flex-1 justify-center pb-0">
		<Chart.Container {id} config={chartConfig} class="mx-auto aspect-square w-full max-w-[300px]">
			<PieChart
				data={desktopData}
				key="month"
				value="desktop"
				c="color"
				innerRadius={60}
				props={{
					pie: { motion: 'tween' },
					arc: { strokeWidth: 5 }
				}}
				padding={29}
			>
				{#snippet aboveMarks()}
					<Text
						value={String(desktopData[activeIndex].desktop.toLocaleString())}
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-foreground text-3xl! font-bold"
						dy={3}
					/>
					<Text
						value="Visitors"
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-muted-foreground! text-muted-foreground"
						dy={22}
					/>
				{/snippet}
				{#snippet arc({ props, index })}
					{@const isActive = index === activeIndex}
					{@const arcProps = isActive
						? { ...props, outerRadius: 105, innerRadius: 60 }
						: { ...props, outerRadius: 95 }}
					<Arc {...arcProps} />
					{#if isActive}
						<Arc {...props} outerRadius={120} innerRadius={108} />
					{/if}
				{/snippet}
				{#snippet tooltip()}
					<Chart.Tooltip hideLabel />
				{/snippet}
			</PieChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer class="flex-col gap-2 text-sm">
		<div class="flex items-center gap-2 leading-none font-medium">
			Trending up by 5.2% this month <TrendingUpIcon class="size-4" />
		</div>
		<div class="text-muted-foreground leading-none">
			Showing total visitors for the last 6 months
		</div>
	</Card.Footer>
</Card.Root>
