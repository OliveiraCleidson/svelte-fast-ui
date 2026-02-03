<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Popover from './index.js';
	import Root from './popover.svelte';
	import { Button, buttonVariants } from '../button/index.js';
	import { Input } from '../input/index.js';
	import { Label } from '../label/index.js';

	const { Story } = defineMeta({
		title: 'UI/Overlays/Popover',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<Popover.Root>
		<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Open popover</Popover.Trigger>
		<Popover.Content class="w-80">
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="leading-none font-medium">Dimensions</h4>
					<p class="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
				</div>
				<div class="grid gap-2">
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="width">Width</Label>
						<Input id="width" value="100%" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="maxWidth">Max. width</Label>
						<Input id="maxWidth" value="300px" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="height">Height</Label>
						<Input id="height" value="25px" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label for="maxHeight">Max. height</Label>
						<Input id="maxHeight" value="none" class="col-span-2 h-8" />
					</div>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root>
</Story>

<Story name="Default">
	<Popover.Root>
		<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Click me</Popover.Trigger>
		<Popover.Content>
			<p class="text-sm">This is a simple popover content.</p>
		</Popover.Content>
	</Popover.Root>
</Story>

<Story name="WithForm">
	<Popover.Root>
		<Popover.Trigger class={buttonVariants()}>Edit</Popover.Trigger>
		<Popover.Content class="w-80">
			<div class="space-y-4">
				<h4 class="font-medium">Edit Item</h4>
				<div class="space-y-2">
					<Label for="name">Name</Label>
					<Input id="name" placeholder="Item name" />
				</div>
				<Button size="sm" class="w-full">Save</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
</Story>

<Story name="UserProfile">
	<Popover.Root>
		<Popover.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' }) + ' rounded-full'}>
			<div class="bg-muted size-8 rounded-full"></div>
		</Popover.Trigger>
		<Popover.Content class="w-64" align="end">
			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<div class="bg-muted size-10 rounded-full"></div>
					<div>
						<p class="font-medium">John Doe</p>
						<p class="text-muted-foreground text-sm">john@example.com</p>
					</div>
				</div>
				<div class="space-y-1 border-t pt-2">
					<Button variant="ghost" class="w-full justify-start" size="sm">Profile</Button>
					<Button variant="ghost" class="w-full justify-start" size="sm">Settings</Button>
					<Button variant="ghost" class="w-full justify-start" size="sm">Log out</Button>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root>
</Story>

<Story name="SharePopover">
	<Popover.Root>
		<Popover.Trigger class={buttonVariants({ variant: 'outline' })}>Share</Popover.Trigger>
		<Popover.Content class="w-72">
			<div class="space-y-4">
				<h4 class="font-medium">Share link</h4>
				<div class="flex gap-2">
					<Input value="https://example.com/share/abc" readonly class="text-sm" />
					<Button size="sm">Copy</Button>
				</div>
				<div class="flex gap-2">
					<Button variant="outline" size="sm" class="flex-1">Twitter</Button>
					<Button variant="outline" size="sm" class="flex-1">Facebook</Button>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root>
</Story>

<Story name="NotificationPopover">
	<Popover.Root>
		<Popover.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
			<span class="sr-only">Notifications</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path
					d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
				/></svg
			>
		</Popover.Trigger>
		<Popover.Content class="w-80" align="end">
			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<h4 class="font-medium">Notifications</h4>
					<Button variant="ghost" size="sm">Mark all read</Button>
				</div>
				<div class="space-y-2">
					{#each [1, 2, 3] as _}
						<div class="hover:bg-muted flex cursor-pointer gap-3 rounded p-2">
							<div class="bg-muted size-8 shrink-0 rounded-full"></div>
							<div>
								<p class="text-sm font-medium">New message</p>
								<p class="text-muted-foreground text-xs">2 minutes ago</p>
							</div>
						</div>
					{/each}
				</div>
				<Button variant="outline" class="w-full" size="sm">View all</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
</Story>

<Story name="Positions">
	<div class="flex flex-wrap gap-4">
		<Popover.Root>
			<Popover.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}>
				Top
			</Popover.Trigger>
			<Popover.Content side="top">
				<p class="text-sm">Popover on top</p>
			</Popover.Content>
		</Popover.Root>
		<Popover.Root>
			<Popover.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}>
				Right
			</Popover.Trigger>
			<Popover.Content side="right">
				<p class="text-sm">Popover on right</p>
			</Popover.Content>
		</Popover.Root>
		<Popover.Root>
			<Popover.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}>
				Bottom
			</Popover.Trigger>
			<Popover.Content side="bottom">
				<p class="text-sm">Popover on bottom</p>
			</Popover.Content>
		</Popover.Root>
		<Popover.Root>
			<Popover.Trigger class={buttonVariants({ variant: 'outline', size: 'sm' })}>
				Left
			</Popover.Trigger>
			<Popover.Content side="left">
				<p class="text-sm">Popover on left</p>
			</Popover.Content>
		</Popover.Root>
	</div>
</Story>
