<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Kbd, KbdGroup } from './index.js';
	import CommandIcon from '@lucide/svelte/icons/command';
	import ArrowUpIcon from '@lucide/svelte/icons/arrow-up';
	import CornerDownLeftIcon from '@lucide/svelte/icons/corner-down-left';

	const { Story } = defineMeta({
		title: 'UI/Primitives/Kbd',
		component: Kbd,
		tags: ['autodocs']
	});
</script>

<Story name="SingleKey">
	<Kbd>K</Kbd>
</Story>

<Story name="ModifierKey">
	<Kbd>Ctrl</Kbd>
</Story>

<Story name="WithIcon">
	<Kbd>
		<CommandIcon />
	</Kbd>
</Story>

<Story name="KeyCombination">
	<KbdGroup>
		<Kbd>
			<CommandIcon />
		</Kbd>
		<Kbd>K</Kbd>
	</KbdGroup>
</Story>

<Story name="CtrlShortcut">
	<KbdGroup>
		<Kbd>Ctrl</Kbd>
		<Kbd>C</Kbd>
	</KbdGroup>
</Story>

<Story name="ComplexShortcut">
	<KbdGroup>
		<Kbd>
			<CommandIcon />
		</Kbd>
		<Kbd>
			<ArrowUpIcon />
		</Kbd>
		<Kbd>P</Kbd>
	</KbdGroup>
</Story>

<Story name="EnterKey">
	<Kbd>
		<CornerDownLeftIcon />
	</Kbd>
</Story>

<Story name="AllExamples">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2">
			<span class="w-32 text-sm text-muted-foreground">Search:</span>
			<KbdGroup>
				<Kbd><CommandIcon /></Kbd>
				<Kbd>K</Kbd>
			</KbdGroup>
		</div>
		<div class="flex items-center gap-2">
			<span class="w-32 text-sm text-muted-foreground">Copy:</span>
			<KbdGroup>
				<Kbd><CommandIcon /></Kbd>
				<Kbd>C</Kbd>
			</KbdGroup>
		</div>
		<div class="flex items-center gap-2">
			<span class="w-32 text-sm text-muted-foreground">Paste:</span>
			<KbdGroup>
				<Kbd><CommandIcon /></Kbd>
				<Kbd>V</Kbd>
			</KbdGroup>
		</div>
		<div class="flex items-center gap-2">
			<span class="w-32 text-sm text-muted-foreground">Save:</span>
			<KbdGroup>
				<Kbd><CommandIcon /></Kbd>
				<Kbd>S</Kbd>
			</KbdGroup>
		</div>
		<div class="flex items-center gap-2">
			<span class="w-32 text-sm text-muted-foreground">Submit:</span>
			<Kbd><CornerDownLeftIcon /></Kbd>
		</div>
	</div>
</Story>
