<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as HoverCard from './index.js';
	import Root from './hover-card.svelte';
	import { Button } from '../button/index.js';
	import * as Avatar from '../avatar/index.js';
	import CalendarDaysIcon from '@lucide/svelte/icons/calendar-days';

	const { Story } = defineMeta({
		title: 'UI/Overlays/HoverCard',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<HoverCard.Root>
		<HoverCard.Trigger
			href="https://github.com/sveltejs"
			target="_blank"
			rel="noreferrer noopener"
			class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
		>
			@sveltejs
		</HoverCard.Trigger>
		<HoverCard.Content class="w-80">
			<div class="flex justify-between space-x-4">
				<Avatar.Root>
					<Avatar.Image src="https://github.com/sveltejs.png" />
					<Avatar.Fallback>SK</Avatar.Fallback>
				</Avatar.Root>
				<div class="space-y-1">
					<h4 class="text-sm font-semibold">@sveltejs</h4>
					<p class="text-sm">Cybernetically enhanced web apps.</p>
					<div class="flex items-center pt-2">
						<CalendarDaysIcon class="me-2 size-4 opacity-70" />
						<span class="text-muted-foreground text-xs"> Joined September 2022 </span>
					</div>
				</div>
			</div>
		</HoverCard.Content>
	</HoverCard.Root>
</Story>

<Story name="Default">
	<HoverCard.Root>
		<HoverCard.Trigger
			class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
		>
			Hover me
		</HoverCard.Trigger>
		<HoverCard.Content>
			<p class="text-sm">This is a hover card with some content.</p>
		</HoverCard.Content>
	</HoverCard.Root>
</Story>

<Story name="UserProfile">
	<HoverCard.Root>
		<HoverCard.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="ghost" class="size-10 rounded-full p-0">
					<Avatar.Root>
						<Avatar.Image src="https://github.com/shadcn.png" />
						<Avatar.Fallback>JD</Avatar.Fallback>
					</Avatar.Root>
				</Button>
			{/snippet}
		</HoverCard.Trigger>
		<HoverCard.Content class="w-80">
			<div class="flex justify-between space-x-4">
				<Avatar.Root>
					<Avatar.Image src="https://github.com/shadcn.png" />
					<Avatar.Fallback>JD</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex-1 space-y-1">
					<h4 class="text-sm font-semibold">John Doe</h4>
					<p class="text-muted-foreground text-sm">john@example.com</p>
					<p class="text-sm">
						Senior Developer at Acme Inc. Working on building great user experiences.
					</p>
					<div class="text-muted-foreground flex gap-4 pt-2 text-xs">
						<span><strong class="text-foreground">234</strong> Following</span>
						<span><strong class="text-foreground">1.2k</strong> Followers</span>
					</div>
				</div>
			</div>
		</HoverCard.Content>
	</HoverCard.Root>
</Story>

<Story name="ProductPreview">
	<HoverCard.Root>
		<HoverCard.Trigger>
			{#snippet child({ props })}
				<Button {...props} variant="outline">View Product</Button>
			{/snippet}
		</HoverCard.Trigger>
		<HoverCard.Content class="w-80">
			<div class="space-y-3">
				<div class="bg-muted h-32 rounded-md"></div>
				<div>
					<h4 class="text-sm font-semibold">Premium Headphones</h4>
					<p class="text-muted-foreground text-sm">
						High-quality wireless headphones with noise cancellation.
					</p>
				</div>
				<div class="flex items-center justify-between">
					<span class="text-lg font-bold">$299.99</span>
					<span class="text-xs text-green-600">In Stock</span>
				</div>
			</div>
		</HoverCard.Content>
	</HoverCard.Root>
</Story>

<Story name="LinkPreview">
	<p class="text-sm">
		Check out the
		<HoverCard.Root>
			<HoverCard.Trigger
				href="https://svelte.dev"
				target="_blank"
				rel="noreferrer noopener"
				class="text-primary underline-offset-4 hover:underline"
			>
				Svelte documentation
			</HoverCard.Trigger>
			<HoverCard.Content class="w-80">
				<div class="space-y-2">
					<h4 class="text-sm font-semibold">Svelte Documentation</h4>
					<p class="text-muted-foreground text-sm">
						The official Svelte documentation. Learn how to build cybernetically enhanced web
						applications.
					</p>
					<p class="text-muted-foreground text-xs">svelte.dev</p>
				</div>
			</HoverCard.Content>
		</HoverCard.Root>
		for more information.
	</p>
</Story>

<Story name="TeamMember">
	<div class="flex gap-2">
		{#each [{ name: 'Alice', role: 'Designer' }, { name: 'Bob', role: 'Developer' }, { name: 'Carol', role: 'Manager' }] as member}
			<HoverCard.Root>
				<HoverCard.Trigger>
					{#snippet child({ props })}
						<Button {...props} variant="ghost" class="size-10 rounded-full p-0">
							<Avatar.Root>
								<Avatar.Fallback>{member.name[0]}</Avatar.Fallback>
							</Avatar.Root>
						</Button>
					{/snippet}
				</HoverCard.Trigger>
				<HoverCard.Content class="w-64">
					<div class="flex gap-3">
						<Avatar.Root>
							<Avatar.Fallback>{member.name[0]}</Avatar.Fallback>
						</Avatar.Root>
						<div>
							<h4 class="text-sm font-semibold">{member.name}</h4>
							<p class="text-muted-foreground text-sm">{member.role}</p>
						</div>
					</div>
				</HoverCard.Content>
			</HoverCard.Root>
		{/each}
	</div>
</Story>
