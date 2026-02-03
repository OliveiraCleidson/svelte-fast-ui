<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Drawer from './index.js';
	import Root from './drawer.svelte';
	import { Button, buttonVariants } from '../button/index.js';
	import { Input } from '../input/index.js';
	import { Label } from '../label/index.js';

	const { Story } = defineMeta({
		title: 'UI/Overlays/Drawer',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<Drawer.Root>
		<Drawer.Trigger class={buttonVariants({ variant: 'outline' })}>Open Drawer</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Edit profile</Drawer.Title>
				<Drawer.Description>Make changes to your profile here.</Drawer.Description>
			</Drawer.Header>
			<div class="px-4">
				<div class="grid gap-4 py-4">
					<div class="grid gap-2">
						<Label for="name">Name</Label>
						<Input id="name" placeholder="Your name" />
					</div>
					<div class="grid gap-2">
						<Label for="email">Email</Label>
						<Input id="email" type="email" placeholder="email@example.com" />
					</div>
				</div>
			</div>
			<Drawer.Footer>
				<Button>Save changes</Button>
				<Drawer.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
</Story>

<Story name="Default">
	<Drawer.Root>
		<Drawer.Trigger class={buttonVariants({ variant: 'outline' })}>Open</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Drawer Title</Drawer.Title>
				<Drawer.Description>
					This is a drawer component. It slides up from the bottom.
				</Drawer.Description>
			</Drawer.Header>
			<div class="p-4">
				<p class="text-sm text-muted-foreground">Drawer content goes here.</p>
			</div>
		</Drawer.Content>
	</Drawer.Root>
</Story>

<Story name="WithForm">
	<Drawer.Root>
		<Drawer.Trigger class={buttonVariants()}>Add Item</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Add New Item</Drawer.Title>
				<Drawer.Description>Fill in the details below.</Drawer.Description>
			</Drawer.Header>
			<div class="space-y-4 p-4">
				<div class="space-y-2">
					<Label>Item Name</Label>
					<Input placeholder="Enter item name" />
				</div>
				<div class="space-y-2">
					<Label>Description</Label>
					<Input placeholder="Enter description" />
				</div>
				<div class="space-y-2">
					<Label>Price</Label>
					<Input type="number" placeholder="0.00" />
				</div>
			</div>
			<Drawer.Footer>
				<Button>Add Item</Button>
				<Drawer.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
</Story>

<Story name="ActionSheet">
	<Drawer.Root>
		<Drawer.Trigger class={buttonVariants({ variant: 'outline' })}>Share</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Share</Drawer.Title>
				<Drawer.Description>Choose how you want to share</Drawer.Description>
			</Drawer.Header>
			<div class="space-y-2 p-4">
				<Button variant="ghost" class="w-full justify-start">Copy Link</Button>
				<Button variant="ghost" class="w-full justify-start">Share to Twitter</Button>
				<Button variant="ghost" class="w-full justify-start">Share to Facebook</Button>
				<Button variant="ghost" class="w-full justify-start">Share via Email</Button>
			</div>
			<Drawer.Footer>
				<Drawer.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
</Story>

<Story name="FilterDrawer">
	<Drawer.Root>
		<Drawer.Trigger class={buttonVariants({ variant: 'outline' })}>Filters</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Filters</Drawer.Title>
				<Drawer.Description>Narrow down your results</Drawer.Description>
			</Drawer.Header>
			<div class="space-y-4 p-4">
				<div class="space-y-2">
					<Label>Category</Label>
					<div class="flex flex-wrap gap-2">
						<Button variant="outline" size="sm">Electronics</Button>
						<Button variant="outline" size="sm">Clothing</Button>
						<Button variant="outline" size="sm">Home</Button>
					</div>
				</div>
				<div class="space-y-2">
					<Label>Price Range</Label>
					<div class="flex gap-2">
						<Input placeholder="Min" type="number" />
						<Input placeholder="Max" type="number" />
					</div>
				</div>
			</div>
			<Drawer.Footer>
				<Button>Apply Filters</Button>
				<Drawer.Close class={buttonVariants({ variant: 'outline' })}>Reset</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
</Story>

<Story name="Confirmation">
	<Drawer.Root>
		<Drawer.Trigger class={buttonVariants({ variant: 'destructive' })}>Delete</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Delete Item</Drawer.Title>
				<Drawer.Description>
					Are you sure you want to delete this item? This action cannot be undone.
				</Drawer.Description>
			</Drawer.Header>
			<Drawer.Footer>
				<Button variant="destructive">Delete</Button>
				<Drawer.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
</Story>
