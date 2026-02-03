<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './index.js';
	import { Button } from '../button/index.js';
	import BoldIcon from '@lucide/svelte/icons/bold';
	import ItalicIcon from '@lucide/svelte/icons/italic';
	import UnderlineIcon from '@lucide/svelte/icons/underline';
	import AlignLeftIcon from '@lucide/svelte/icons/align-left';
	import AlignCenterIcon from '@lucide/svelte/icons/align-center';
	import AlignRightIcon from '@lucide/svelte/icons/align-right';
	import ChevronDownIcon from '@lucide/svelte/icons/chevron-down';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import MinusIcon from '@lucide/svelte/icons/minus';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import DownloadIcon from '@lucide/svelte/icons/download';

	const { Story } = defineMeta({
		title: 'UI/Composite/ButtonGroup',
		component: ButtonGroup,
		tags: ['autodocs']
	});
</script>

<Story name="Playground">
	<ButtonGroup>
		<Button variant="outline">Left</Button>
		<Button variant="outline">Center</Button>
		<Button variant="outline">Right</Button>
	</ButtonGroup>
</Story>

<Story name="Default">
	<ButtonGroup>
		<Button variant="outline">Button 1</Button>
		<Button variant="outline">Button 2</Button>
		<Button variant="outline">Button 3</Button>
	</ButtonGroup>
</Story>

<Story name="TextFormatting">
	<ButtonGroup>
		<Button variant="outline" size="icon">
			<BoldIcon class="size-4" />
		</Button>
		<Button variant="outline" size="icon">
			<ItalicIcon class="size-4" />
		</Button>
		<Button variant="outline" size="icon">
			<UnderlineIcon class="size-4" />
		</Button>
	</ButtonGroup>
</Story>

<Story name="Alignment">
	<ButtonGroup>
		<Button variant="outline" size="icon">
			<AlignLeftIcon class="size-4" />
		</Button>
		<Button variant="outline" size="icon">
			<AlignCenterIcon class="size-4" />
		</Button>
		<Button variant="outline" size="icon">
			<AlignRightIcon class="size-4" />
		</Button>
	</ButtonGroup>
</Story>

<Story name="WithSeparator">
	<ButtonGroup>
		<Button variant="outline" size="icon">
			<BoldIcon class="size-4" />
		</Button>
		<Button variant="outline" size="icon">
			<ItalicIcon class="size-4" />
		</Button>
		<ButtonGroupSeparator />
		<Button variant="outline" size="icon">
			<AlignLeftIcon class="size-4" />
		</Button>
		<Button variant="outline" size="icon">
			<AlignCenterIcon class="size-4" />
		</Button>
		<Button variant="outline" size="icon">
			<AlignRightIcon class="size-4" />
		</Button>
	</ButtonGroup>
</Story>

<Story name="SplitButton">
	<ButtonGroup>
		<Button>Save</Button>
		<Button variant="outline" size="icon">
			<ChevronDownIcon class="size-4" />
		</Button>
	</ButtonGroup>
</Story>

<Story name="Counter">
	<ButtonGroup>
		<Button variant="outline" size="icon">
			<MinusIcon class="size-4" />
		</Button>
		<ButtonGroupText class="min-w-[3rem] text-center">10</ButtonGroupText>
		<Button variant="outline" size="icon">
			<PlusIcon class="size-4" />
		</Button>
	</ButtonGroup>
</Story>

<Story name="Actions">
	<ButtonGroup>
		<Button variant="outline">
			<CopyIcon class="mr-2 size-4" />
			Copy
		</Button>
		<Button variant="outline">
			<DownloadIcon class="mr-2 size-4" />
			Download
		</Button>
	</ButtonGroup>
</Story>

<Story name="Sizes">
	<div class="flex flex-col gap-4">
		<ButtonGroup>
			<Button variant="outline" size="sm">Small</Button>
			<Button variant="outline" size="sm">Group</Button>
			<Button variant="outline" size="sm">Buttons</Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button variant="outline">Default</Button>
			<Button variant="outline">Group</Button>
			<Button variant="outline">Buttons</Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button variant="outline" size="lg">Large</Button>
			<Button variant="outline" size="lg">Group</Button>
			<Button variant="outline" size="lg">Buttons</Button>
		</ButtonGroup>
	</div>
</Story>

<Story name="Variants">
	<div class="flex flex-col gap-4">
		<ButtonGroup>
			<Button>Primary</Button>
			<Button>Group</Button>
			<Button>Buttons</Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button variant="secondary">Secondary</Button>
			<Button variant="secondary">Group</Button>
			<Button variant="secondary">Buttons</Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button variant="destructive">Destructive</Button>
			<Button variant="destructive">Group</Button>
			<Button variant="destructive">Buttons</Button>
		</ButtonGroup>
	</div>
</Story>
