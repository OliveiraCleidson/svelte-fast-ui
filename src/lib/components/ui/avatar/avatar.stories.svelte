<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Avatar from './index.js';
	import Root from './avatar.svelte';

	const { Story } = defineMeta({
		title: 'UI/Layout/Avatar',
		component: Root,
		tags: ['autodocs'],
		argTypes: {
			class: {
				control: { type: 'select' },
				options: ['size-8', 'size-10', 'size-12', 'size-16', 'size-20'],
				description: 'Size of the avatar'
			}
		},
		args: {
			class: 'size-10'
		}
	});
</script>

<Story name="Playground">
	<div class="flex flex-row flex-wrap items-center gap-12">
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="rounded-lg">
			<Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
			<Avatar.Fallback>ER</Avatar.Fallback>
		</Avatar.Root>
		<div
			class="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale"
		>
			<Avatar.Root>
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root>
				<Avatar.Image src="https://github.com/leerob.png" alt="@leerob" />
				<Avatar.Fallback>LR</Avatar.Fallback>
			</Avatar.Root>
			<Avatar.Root>
				<Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
				<Avatar.Fallback>ER</Avatar.Fallback>
			</Avatar.Root>
		</div>
	</div>
</Story>

<Story name="WithImage">
	<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Fallback">
	<Avatar.Root>
		<Avatar.Image src="https://invalid-url.com/broken.png" alt="User" />
		<Avatar.Fallback>JD</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="FallbackOnly">
	<Avatar.Root>
		<Avatar.Fallback>AB</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Rounded">
	<div class="flex items-center gap-4">
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="rounded-lg">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="rounded-md">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="rounded-sm">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
	</div>
</Story>

<Story name="AllSizes">
	<div class="flex items-center gap-4">
		<Avatar.Root class="size-6">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback class="text-[10px]">CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="size-8">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback class="text-xs">CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="size-10">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="size-12">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="size-16">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback class="text-lg">CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root class="size-20">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback class="text-xl">CN</Avatar.Fallback>
		</Avatar.Root>
	</div>
</Story>

<Story name="FallbackColors">
	<div class="flex items-center gap-4">
		<Avatar.Root>
			<Avatar.Fallback class="bg-red-500 text-white">AB</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root>
			<Avatar.Fallback class="bg-green-500 text-white">CD</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root>
			<Avatar.Fallback class="bg-blue-500 text-white">EF</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root>
			<Avatar.Fallback class="bg-purple-500 text-white">GH</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root>
			<Avatar.Fallback class="bg-orange-500 text-white">IJ</Avatar.Fallback>
		</Avatar.Root>
	</div>
</Story>

<Story name="AvatarGroup">
	<div class="flex -space-x-3 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="User 1" />
			<Avatar.Fallback>U1</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root>
			<Avatar.Image src="https://github.com/leerob.png" alt="User 2" />
			<Avatar.Fallback>U2</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root>
			<Avatar.Image src="https://github.com/evilrabbit.png" alt="User 3" />
			<Avatar.Fallback>U3</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root>
			<Avatar.Fallback class="bg-muted text-xs text-muted-foreground">+5</Avatar.Fallback>
		</Avatar.Root>
	</div>
</Story>

<Story name="UserCard">
	<div class="flex w-full max-w-sm items-center gap-3 rounded-lg border p-4">
		<Avatar.Root class="size-12">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<div class="min-w-0 flex-1">
			<p class="truncate font-medium">shadcn</p>
			<p class="truncate text-sm text-muted-foreground">shadcn@example.com</p>
		</div>
	</div>
</Story>

<Story name="CommentThread">
	<div class="w-full max-w-md space-y-4">
		<div class="flex gap-3">
			<Avatar.Root class="size-8 shrink-0">
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex-1 space-y-1">
				<div class="flex items-center gap-2">
					<span class="text-sm font-medium">shadcn</span>
					<span class="text-xs text-muted-foreground">2 hours ago</span>
				</div>
				<p class="text-sm">This is a great example of an avatar in a comment thread.</p>
			</div>
		</div>
		<div class="flex gap-3">
			<Avatar.Root class="size-8 shrink-0">
				<Avatar.Fallback class="bg-blue-500 text-xs text-white">JD</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex-1 space-y-1">
				<div class="flex items-center gap-2">
					<span class="text-sm font-medium">John Doe</span>
					<span class="text-xs text-muted-foreground">1 hour ago</span>
				</div>
				<p class="text-sm">I agree! The fallback colors are really nice too.</p>
			</div>
		</div>
	</div>
</Story>
