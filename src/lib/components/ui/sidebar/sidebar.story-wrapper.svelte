<script lang="ts">
	import * as Sidebar from './index.js';
	import * as Collapsible from '../collapsible/index.js';
	import { Button } from '../button/index.js';
	import * as Avatar from '../avatar/index.js';
	import * as DropdownMenu from '../dropdown-menu/index.js';
	import { Separator } from '../separator/index.js';
	import * as Breadcrumb from '../breadcrumb/index.js';
	import CommandIcon from '@lucide/svelte/icons/command';
	import SquareTerminalIcon from '@lucide/svelte/icons/square-terminal';
	import BotIcon from '@lucide/svelte/icons/bot';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import Settings2Icon from '@lucide/svelte/icons/settings-2';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import SidebarIcon from '@lucide/svelte/icons/sidebar';
	import type { Component } from 'svelte';

	let {
		variant = 'sidebar',
		side = 'left',
		collapsible = 'offcanvas'
	}: {
		variant?: 'sidebar' | 'floating' | 'inset';
		side?: 'left' | 'right';
		collapsible?: 'offcanvas' | 'icon' | 'none';
	} = $props();

	const navMain: {
		title: string;
		url: string;
		icon: Component;
		isActive?: boolean;
		items?: { title: string; url: string }[];
	}[] = [
		{
			title: 'Playground',
			url: '#',
			icon: SquareTerminalIcon,
			isActive: true,
			items: [
				{ title: 'History', url: '#' },
				{ title: 'Starred', url: '#' },
				{ title: 'Settings', url: '#' }
			]
		},
		{
			title: 'Models',
			url: '#',
			icon: BotIcon,
			items: [
				{ title: 'Genesis', url: '#' },
				{ title: 'Explorer', url: '#' },
				{ title: 'Quantum', url: '#' }
			]
		},
		{
			title: 'Documentation',
			url: '#',
			icon: BookOpenIcon,
			items: [
				{ title: 'Introduction', url: '#' },
				{ title: 'Get Started', url: '#' },
				{ title: 'Tutorials', url: '#' }
			]
		},
		{
			title: 'Settings',
			url: '#',
			icon: Settings2Icon,
			items: [
				{ title: 'General', url: '#' },
				{ title: 'Team', url: '#' },
				{ title: 'Billing', url: '#' }
			]
		}
	];

	const user = {
		name: 'John Doe',
		email: 'john@example.com',
		avatar: ''
	};
</script>

<div class="h-[600px] w-full overflow-hidden rounded-lg border">
	<Sidebar.Provider class="flex h-full w-full">
		<Sidebar.Root {variant} {side} {collapsible}>
			<Sidebar.Header>
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Sidebar.MenuButton size="lg">
							<div
								class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
							>
								<CommandIcon class="size-4" />
							</div>
							<div class="grid flex-1 text-start text-sm leading-tight">
								<span class="truncate font-medium">Acme Inc</span>
								<span class="truncate text-xs">Enterprise</span>
							</div>
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.Header>

			<Sidebar.Content>
				<Sidebar.Group>
					<Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
					<Sidebar.Menu>
						{#each navMain as item (item.title)}
							<Collapsible.Root open={item.isActive}>
								<Sidebar.MenuItem>
									<Sidebar.MenuButton tooltipContent={item.title}>
										<item.icon />
										<span>{item.title}</span>
									</Sidebar.MenuButton>
									{#if item.items?.length}
										<Collapsible.Trigger>
											{#snippet child({ props })}
												<Sidebar.MenuAction {...props} class="data-[state=open]:rotate-90">
													<ChevronRightIcon />
													<span class="sr-only">Toggle</span>
												</Sidebar.MenuAction>
											{/snippet}
										</Collapsible.Trigger>
										<Collapsible.Content>
											<Sidebar.MenuSub>
												{#each item.items as subItem (subItem.title)}
													<Sidebar.MenuSubItem>
														<Sidebar.MenuSubButton>
															<a href={subItem.url}>
																<span>{subItem.title}</span>
															</a>
														</Sidebar.MenuSubButton>
													</Sidebar.MenuSubItem>
												{/each}
											</Sidebar.MenuSub>
										</Collapsible.Content>
									{/if}
								</Sidebar.MenuItem>
							</Collapsible.Root>
						{/each}
					</Sidebar.Menu>
				</Sidebar.Group>
			</Sidebar.Content>

			<Sidebar.Footer>
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								{#snippet child({ props })}
									<Sidebar.MenuButton
										size="lg"
										class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
										{...props}
									>
										<Avatar.Root class="size-8 rounded-lg">
											<Avatar.Fallback class="rounded-lg">JD</Avatar.Fallback>
										</Avatar.Root>
										<div class="grid flex-1 text-start text-sm leading-tight">
											<span class="truncate font-medium">{user.name}</span>
											<span class="truncate text-xs">{user.email}</span>
										</div>
										<ChevronsUpDownIcon class="ms-auto size-4" />
									</Sidebar.MenuButton>
								{/snippet}
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-56 rounded-lg" side="top" align="end" sideOffset={4}>
								<DropdownMenu.Label class="p-0 font-normal">
									<div class="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
										<Avatar.Root class="size-8 rounded-lg">
											<Avatar.Fallback class="rounded-lg">JD</Avatar.Fallback>
										</Avatar.Root>
										<div class="grid flex-1 text-start text-sm leading-tight">
											<span class="truncate font-medium">{user.name}</span>
											<span class="truncate text-xs">{user.email}</span>
										</div>
									</div>
								</DropdownMenu.Label>
								<DropdownMenu.Separator />
								<DropdownMenu.Item>
									<LogOutIcon />
									Log out
								</DropdownMenu.Item>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.Footer>

			<Sidebar.Rail />
		</Sidebar.Root>

		<Sidebar.Inset>
			<header class="flex h-14 items-center gap-2 border-b px-4">
				<Sidebar.Trigger>
					<SidebarIcon class="size-4" />
				</Sidebar.Trigger>
				<Separator orientation="vertical" class="h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Overview</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<div class="grid auto-rows-min gap-4 md:grid-cols-3">
					<div class="aspect-video rounded-xl bg-muted/50"></div>
					<div class="aspect-video rounded-xl bg-muted/50"></div>
					<div class="aspect-video rounded-xl bg-muted/50"></div>
				</div>
				<div class="min-h-[200px] flex-1 rounded-xl bg-muted/50"></div>
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
</div>
