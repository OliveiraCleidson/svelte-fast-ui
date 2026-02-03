<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Dialog from './index.js';
	import Root from './dialog.svelte';
	import { buttonVariants } from '../button/index.js';
	import { Input } from '../input/index.js';
	import { Label } from '../label/index.js';

	const { Story } = defineMeta({
		title: 'UI/Overlays/Dialog',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Open Dialog</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Edit profile</Dialog.Title>
				<Dialog.Description>
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4">
				<div class="grid gap-3">
					<Label for="name-1">Name</Label>
					<Input id="name-1" name="name" value="Caio Oliveira" />
				</div>
				<div class="grid gap-3">
					<Label for="username-1">Username</Label>
					<Input id="username-1" name="username" value="@arqcaio" />
				</div>
			</div>
			<Dialog.Footer>
				<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Dialog.Close>
				<button class={buttonVariants()}>Save changes</button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Story>

<Story name="Default">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Open</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Dialog Title</Dialog.Title>
				<Dialog.Description>
					This is a dialog description. It provides additional context.
				</Dialog.Description>
			</Dialog.Header>
			<p class="text-muted-foreground text-sm">
				Dialog content goes here. You can add any components you need.
			</p>
		</Dialog.Content>
	</Dialog.Root>
</Story>

<Story name="WithForm">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants()}>Create Account</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-md">
			<Dialog.Header>
				<Dialog.Title>Create an account</Dialog.Title>
				<Dialog.Description>Enter your email below to create your account.</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" type="password" />
				</div>
			</div>
			<Dialog.Footer>
				<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Dialog.Close>
				<button class={buttonVariants()}>Create</button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Story>

<Story name="Simple">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>View Details</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Order Details</Dialog.Title>
			</Dialog.Header>
			<div class="space-y-2">
				<p class="text-sm"><strong>Order ID:</strong> #12345</p>
				<p class="text-sm"><strong>Status:</strong> Processing</p>
				<p class="text-sm"><strong>Total:</strong> $99.00</p>
			</div>
		</Dialog.Content>
	</Dialog.Root>
</Story>

<Story name="WithFooterButtons">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'destructive' })}>Delete Item</Dialog.Trigger>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Delete Confirmation</Dialog.Title>
				<Dialog.Description>
					Are you sure you want to delete this item? This action cannot be undone.
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer class="gap-2 sm:gap-0">
				<Dialog.Close class={buttonVariants({ variant: 'outline' })}>Cancel</Dialog.Close>
				<button class={buttonVariants({ variant: 'destructive' })}>Delete</button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Story>

<Story name="LongContent">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Terms of Service</Dialog.Trigger>
		<Dialog.Content class="max-h-[80vh] overflow-y-auto">
			<Dialog.Header>
				<Dialog.Title>Terms of Service</Dialog.Title>
				<Dialog.Description>Please read our terms of service carefully.</Dialog.Description>
			</Dialog.Header>
			<div class="space-y-4 text-sm">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<p>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</p>
				<p>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur.
				</p>
				<p>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
			</div>
			<Dialog.Footer>
				<button class={buttonVariants()}>I Accept</button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Story>

<Story name="CustomWidth">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Wide Dialog</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-2xl">
			<Dialog.Header>
				<Dialog.Title>Wide Dialog Example</Dialog.Title>
				<Dialog.Description>This dialog has a custom maximum width.</Dialog.Description>
			</Dialog.Header>
			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-2">
					<Label>First Name</Label>
					<Input placeholder="John" />
				</div>
				<div class="space-y-2">
					<Label>Last Name</Label>
					<Input placeholder="Doe" />
				</div>
				<div class="space-y-2">
					<Label>Email</Label>
					<Input type="email" placeholder="john@example.com" />
				</div>
				<div class="space-y-2">
					<Label>Phone</Label>
					<Input type="tel" placeholder="+1 (555) 000-0000" />
				</div>
			</div>
			<Dialog.Footer>
				<button class={buttonVariants()}>Submit</button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</Story>
