<script lang="ts">
	import { ToggleGroup, ToggleGroupItem } from './index.js';
	import BoldIcon from '@lucide/svelte/icons/bold';
	import ItalicIcon from '@lucide/svelte/icons/italic';
	import UnderlineIcon from '@lucide/svelte/icons/underline';
	import AlignLeftIcon from '@lucide/svelte/icons/align-left';
	import AlignCenterIcon from '@lucide/svelte/icons/align-center';
	import AlignRightIcon from '@lucide/svelte/icons/align-right';
	import AlignJustifyIcon from '@lucide/svelte/icons/align-justify';
	import ListIcon from '@lucide/svelte/icons/list';
	import GridIcon from '@lucide/svelte/icons/layout-grid';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import MonitorIcon from '@lucide/svelte/icons/monitor';

	let {
		variant = 'default'
	}: {
		variant?:
			| 'default'
			| 'playground'
			| 'single'
			| 'multiple'
			| 'outline'
			| 'sizes'
			| 'theme-switcher'
			| 'with-labels'
			| 'disabled';
	} = $props();
</script>

{#if variant === 'default' || variant === 'playground'}
	<ToggleGroup type="single" value="center">
		<ToggleGroupItem value="left" aria-label="Align left">
			<AlignLeftIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="center" aria-label="Align center">
			<AlignCenterIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="right" aria-label="Align right">
			<AlignRightIcon class="size-4" />
		</ToggleGroupItem>
	</ToggleGroup>
{:else if variant === 'single'}
	<ToggleGroup type="single" value="left">
		<ToggleGroupItem value="left" aria-label="Align left">
			<AlignLeftIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="center" aria-label="Align center">
			<AlignCenterIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="right" aria-label="Align right">
			<AlignRightIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="justify" aria-label="Justify">
			<AlignJustifyIcon class="size-4" />
		</ToggleGroupItem>
	</ToggleGroup>
{:else if variant === 'multiple'}
	<ToggleGroup type="multiple" value={['bold']}>
		<ToggleGroupItem value="bold" aria-label="Bold">
			<BoldIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="italic" aria-label="Italic">
			<ItalicIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="underline" aria-label="Underline">
			<UnderlineIcon class="size-4" />
		</ToggleGroupItem>
	</ToggleGroup>
{:else if variant === 'outline'}
	<ToggleGroup type="single" variant="outline" value="list">
		<ToggleGroupItem value="list" aria-label="List view">
			<ListIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="grid" aria-label="Grid view">
			<GridIcon class="size-4" />
		</ToggleGroupItem>
	</ToggleGroup>
{:else if variant === 'sizes'}
	<div class="flex flex-col gap-4">
		<ToggleGroup type="single" size="sm">
			<ToggleGroupItem value="left" aria-label="Align left">
				<AlignLeftIcon class="size-3" />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<AlignCenterIcon class="size-3" />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right">
				<AlignRightIcon class="size-3" />
			</ToggleGroupItem>
		</ToggleGroup>
		<ToggleGroup type="single">
			<ToggleGroupItem value="left" aria-label="Align left">
				<AlignLeftIcon class="size-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<AlignCenterIcon class="size-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right">
				<AlignRightIcon class="size-4" />
			</ToggleGroupItem>
		</ToggleGroup>
		<ToggleGroup type="single" size="lg">
			<ToggleGroupItem value="left" aria-label="Align left">
				<AlignLeftIcon class="size-5" />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<AlignCenterIcon class="size-5" />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right">
				<AlignRightIcon class="size-5" />
			</ToggleGroupItem>
		</ToggleGroup>
	</div>
{:else if variant === 'theme-switcher'}
	<ToggleGroup type="single" variant="outline" value="system">
		<ToggleGroupItem value="light" aria-label="Light mode">
			<SunIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="dark" aria-label="Dark mode">
			<MoonIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="system" aria-label="System">
			<MonitorIcon class="size-4" />
		</ToggleGroupItem>
	</ToggleGroup>
{:else if variant === 'with-labels'}
	<ToggleGroup type="single" variant="outline" value="monthly" class="justify-start">
		<ToggleGroupItem value="monthly" class="px-4">Monthly</ToggleGroupItem>
		<ToggleGroupItem value="yearly" class="px-4">Yearly</ToggleGroupItem>
	</ToggleGroup>
{:else if variant === 'disabled'}
	<ToggleGroup type="single" disabled>
		<ToggleGroupItem value="left" aria-label="Align left">
			<AlignLeftIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="center" aria-label="Align center">
			<AlignCenterIcon class="size-4" />
		</ToggleGroupItem>
		<ToggleGroupItem value="right" aria-label="Align right">
			<AlignRightIcon class="size-4" />
		</ToggleGroupItem>
	</ToggleGroup>
{/if}
