<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Chart from './index.js';
	import { ArcChart, Text } from 'layerchart';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';

	let {
		visitors = 200,
		maxValue = 300,
		outerRadius = -20,
		innerRadius = -12,
		cornerRadius = 20,
		title = 'Radial Chart - Text',
		description = 'Showing total visitors for the last 6 months'
	}: {
		visitors?: number;
		maxValue?: number;
		outerRadius?: number;
		innerRadius?: number;
		cornerRadius?: number;
		title?: string;
		description?: string;
	} = $props();

	const chartConfig = {
		visitors: { label: 'Visitors' },
		safari: { label: 'Safari', color: 'var(--chart-2)' }
	} satisfies Chart.ChartConfig;

	const chartData = $derived([{ browser: 'safari', visitors, color: 'var(--color-safari)' }]);
</script>

<Card.Root>
	<Card.Header class="items-center">
		<Card.Title>{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content class="flex-1">
		<Chart.Container config={chartConfig} class="mx-auto aspect-square max-h-[250px]">
			<ArcChart
				label="browser"
				value="visitors"
				{outerRadius}
				{innerRadius}
				padding={40}
				range={[90, -270]}
				{maxValue}
				{cornerRadius}
				series={chartData.map((d) => ({
					key: d.browser,
					color: d.color,
					data: [d]
				}))}
				props={{
					arc: { track: { fill: 'var(--muted)' }, motion: 'tween' },
					tooltip: { context: { hideDelay: 350 } }
				}}
				tooltip={false}
			>
				{#snippet belowMarks()}
					<circle cx="0" cy="0" r="60" class="fill-background" />
				{/snippet}

				{#snippet aboveMarks()}
					<Text
						value={String(visitors)}
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-foreground text-4xl! font-bold"
						dy={3}
					/>
					<Text
						value="Visitors"
						textAnchor="middle"
						verticalAnchor="middle"
						class="fill-muted-foreground!"
						dy={22}
					/>
				{/snippet}
			</ArcChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer class="flex-col gap-2 text-sm">
		<div class="flex items-center gap-2 leading-none font-medium">
			Trending up by 5.2% this month <TrendingUpIcon class="size-4" />
		</div>
		<div class="text-muted-foreground flex items-center gap-2 leading-none">
			January - June 2024
		</div>
	</Card.Footer>
</Card.Root>
