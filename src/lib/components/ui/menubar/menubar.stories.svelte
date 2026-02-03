<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import * as Menubar from './index.js';
	import Root from './menubar.svelte';

	const { Story } = defineMeta({
		title: 'UI/Overlays/Menubar',
		component: Root,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>File</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>New Incognito Window</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Sub>
					<Menubar.SubTrigger>Share</Menubar.SubTrigger>
					<Menubar.SubContent>
						<Menubar.Item>Email link</Menubar.Item>
						<Menubar.Item>Messages</Menubar.Item>
						<Menubar.Item>Notes</Menubar.Item>
					</Menubar.SubContent>
				</Menubar.Sub>
				<Menubar.Separator />
				<Menubar.Item>
					Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
				</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Edit</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Sub>
					<Menubar.SubTrigger>Find</Menubar.SubTrigger>
					<Menubar.SubContent>
						<Menubar.Item>Search the web</Menubar.Item>
						<Menubar.Separator />
						<Menubar.Item>Find...</Menubar.Item>
						<Menubar.Item>Find Next</Menubar.Item>
						<Menubar.Item>Find Previous</Menubar.Item>
					</Menubar.SubContent>
				</Menubar.Sub>
				<Menubar.Separator />
				<Menubar.Item>Cut</Menubar.Item>
				<Menubar.Item>Copy</Menubar.Item>
				<Menubar.Item>Paste</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>View</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.CheckboxItem>Always Show Bookmarks Bar</Menubar.CheckboxItem>
				<Menubar.CheckboxItem checked>Always Show Full URLs</Menubar.CheckboxItem>
				<Menubar.Separator />
				<Menubar.Item inset>
					Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item inset>
					Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item inset>Hide Sidebar</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Profiles</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.RadioGroup value="benoit">
					<Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
					<Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
					<Menubar.RadioItem value="luis">Luis</Menubar.RadioItem>
				</Menubar.RadioGroup>
				<Menubar.Separator />
				<Menubar.Item inset>Edit...</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item inset>Add Profile...</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</Story>

<Story name="Default">
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>File</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>New</Menubar.Item>
				<Menubar.Item>Open</Menubar.Item>
				<Menubar.Item>Save</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Edit</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>Undo</Menubar.Item>
				<Menubar.Item>Redo</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</Story>

<Story name="TextEditor">
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>File</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					New Document <Menubar.Shortcut>⌘N</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Open... <Menubar.Shortcut>⌘O</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>
					Save <Menubar.Shortcut>⌘S</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>Save As...</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>Export PDF</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>
					Close <Menubar.Shortcut>⌘W</Menubar.Shortcut>
				</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Edit</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>
					Cut <Menubar.Shortcut>⌘X</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Copy <Menubar.Shortcut>⌘C</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Paste <Menubar.Shortcut>⌘V</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>
					Select All <Menubar.Shortcut>⌘A</Menubar.Shortcut>
				</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Format</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					Bold <Menubar.Shortcut>⌘B</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Italic <Menubar.Shortcut>⌘I</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Underline <Menubar.Shortcut>⌘U</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Sub>
					<Menubar.SubTrigger>Heading</Menubar.SubTrigger>
					<Menubar.SubContent>
						<Menubar.Item>Heading 1</Menubar.Item>
						<Menubar.Item>Heading 2</Menubar.Item>
						<Menubar.Item>Heading 3</Menubar.Item>
					</Menubar.SubContent>
				</Menubar.Sub>
				<Menubar.Sub>
					<Menubar.SubTrigger>List</Menubar.SubTrigger>
					<Menubar.SubContent>
						<Menubar.Item>Bulleted</Menubar.Item>
						<Menubar.Item>Numbered</Menubar.Item>
						<Menubar.Item>Checklist</Menubar.Item>
					</Menubar.SubContent>
				</Menubar.Sub>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>View</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.CheckboxItem checked>Show Toolbar</Menubar.CheckboxItem>
				<Menubar.CheckboxItem checked>Show Sidebar</Menubar.CheckboxItem>
				<Menubar.CheckboxItem>Show Word Count</Menubar.CheckboxItem>
				<Menubar.Separator />
				<Menubar.Label>Zoom</Menubar.Label>
				<Menubar.Item>Zoom In</Menubar.Item>
				<Menubar.Item>Zoom Out</Menubar.Item>
				<Menubar.Item>Actual Size</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</Story>

<Story name="ImageEditor">
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>File</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>New Canvas</Menubar.Item>
				<Menubar.Item>Open Image</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Sub>
					<Menubar.SubTrigger>Export As</Menubar.SubTrigger>
					<Menubar.SubContent>
						<Menubar.Item>PNG</Menubar.Item>
						<Menubar.Item>JPEG</Menubar.Item>
						<Menubar.Item>WebP</Menubar.Item>
						<Menubar.Item>SVG</Menubar.Item>
					</Menubar.SubContent>
				</Menubar.Sub>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Image</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>Resize</Menubar.Item>
				<Menubar.Item>Crop</Menubar.Item>
				<Menubar.Item>Rotate</Menubar.Item>
				<Menubar.Item>Flip</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Adjustments</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>Brightness/Contrast</Menubar.Item>
				<Menubar.Item>Hue/Saturation</Menubar.Item>
				<Menubar.Item>Color Balance</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>Auto Enhance</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Filters</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>Blur</Menubar.Item>
				<Menubar.Item>Sharpen</Menubar.Item>
				<Menubar.Item>Noise</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Sub>
					<Menubar.SubTrigger>Stylize</Menubar.SubTrigger>
					<Menubar.SubContent>
						<Menubar.Item>Oil Paint</Menubar.Item>
						<Menubar.Item>Pixelate</Menubar.Item>
						<Menubar.Item>Posterize</Menubar.Item>
					</Menubar.SubContent>
				</Menubar.Sub>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</Story>

<Story name="MusicPlayer">
	<Menubar.Root>
		<Menubar.Menu>
			<Menubar.Trigger>Music</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>About Music</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>Preferences...</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>Hide Music</Menubar.Item>
				<Menubar.Item>Quit Music</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Controls</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					Play <Menubar.Shortcut>Space</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Next <Menubar.Shortcut>⌘→</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Previous <Menubar.Shortcut>⌘←</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Separator />
				<Menubar.CheckboxItem>Shuffle</Menubar.CheckboxItem>
				<Menubar.Sub>
					<Menubar.SubTrigger>Repeat</Menubar.SubTrigger>
					<Menubar.SubContent>
						<Menubar.RadioGroup value="off">
							<Menubar.RadioItem value="off">Off</Menubar.RadioItem>
							<Menubar.RadioItem value="all">All</Menubar.RadioItem>
							<Menubar.RadioItem value="one">One</Menubar.RadioItem>
						</Menubar.RadioGroup>
					</Menubar.SubContent>
				</Menubar.Sub>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Account</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>Sign In...</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>View My Account</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</Story>
