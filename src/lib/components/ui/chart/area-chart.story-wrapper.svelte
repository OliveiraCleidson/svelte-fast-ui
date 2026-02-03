<script lang="ts">
	import { AreaChart } from 'layerchart';
	import TrendingUpIcon from '@lucide/svelte/icons/trending-up';
	import { curveNatural, curveLinear, curveStep } from 'd3-shape';
	import { scaleUtc } from 'd3-scale';
	import * as Chart from './index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	let {
		curve = 'natural',
		fillOpacity = 0.4,
		title = 'Area Chart',
		description = 'Showing total visitors for the last 6 months'
	}: {
		curve?: 'natural' | 'linear' | 'step';
		fillOpacity?: number;
		title?: string;
		description?: string;
	} = $props();

	const chartData = [
		{ date: new Date('2024-01-01'), desktop: 186 },
		{ date: new Date('2024-02-01'), desktop: 305 },
		{ date: new Date('2024-03-01'), desktop: 237 },
		{ date: new Date('2024-04-01'), desktop: 73 },
		{ date: new Date('2024-05-01'), desktop: 209 },
		{ date: new Date('2024-06-01'), desktop: 214 }
	];

	const chartConfig = {
		desktop: { label: 'Desktop', color: 'var(--chart-1)' }
	} satisfies Chart.ChartConfig;

	const curveMap = {
		natural: curveNatural,
		linear: curveLinear,
		step: curveStep
	};

	const selectedCurve = $derived(curveMap[curve]);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<AreaChart
				data={chartData}
				x="date"
				xScale={scaleUtc()}
				series={[
					{
						key: 'desktop',
						label: 'Desktop',
						color: chartConfig.desktop.color
					}
				]}
				axis="x"
				props={{
					area: {
						curve: selectedCurve,
						'fill-opacity': fillOpacity,
						line: { class: 'stroke-1' },
						motion: 'tween'
					},
					xAxis: {
						format: (v: Date) => v.toLocaleDateString('en-US', { month: 'short' })
					}
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip
						labelFormatter={(v: Date) => v.toLocaleDateString('en-US', { month: 'long' })}
						indicator="line"
					/>
				{/snippet}
			</AreaChart>
		</Chart.Container>
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full items-start gap-2 text-sm">
			<div class="grid gap-2">
				<div class="flex items-center gap-2 leading-none font-medium">
					Trending up by 5.2% this month <TrendingUpIcon class="size-4" />
				</div>
				<div class="text-muted-foreground flex items-center gap-2 leading-none">
					January - June 2024
				</div>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
