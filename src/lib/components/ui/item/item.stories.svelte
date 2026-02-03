<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Item from './index.js';
	import * as Avatar from '../avatar/index.js';
	import Root from './item.svelte';
	import { Button } from '../button/index.js';
	import { Badge } from '../badge/index.js';
	import MoreHorizontalIcon from '@lucide/svelte/icons/more-horizontal';
	import FileIcon from '@lucide/svelte/icons/file';
	import FolderIcon from '@lucide/svelte/icons/folder';
	import StarIcon from '@lucide/svelte/icons/star';
	import TrashIcon from '@lucide/svelte/icons/trash';
	import EditIcon from '@lucide/svelte/icons/edit';
	import BadgeCheckIcon from '@lucide/svelte/icons/badge-check';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';

	const { Story } = defineMeta({
		title: 'UI/Layout/Item',
		component: Root,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'outline', 'muted'],
				description: 'Visual style variant'
			},
			size: {
				control: { type: 'select' },
				options: ['default', 'sm'],
				description: 'Size of the item'
			}
		},
		args: {
			variant: 'default',
			size: 'default'
		}
	});
</script>

<Story name="Playground">
	<div class="flex w-full max-w-md flex-col gap-6">
		<Item.Root variant="outline">
			<Item.Content>
				<Item.Title>Basic Item</Item.Title>
				<Item.Description>A simple item with title and description.</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Button variant="outline" size="sm">Action</Button>
			</Item.Actions>
		</Item.Root>
		<Item.Root variant="outline" size="sm">
			{#snippet child({ props })}
				<a href="#/" {...props}>
					<Item.Media>
						<BadgeCheckIcon class="size-5" />
					</Item.Media>
					<Item.Content>
						<Item.Title>Your profile has been verified.</Item.Title>
					</Item.Content>
					<Item.Actions>
						<ChevronRightIcon class="size-4" />
					</Item.Actions>
				</a>
			{/snippet}
		</Item.Root>
	</div>
</Story>

<Story name="Default">
	<Item.Root class="w-full max-w-md">
		<Item.Media>
			<Avatar.Root>
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
		</Item.Media>
		<Item.Content>
			<Item.Title>Sofia Davis</Item.Title>
			<Item.Description>sofia@example.com</Item.Description>
		</Item.Content>
	</Item.Root>
</Story>

<Story name="Outline">
	<Item.Root variant="outline" class="w-full max-w-md">
		<Item.Media>
			<Avatar.Root>
				<Avatar.Fallback>JD</Avatar.Fallback>
			</Avatar.Root>
		</Item.Media>
		<Item.Content>
			<Item.Title>John Doe</Item.Title>
			<Item.Description>john@example.com</Item.Description>
		</Item.Content>
	</Item.Root>
</Story>

<Story name="Muted">
	<Item.Root variant="muted" class="w-full max-w-md">
		<Item.Media>
			<Avatar.Root>
				<Avatar.Fallback>AB</Avatar.Fallback>
			</Avatar.Root>
		</Item.Media>
		<Item.Content>
			<Item.Title>Alice Brown</Item.Title>
			<Item.Description>alice@example.com</Item.Description>
		</Item.Content>
	</Item.Root>
</Story>

<Story name="Small">
	<Item.Root size="sm" class="w-full max-w-md">
		<Item.Media>
			<Avatar.Root class="size-8">
				<Avatar.Fallback class="text-xs">SM</Avatar.Fallback>
			</Avatar.Root>
		</Item.Media>
		<Item.Content>
			<Item.Title>Small Item</Item.Title>
			<Item.Description>Compact size</Item.Description>
		</Item.Content>
	</Item.Root>
</Story>

<Story name="AllVariants">
	<div class="flex w-full max-w-md flex-col gap-2">
		<Item.Root variant="default">
			<Item.Content>
				<Item.Title>Default Variant</Item.Title>
				<Item.Description>No background, transparent</Item.Description>
			</Item.Content>
		</Item.Root>
		<Item.Root variant="outline">
			<Item.Content>
				<Item.Title>Outline Variant</Item.Title>
				<Item.Description>With border</Item.Description>
			</Item.Content>
		</Item.Root>
		<Item.Root variant="muted">
			<Item.Content>
				<Item.Title>Muted Variant</Item.Title>
				<Item.Description>With muted background</Item.Description>
			</Item.Content>
		</Item.Root>
	</div>
</Story>

<Story name="WithActions">
	<Item.Root variant="outline" class="w-full max-w-md">
		<Item.Media>
			<FileIcon class="text-muted-foreground size-8" />
		</Item.Media>
		<Item.Content>
			<Item.Title>document.pdf</Item.Title>
			<Item.Description>2.4 MB - Modified 2 hours ago</Item.Description>
		</Item.Content>
		<Item.Actions>
			<Button variant="ghost" size="icon">
				<StarIcon class="size-4" />
			</Button>
			<Button variant="ghost" size="icon">
				<TrashIcon class="size-4" />
			</Button>
		</Item.Actions>
	</Item.Root>
</Story>

<Story name="WithBadge">
	<Item.Root variant="outline" class="w-full max-w-md">
		<Item.Media>
			<Avatar.Root>
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
		</Item.Media>
		<Item.Content>
			<Item.Title class="flex items-center gap-2">
				Sofia Davis
				<Badge variant="secondary">Admin</Badge>
			</Item.Title>
			<Item.Description>sofia@example.com</Item.Description>
		</Item.Content>
	</Item.Root>
</Story>

<Story name="AsLink">
	<Item.Root variant="outline" size="sm" class="w-full max-w-md">
		{#snippet child({ props })}
			<a href="#/" {...props}>
				<Item.Media>
					<BadgeCheckIcon class="size-5" />
				</Item.Media>
				<Item.Content>
					<Item.Title>Your profile has been verified.</Item.Title>
				</Item.Content>
				<Item.Actions>
					<ChevronRightIcon class="size-4" />
				</Item.Actions>
			</a>
		{/snippet}
	</Item.Root>
</Story>

<Story name="FileList">
	<Item.Group class="w-full max-w-md">
		<Item.Root variant="outline">
			<Item.Media>
				<FolderIcon class="size-8 text-blue-500" />
			</Item.Media>
			<Item.Content>
				<Item.Title>Documents</Item.Title>
				<Item.Description>12 items</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Button variant="ghost" size="icon">
					<MoreHorizontalIcon class="size-4" />
				</Button>
			</Item.Actions>
		</Item.Root>
		<Item.Root variant="outline">
			<Item.Media>
				<FolderIcon class="size-8 text-blue-500" />
			</Item.Media>
			<Item.Content>
				<Item.Title>Images</Item.Title>
				<Item.Description>48 items</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Button variant="ghost" size="icon">
					<MoreHorizontalIcon class="size-4" />
				</Button>
			</Item.Actions>
		</Item.Root>
		<Item.Root variant="outline">
			<Item.Media>
				<FileIcon class="text-muted-foreground size-8" />
			</Item.Media>
			<Item.Content>
				<Item.Title>readme.md</Item.Title>
				<Item.Description>4.2 KB</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Button variant="ghost" size="icon">
					<MoreHorizontalIcon class="size-4" />
				</Button>
			</Item.Actions>
		</Item.Root>
	</Item.Group>
</Story>

<Story name="UserList">
	<Item.Group class="w-full max-w-md">
		<Item.Root>
			<Item.Media>
				<Avatar.Root>
					<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
			</Item.Media>
			<Item.Content>
				<Item.Title>Sofia Davis</Item.Title>
				<Item.Description>Product Designer</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Badge>Online</Badge>
			</Item.Actions>
		</Item.Root>
		<Item.Separator />
		<Item.Root>
			<Item.Media>
				<Avatar.Root>
					<Avatar.Fallback>JD</Avatar.Fallback>
				</Avatar.Root>
			</Item.Media>
			<Item.Content>
				<Item.Title>John Doe</Item.Title>
				<Item.Description>Software Engineer</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Badge variant="secondary">Away</Badge>
			</Item.Actions>
		</Item.Root>
		<Item.Separator />
		<Item.Root>
			<Item.Media>
				<Avatar.Root>
					<Avatar.Fallback>AB</Avatar.Fallback>
				</Avatar.Root>
			</Item.Media>
			<Item.Content>
				<Item.Title>Alice Brown</Item.Title>
				<Item.Description>Project Manager</Item.Description>
			</Item.Content>
			<Item.Actions>
				<Badge variant="outline">Offline</Badge>
			</Item.Actions>
		</Item.Root>
	</Item.Group>
</Story>

<Story name="SettingsList">
	<Item.Group class="w-full max-w-md">
		<Item.Root variant="muted" class="hover:bg-muted cursor-pointer">
			<Item.Media>
				<EditIcon class="text-muted-foreground size-5" />
			</Item.Media>
			<Item.Content>
				<Item.Title>Edit Profile</Item.Title>
				<Item.Description>Update your personal information</Item.Description>
			</Item.Content>
		</Item.Root>
		<Item.Root variant="muted" class="hover:bg-muted cursor-pointer">
			<Item.Media>
				<StarIcon class="text-muted-foreground size-5" />
			</Item.Media>
			<Item.Content>
				<Item.Title>Preferences</Item.Title>
				<Item.Description>Customize your experience</Item.Description>
			</Item.Content>
		</Item.Root>
		<Item.Root variant="muted" class="text-destructive hover:bg-muted cursor-pointer">
			<Item.Media>
				<TrashIcon class="size-5" />
			</Item.Media>
			<Item.Content>
				<Item.Title>Delete Account</Item.Title>
				<Item.Description class="text-destructive/70"
					>Permanently delete your account</Item.Description
				>
			</Item.Content>
		</Item.Root>
	</Item.Group>
</Story>
