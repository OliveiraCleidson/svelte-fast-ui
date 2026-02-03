<script lang="ts">
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
	import * as Chart from './index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { PieChart, Text } from 'layerchart';

	let {
		desktop = 1260,
		mobile = 570,
		innerRadius = 76,
		cornerRadius = 4,
		title = 'Radial Chart - Stacked',
		description = 'January - June 2024'
	}: {
		desktop?: number;
		mobile?: number;
		innerRadius?: number;
		cornerRadius?: number;
		title?: string;
		description?: string;
	} = $props();

	const chartConfig = {
		desktop: { label: 'Desktop', color: 'var(--chart-1)' },
		mobile: { label: 'Mobile', color: 'var(--chart-2)' }
	} satisfies Chart.ChartConfig;

	const chartData = $derived([
		{ platform: 'mobile', visitors: mobile, color: chartConfig.mobile.color },
		{ platform: 'desktop', visitors: desktop, color: chartConfig.desktop.color }
	]);

	const total = $derived(desktop + mobile);
</script>

<Card.Root class="flex flex-col">
	<Card.Header class="items-center">
		<Card.Title>{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content class="flex-1">
		<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-[250px]">
			<PieChart
				data={chartData}
				key="platform"
				value="visitors"
				c="color"
				{innerRadius}
				padding={29}
				range={[-90, 90]}
				props={{ pie: { sort: null } }}
				{cornerRadius}
			>
				{#snippet aboveMarks()}
					<Text
						value={String(total)}
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-foreground text-2xl! font-bold"
						dy={-24}
					/>
					<Text
						value="Visitors"
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-muted-foreground! text-muted-foreground"
						dy={-4}
					/>
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
		<div class="leading-none text-muted-foreground">
			Showing total visitors for the last 6 months
		</div>
	</Card.Footer>
</Card.Root>
