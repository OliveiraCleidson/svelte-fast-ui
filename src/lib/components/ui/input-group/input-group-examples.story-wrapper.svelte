<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ArrowUpIcon from '@lucide/svelte/icons/arrow-up';

	import * as InputGroup from './index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<div class="grid w-full max-w-sm gap-6">
	<InputGroup.Root>
		<InputGroup.Input placeholder="Search..." />
		<InputGroup.Addon>
			<SearchIcon />
		</InputGroup.Addon>
		<InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Input placeholder="example.com" class="!ps-1" />
		<InputGroup.Addon>
			<InputGroup.Text>https://</InputGroup.Text>
		</InputGroup.Addon>
		<InputGroup.Addon align="inline-end">
			<InputGroup.Button class="rounded-full" size="icon-xs">
				<CheckIcon />
			</InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Textarea placeholder="Ask, Search or Chat..." />
		<InputGroup.Addon align="block-end">
			<InputGroup.Button variant="outline" class="rounded-full" size="icon-xs">
				<PlusIcon />
			</InputGroup.Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					{#snippet child({ props })}
						<InputGroup.Button {...props} variant="ghost">Auto</InputGroup.Button>
					{/snippet}
				</DropdownMenu.Trigger>
				<DropdownMenu.Content side="top" align="start">
					<DropdownMenu.Item>Auto</DropdownMenu.Item>
					<DropdownMenu.Item>Agent</DropdownMenu.Item>
					<DropdownMenu.Item>Manual</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
			<InputGroup.Text class="ms-auto">52% used</InputGroup.Text>
			<Separator orientation="vertical" class="!h-4" />
			<InputGroup.Button variant="default" class="rounded-full" size="icon-xs" disabled>
				<ArrowUpIcon />
				<span class="sr-only">Send</span>
			</InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Input placeholder="@shadcn" />
		<InputGroup.Addon align="inline-end">
			<div
				class="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full"
			>
				<CheckIcon class="size-3" />
			</div>
		</InputGroup.Addon>
	</InputGroup.Root>
</div>
