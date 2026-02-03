<script lang="ts">
	import {
		Breadcrumb,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator,
		BreadcrumbEllipsis
	} from './index.js';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '../dropdown-menu/index.js';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import SlashIcon from '@lucide/svelte/icons/slash';
	import HomeIcon from '@lucide/svelte/icons/home';

	let {
		variant = 'default'
	}: {
		variant?:
			| 'default'
			| 'playground'
			| 'with-ellipsis'
			| 'custom-separator'
			| 'with-icons'
			| 'file-explorer'
			| 'e-commerce';
	} = $props();
</script>

{#if variant === 'default'}
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Current Page</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
{:else if variant === 'playground'}
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/components">Components</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
{:else if variant === 'with-ellipsis'}
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<DropdownMenu>
					<DropdownMenuTrigger class="flex items-center gap-1">
						<BreadcrumbEllipsis class="size-4" />
						<span class="sr-only">Toggle menu</span>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start">
						<DropdownMenuItem>Documentation</DropdownMenuItem>
						<DropdownMenuItem>Themes</DropdownMenuItem>
						<DropdownMenuItem>GitHub</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/components">Components</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
{:else if variant === 'custom-separator'}
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator>
				<SlashIcon class="size-4" />
			</BreadcrumbSeparator>
			<BreadcrumbItem>
				<BreadcrumbLink href="/products">Products</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator>
				<SlashIcon class="size-4" />
			</BreadcrumbSeparator>
			<BreadcrumbItem>
				<BreadcrumbPage>Details</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
{:else if variant === 'with-icons'}
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/" class="flex items-center gap-1">
					<HomeIcon class="size-4" />
					<span>Home</span>
				</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator>
				<ChevronRightIcon class="size-4" />
			</BreadcrumbSeparator>
			<BreadcrumbItem>
				<BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator>
				<ChevronRightIcon class="size-4" />
			</BreadcrumbSeparator>
			<BreadcrumbItem>
				<BreadcrumbPage>Profile</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
{:else if variant === 'file-explorer'}
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Root</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/users">Users</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/users/john">john</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/users/john/documents">Documents</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>Projects</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
{:else if variant === 'e-commerce'}
	<Breadcrumb>
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Shop</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/electronics">Electronics</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/electronics/phones">Phones</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>iPhone 15 Pro</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>
{/if}
