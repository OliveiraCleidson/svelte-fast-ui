<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as DropdownMenu from './index.js';
	import Root from './dropdown-menu.svelte';
	import { Button } from '../button/index.js';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import UserIcon from '@lucide/svelte/icons/user';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
	import SettingsIcon from '@lucide/svelte/icons/settings';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import MailIcon from '@lucide/svelte/icons/mail';
	import MessageSquareIcon from '@lucide/svelte/icons/message-square';
	import UsersIcon from '@lucide/svelte/icons/users';

	const { Story } = defineMeta({
		title: 'UI/Overlays/DropdownMenu',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">
					Open Menu <ChevronDownIcon class="ml-2 size-4" />
				</Button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56">
			<DropdownMenu.Label>My Account</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Group>
				<DropdownMenu.Item>
					<UserIcon class="mr-2 size-4" />
					<span>Profile</span>
					<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<CreditCardIcon class="mr-2 size-4" />
					<span>Billing</span>
					<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<SettingsIcon class="mr-2 size-4" />
					<span>Settings</span>
					<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>
				<LogOutIcon class="mr-2 size-4" />
				<span>Log out</span>
				<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</Story>

<Story name="Default">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">Open</Button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Item>Item 1</DropdownMenu.Item>
			<DropdownMenu.Item>Item 2</DropdownMenu.Item>
			<DropdownMenu.Item>Item 3</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</Story>

<Story name="WithSubmenus">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">Open Menu</Button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56">
			<DropdownMenu.Item>
				<PlusIcon class="mr-2 size-4" />
				New File
			</DropdownMenu.Item>
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>
					<UsersIcon class="mr-2 size-4" />
					Invite Users
				</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent>
					<DropdownMenu.Item>
						<MailIcon class="mr-2 size-4" />
						Email
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<MessageSquareIcon class="mr-2 size-4" />
						Message
					</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>More...</DropdownMenu.Item>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>Settings</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</Story>

<Story name="UserMenu">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="ghost" class="size-10 rounded-full p-0">
					<div
						class="flex size-8 items-center justify-center rounded-full bg-muted text-sm font-medium"
					>
						JD
					</div>
				</Button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56" align="end">
			<DropdownMenu.Label class="font-normal">
				<div class="flex flex-col space-y-1">
					<p class="text-sm font-medium">John Doe</p>
					<p class="text-xs text-muted-foreground">john@example.com</p>
				</div>
			</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Group>
				<DropdownMenu.Item>Profile</DropdownMenu.Item>
				<DropdownMenu.Item>Billing</DropdownMenu.Item>
				<DropdownMenu.Item>Settings</DropdownMenu.Item>
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
			<DropdownMenu.Item class="text-destructive">Log out</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</Story>

<Story name="WithDisabledItems">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">Actions</Button>
			{/snippet}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Item>Edit</DropdownMenu.Item>
			<DropdownMenu.Item>Duplicate</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item disabled>Archive</DropdownMenu.Item>
			<DropdownMenu.Item disabled>Move</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item class="text-destructive">Delete</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</Story>
