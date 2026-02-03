<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import {
		ContextMenu,
		ContextMenuContent,
		ContextMenuItem,
		ContextMenuTrigger,
		ContextMenuSeparator,
		ContextMenuShortcut,
		ContextMenuSub,
		ContextMenuSubContent,
		ContextMenuSubTrigger,
		ContextMenuCheckboxItem,
		ContextMenuRadioGroup,
		ContextMenuRadioItem,
		ContextMenuLabel
	} from './index.js';

	const { Story } = defineMeta({
		title: 'UI/Overlays/ContextMenu',
		component: ContextMenu,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<ContextMenu>
		<ContextMenuTrigger
			class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
		>
			Right click here
		</ContextMenuTrigger>
		<ContextMenuContent class="w-64">
			<ContextMenuItem>
				Back
				<ContextMenuShortcut>⌘[</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem disabled>
				Forward
				<ContextMenuShortcut>⌘]</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem>
				Reload
				<ContextMenuShortcut>⌘R</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuSub>
				<ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
				<ContextMenuSubContent class="w-48">
					<ContextMenuItem>
						Save Page As...
						<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>Create Shortcut...</ContextMenuItem>
					<ContextMenuItem>Name Window...</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem>Developer Tools</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>
			<ContextMenuSeparator />
			<ContextMenuCheckboxItem checked>
				Show Bookmarks Bar
				<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
			</ContextMenuCheckboxItem>
			<ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
			<ContextMenuSeparator />
			<ContextMenuRadioGroup value="pedro">
				<ContextMenuLabel>People</ContextMenuLabel>
				<ContextMenuSeparator />
				<ContextMenuRadioItem value="pedro">Caio Oliveira</ContextMenuRadioItem>
				<ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
			</ContextMenuRadioGroup>
		</ContextMenuContent>
	</ContextMenu>
</Story>

<Story name="Default">
	<ContextMenu>
		<ContextMenuTrigger
			class="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm"
		>
			Right click
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuItem>Cut</ContextMenuItem>
			<ContextMenuItem>Copy</ContextMenuItem>
			<ContextMenuItem>Paste</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
</Story>

<Story name="FileExplorer">
	<ContextMenu>
		<ContextMenuTrigger
			class="bg-muted/50 flex h-[150px] w-[300px] items-center justify-center rounded-md border text-sm"
		>
			<div class="text-center">
				<div class="mb-2 text-4xl">📁</div>
				<span>Documents</span>
			</div>
		</ContextMenuTrigger>
		<ContextMenuContent class="w-48">
			<ContextMenuItem>
				Open
				<ContextMenuShortcut>↵</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem>Open in New Tab</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>
				Cut
				<ContextMenuShortcut>⌘X</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem>
				Copy
				<ContextMenuShortcut>⌘C</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Rename</ContextMenuItem>
			<ContextMenuItem class="text-destructive">Delete</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Properties</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
</Story>

<Story name="TextEditor">
	<ContextMenu>
		<ContextMenuTrigger
			class="flex h-[150px] w-[300px] items-center justify-center rounded-md border p-4 text-sm"
		>
			<p class="text-muted-foreground">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Right-click to see formatting
				options.
			</p>
		</ContextMenuTrigger>
		<ContextMenuContent class="w-48">
			<ContextMenuItem>
				Cut
				<ContextMenuShortcut>⌘X</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem>
				Copy
				<ContextMenuShortcut>⌘C</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem>
				Paste
				<ContextMenuShortcut>⌘V</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuSub>
				<ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
				<ContextMenuSubContent>
					<ContextMenuItem>Bold</ContextMenuItem>
					<ContextMenuItem>Italic</ContextMenuItem>
					<ContextMenuItem>Underline</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem>Clear Formatting</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>
			<ContextMenuSeparator />
			<ContextMenuItem>Select All</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
</Story>

<Story name="ImageContext">
	<ContextMenu>
		<ContextMenuTrigger
			class="flex h-[200px] w-[300px] items-center justify-center rounded-md border bg-gradient-to-br from-purple-500 to-pink-500"
		>
			<span class="font-medium text-white">Image Preview</span>
		</ContextMenuTrigger>
		<ContextMenuContent class="w-48">
			<ContextMenuItem>View Image</ContextMenuItem>
			<ContextMenuItem>Copy Image</ContextMenuItem>
			<ContextMenuItem>Copy Image Address</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Save Image As...</ContextMenuItem>
			<ContextMenuItem>Set as Wallpaper</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Open in New Tab</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
</Story>

<Story name="TableRow">
	<div class="rounded-md border">
		<div class="bg-muted grid grid-cols-3 border-b p-2 text-sm font-medium">
			<span>Name</span>
			<span>Status</span>
			<span>Amount</span>
		</div>
		{#each ['John Doe', 'Jane Smith', 'Bob Wilson'] as name, i}
			<ContextMenu>
				<ContextMenuTrigger
					class="hover:bg-muted/50 grid grid-cols-3 border-b p-2 text-sm last:border-0"
				>
					<span>{name}</span>
					<span class="text-green-600">Active</span>
					<span>${(i + 1) * 100}.00</span>
				</ContextMenuTrigger>
				<ContextMenuContent>
					<ContextMenuItem>View Details</ContextMenuItem>
					<ContextMenuItem>Edit</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem>Duplicate</ContextMenuItem>
					<ContextMenuSeparator />
					<ContextMenuItem class="text-destructive">Delete</ContextMenuItem>
				</ContextMenuContent>
			</ContextMenu>
		{/each}
	</div>
</Story>
