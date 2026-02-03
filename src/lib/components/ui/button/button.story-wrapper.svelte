<script lang="ts">
	import { Button } from './index.js';
	import ArrowUpIcon from '@lucide/svelte/icons/arrow-up';

	let {
		variant = 'default'
	}: {
		variant?:
			| 'default'
			| 'all'
			| 'primary'
			| 'secondary'
			| 'destructive'
			| 'outline'
			| 'ghost'
			| 'link'
			| 'sizes'
			| 'icon';
	} = $props();
</script>

{#if variant === 'default' || variant === 'all'}
	<div class="flex flex-wrap items-center gap-2 md:flex-row">
		<Button variant="outline">Button</Button>
		<Button variant="outline" size="icon" aria-label="Submit">
			<ArrowUpIcon />
		</Button>
	</div>
{:else if variant === 'primary'}
	<Button>Button</Button>
{:else if variant === 'secondary'}
	<Button variant="secondary">Secondary</Button>
{:else if variant === 'destructive'}
	<Button variant="destructive">Destructive</Button>
{:else if variant === 'outline'}
	<Button variant="outline">Outline</Button>
{:else if variant === 'ghost'}
	<Button variant="ghost">Ghost</Button>
{:else if variant === 'link'}
	<Button variant="link">Link</Button>
{:else if variant === 'sizes'}
	<div class="flex flex-wrap items-center gap-2">
		<Button size="sm">Small</Button>
		<Button size="default">Default</Button>
		<Button size="lg">Large</Button>
	</div>
{:else if variant === 'icon'}
	<div class="flex flex-wrap items-center gap-2">
		<Button variant="outline" size="icon-sm" aria-label="Small icon">
			<ArrowUpIcon />
		</Button>
		<Button variant="outline" size="icon" aria-label="Default icon">
			<ArrowUpIcon />
		</Button>
		<Button variant="outline" size="icon-lg" aria-label="Large icon">
			<ArrowUpIcon />
		</Button>
	</div>
{/if}
