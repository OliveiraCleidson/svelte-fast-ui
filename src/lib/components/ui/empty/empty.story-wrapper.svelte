<script lang="ts">
	import * as Empty from './index.js';
	import { Button } from '../button/index.js';
	import * as Avatar from '../avatar/index.js';
	import * as InputGroup from '../input-group/index.js';
	import * as Kbd from '../kbd/index.js';
	import FolderCodeIcon from '@lucide/svelte/icons/folder-code';
	import CloudIcon from '@lucide/svelte/icons/cloud';
	import BellIcon from '@lucide/svelte/icons/bell';
	import RefreshCcwIcon from '@lucide/svelte/icons/refresh-ccw';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SearchIcon from '@lucide/svelte/icons/search';

	let {
		variant = 'default'
	}: {
		variant?: 'default' | 'outline' | 'background' | 'avatar' | 'avatar-group' | 'input-group';
	} = $props();
</script>

{#if variant === 'default'}
	<Empty.Root>
		<Empty.Header>
			<Empty.Media variant="icon">
				<FolderCodeIcon />
			</Empty.Media>
			<Empty.Title>No data</Empty.Title>
			<Empty.Description>No data found</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<Button>Add data</Button>
		</Empty.Content>
	</Empty.Root>
{:else if variant === 'outline'}
	<Empty.Root class="border border-dashed">
		<Empty.Header>
			<Empty.Media variant="icon">
				<CloudIcon />
			</Empty.Media>
			<Empty.Title>Cloud Storage Empty</Empty.Title>
			<Empty.Description>
				Upload files to your cloud storage to access them anywhere.
			</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<Button variant="outline" size="sm">Upload Files</Button>
		</Empty.Content>
	</Empty.Root>
{:else if variant === 'background'}
	<Empty.Root class="h-full bg-gradient-to-b from-muted/50 from-30% to-background">
		<Empty.Header>
			<Empty.Media variant="icon">
				<BellIcon />
			</Empty.Media>
			<Empty.Title>No Notifications</Empty.Title>
			<Empty.Description>
				You're all caught up. New notifications will appear here.
			</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<Button variant="outline" size="sm">
				<RefreshCcwIcon />
				Refresh
			</Button>
		</Empty.Content>
	</Empty.Root>
{:else if variant === 'avatar'}
	<Empty.Root>
		<Empty.Header>
			<Empty.Media variant="default">
				<Avatar.Root class="size-12">
					<Avatar.Image src="https://github.com/shadcn.png" class="grayscale" />
					<Avatar.Fallback>LR</Avatar.Fallback>
				</Avatar.Root>
			</Empty.Media>
			<Empty.Title>User Offline</Empty.Title>
			<Empty.Description>
				This user is currently offline. You can leave a message to notify them or try again later.
			</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<Button size="sm">Leave Message</Button>
		</Empty.Content>
	</Empty.Root>
{:else if variant === 'avatar-group'}
	<Empty.Root class="flex-none border">
		<Empty.Header>
			<Empty.Media>
				<div class="flex -space-x-2 *:size-12 *:ring-2 *:ring-background *:grayscale">
					<Avatar.Root>
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
					<Avatar.Root>
						<Avatar.Image src="https://github.com/maxleiter.png" alt="@maxleiter" />
						<Avatar.Fallback>LR</Avatar.Fallback>
					</Avatar.Root>
					<Avatar.Root>
						<Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
						<Avatar.Fallback>ER</Avatar.Fallback>
					</Avatar.Root>
				</div>
			</Empty.Media>
			<Empty.Title>No Team Members</Empty.Title>
			<Empty.Description>Invite your team to collaborate on this project.</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<Button size="sm">
				<PlusIcon />
				Invite Members
			</Button>
		</Empty.Content>
	</Empty.Root>
{:else if variant === 'input-group'}
	<Empty.Root>
		<Empty.Header>
			<Empty.Title>404 - Not Found</Empty.Title>
			<Empty.Description>
				The page you're looking for doesn't exist. Try searching for what you need below.
			</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<InputGroup.Root class="sm:w-3/4">
				<InputGroup.Input placeholder="Try searching for pages..." />
				<InputGroup.Addon>
					<SearchIcon />
				</InputGroup.Addon>
				<InputGroup.Addon align="inline-end">
					<Kbd.Root>/</Kbd.Root>
				</InputGroup.Addon>
			</InputGroup.Root>
			<Empty.Description>
				Need help? <a href="#/">Contact support</a>
			</Empty.Description>
		</Empty.Content>
	</Empty.Root>
{/if}
