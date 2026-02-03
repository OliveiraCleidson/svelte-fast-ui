<script lang="ts">
	import { Badge } from './index.js';
	import BadgeCheckIcon from '@lucide/svelte/icons/badge-check';

	let {
		variant = 'all'
	}: {
		variant?: 'all' | 'default' | 'secondary' | 'destructive' | 'outline' | 'custom' | 'counter';
	} = $props();
</script>

{#if variant === 'all'}
	<div class="flex flex-col items-center gap-2">
		<div class="flex w-full flex-wrap gap-2">
			<Badge>Badge</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
		<div class="flex w-full flex-wrap gap-2">
			<Badge variant="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
				<BadgeCheckIcon />
				Verified
			</Badge>
			<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
			<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
				99
			</Badge>
			<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
				20+
			</Badge>
		</div>
	</div>
{:else if variant === 'default'}
	<Badge>Badge</Badge>
{:else if variant === 'secondary'}
	<Badge variant="secondary">Secondary</Badge>
{:else if variant === 'destructive'}
	<Badge variant="destructive">Destructive</Badge>
{:else if variant === 'outline'}
	<Badge variant="outline">Outline</Badge>
{:else if variant === 'custom'}
	<Badge variant="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
		<BadgeCheckIcon />
		Verified
	</Badge>
{:else if variant === 'counter'}
	<div class="flex flex-wrap gap-2">
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
			99
		</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
			20+
		</Badge>
	</div>
{/if}
