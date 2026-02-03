<script lang="ts">
	import { Spinner } from './index.js';
	import { Button } from '../button/index.js';
	import { Badge } from '../badge/index.js';
	import * as Item from '../item/index.js';
	import * as InputGroup from '../input-group/index.js';
	import ArrowUpIcon from '@lucide/svelte/icons/arrow-up';

	let {
		variant = 'default'
	}: {
		variant?: 'default' | 'sizes' | 'colors' | 'button' | 'badge' | 'input-group';
	} = $props();
</script>

{#if variant === 'default'}
	<div class="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
		<Item.Root variant="muted">
			<Item.Media>
				<Spinner />
			</Item.Media>
			<Item.Content>
				<Item.Title class="line-clamp-1">Processing payment...</Item.Title>
			</Item.Content>
			<Item.Content class="flex-none justify-end">
				<span class="text-sm tabular-nums">$100.00</span>
			</Item.Content>
		</Item.Root>
	</div>
{:else if variant === 'sizes'}
	<div class="flex items-center gap-6">
		<Spinner class="size-3" />
		<Spinner class="size-4" />
		<Spinner class="size-6" />
		<Spinner class="size-8" />
	</div>
{:else if variant === 'colors'}
	<div class="flex items-center gap-6">
		<Spinner class="size-6 text-red-500" />
		<Spinner class="size-6 text-green-500" />
		<Spinner class="size-6 text-blue-500" />
		<Spinner class="size-6 text-yellow-500" />
		<Spinner class="size-6 text-purple-500" />
	</div>
{:else if variant === 'button'}
	<div class="flex flex-col items-center gap-4">
		<Button disabled size="sm">
			<Spinner />
			Loading...
		</Button>
		<Button variant="outline" disabled size="sm">
			<Spinner />
			Please wait
		</Button>
		<Button variant="secondary" disabled size="sm">
			<Spinner />
			Processing
		</Button>
	</div>
{:else if variant === 'badge'}
	<div class="flex items-center gap-2">
		<Badge>
			<Spinner />
			Syncing
		</Badge>
		<Badge variant="secondary">
			<Spinner />
			Updating
		</Badge>
		<Badge variant="outline">
			<Spinner />
			Loading
		</Badge>
	</div>
{:else if variant === 'input-group'}
	<div class="flex w-full max-w-md flex-col gap-4">
		<InputGroup.Root>
			<InputGroup.Input placeholder="Send a message..." disabled />
			<InputGroup.Addon align="inline-end">
				<Spinner />
			</InputGroup.Addon>
		</InputGroup.Root>
		<InputGroup.Root>
			<InputGroup.Textarea placeholder="Send a message..." disabled />
			<InputGroup.Addon align="block-end">
				<Spinner /> Validating...
				<InputGroup.Button class="ms-auto" variant="default">
					<ArrowUpIcon />
					<span class="sr-only">Send</span>
				</InputGroup.Button>
			</InputGroup.Addon>
		</InputGroup.Root>
	</div>
{/if}
