<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Sheet from './index.js';
	import Root from './sheet.svelte';
	import { Button, buttonVariants } from '../button/index.js';
	import { Input } from '../input/index.js';
	import { Label } from '../label/index.js';

	const { Story } = defineMeta({
		title: 'UI/Overlays/Sheet',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Open</Sheet.Trigger>
		<Sheet.Content side="right">
			<Sheet.Header>
				<Sheet.Title>Edit profile</Sheet.Title>
				<Sheet.Description>
					Make changes to your profile here. Click save when you're done.
				</Sheet.Description>
			</Sheet.Header>
			<div class="grid flex-1 auto-rows-min gap-6 px-4">
				<div class="grid gap-3">
					<Label for="name">Name</Label>
					<Input id="name" value="Caio Oliveira" />
				</div>
				<div class="grid gap-3">
					<Label for="username">Username</Label>
					<Input id="username" value="@arqcaio" />
				</div>
			</div>
			<Sheet.Footer>
				<Button type="submit">Save changes</Button>
				<Sheet.Close class={buttonVariants({ variant: 'outline' })}>Close</Sheet.Close>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>
</Story>

<Story name="RightSide">
	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Open Right</Sheet.Trigger>
		<Sheet.Content side="right">
			<Sheet.Header>
				<Sheet.Title>Sheet Title</Sheet.Title>
				<Sheet.Description>This sheet opens from the right side.</Sheet.Description>
			</Sheet.Header>
			<div class="py-4">
				<p class="text-muted-foreground text-sm">Sheet content goes here.</p>
			</div>
		</Sheet.Content>
	</Sheet.Root>
</Story>

<Story name="LeftSide">
	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Open Left</Sheet.Trigger>
		<Sheet.Content side="left">
			<Sheet.Header>
				<Sheet.Title>Navigation</Sheet.Title>
				<Sheet.Description>Browse through the menu items.</Sheet.Description>
			</Sheet.Header>
			<div class="space-y-2 py-4">
				<Button variant="ghost" class="w-full justify-start">Home</Button>
				<Button variant="ghost" class="w-full justify-start">About</Button>
				<Button variant="ghost" class="w-full justify-start">Services</Button>
				<Button variant="ghost" class="w-full justify-start">Contact</Button>
			</div>
		</Sheet.Content>
	</Sheet.Root>
</Story>

<Story name="TopSide">
	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Open Top</Sheet.Trigger>
		<Sheet.Content side="top">
			<Sheet.Header>
				<Sheet.Title>Notification</Sheet.Title>
				<Sheet.Description>You have a new message.</Sheet.Description>
			</Sheet.Header>
		</Sheet.Content>
	</Sheet.Root>
</Story>

<Story name="BottomSide">
	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Open Bottom</Sheet.Trigger>
		<Sheet.Content side="bottom">
			<Sheet.Header>
				<Sheet.Title>Quick Actions</Sheet.Title>
				<Sheet.Description>Select an action below.</Sheet.Description>
			</Sheet.Header>
			<div class="flex gap-2 py-4">
				<Button variant="outline" class="flex-1">Share</Button>
				<Button variant="outline" class="flex-1">Copy</Button>
				<Button variant="outline" class="flex-1">Edit</Button>
			</div>
		</Sheet.Content>
	</Sheet.Root>
</Story>

<Story name="SettingsPanel">
	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>Settings</Sheet.Trigger>
		<Sheet.Content class="w-[400px] sm:w-[540px]">
			<Sheet.Header>
				<Sheet.Title>Settings</Sheet.Title>
				<Sheet.Description>Manage your account settings.</Sheet.Description>
			</Sheet.Header>
			<div class="space-y-4 py-4">
				<div class="space-y-2">
					<Label>Display Name</Label>
					<Input placeholder="Your display name" />
				</div>
				<div class="space-y-2">
					<Label>Email</Label>
					<Input type="email" placeholder="email@example.com" />
				</div>
				<div class="space-y-2">
					<Label>Bio</Label>
					<Input placeholder="A short bio" />
				</div>
			</div>
			<Sheet.Footer>
				<Sheet.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Sheet.Close>
				<Button>Save</Button>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>
</Story>

<Story name="CartSheet">
	<Sheet.Root>
		<Sheet.Trigger class={buttonVariants({ variant: 'outline' })}>View Cart (3)</Sheet.Trigger>
		<Sheet.Content>
			<Sheet.Header>
				<Sheet.Title>Shopping Cart</Sheet.Title>
				<Sheet.Description>3 items in your cart</Sheet.Description>
			</Sheet.Header>
			<div class="space-y-4 py-4">
				{#each [1, 2, 3] as item}
					<div class="flex items-center gap-4 rounded border p-2">
						<div class="bg-muted size-16 rounded"></div>
						<div class="flex-1">
							<p class="font-medium">Product {item}</p>
							<p class="text-muted-foreground text-sm">$29.99</p>
						</div>
						<Button variant="ghost" size="sm">Remove</Button>
					</div>
				{/each}
			</div>
			<Sheet.Footer class="flex-col gap-2">
				<div class="flex w-full justify-between text-sm">
					<span>Subtotal</span>
					<span class="font-medium">$89.97</span>
				</div>
				<Button class="w-full">Checkout</Button>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>
</Story>
