<script lang="ts">
	import { Toggle } from './index.js';
	import BookmarkIcon from '@lucide/svelte/icons/bookmark';
	import ItalicIcon from '@lucide/svelte/icons/italic';
	import BoldIcon from '@lucide/svelte/icons/bold';
	import UnderlineIcon from '@lucide/svelte/icons/underline';

	let {
		variant = 'default'
	}: {
		variant?: 'default' | 'outline' | 'with-text' | 'sizes' | 'disabled' | 'toolbar';
	} = $props();
</script>

{#if variant === 'default'}
	<Toggle
		aria-label="Toggle bookmark"
		size="sm"
		variant="outline"
		class="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
	>
		<BookmarkIcon />
		Bookmark
	</Toggle>
{:else if variant === 'outline'}
	<Toggle variant="outline" aria-label="Toggle italic">
		<ItalicIcon class="size-4" />
	</Toggle>
{:else if variant === 'with-text'}
	<Toggle aria-label="Toggle italic">
		<ItalicIcon class="me-2 size-4" />
		Italic
	</Toggle>
{:else if variant === 'sizes'}
	<div class="flex items-center gap-4">
		<Toggle size="sm" aria-label="Toggle italic">
			<ItalicIcon class="size-4" />
		</Toggle>
		<Toggle size="default" aria-label="Toggle italic">
			<ItalicIcon class="size-4" />
		</Toggle>
		<Toggle size="lg" aria-label="Toggle italic">
			<ItalicIcon class="size-4" />
		</Toggle>
	</div>
{:else if variant === 'disabled'}
	<Toggle aria-label="Toggle underline" disabled>
		<UnderlineIcon class="size-4" />
	</Toggle>
{:else if variant === 'toolbar'}
	<div class="flex items-center gap-1 rounded-md border p-1">
		<Toggle pressed={true} aria-label="Toggle bold">
			<BoldIcon class="size-4" />
		</Toggle>
		<Toggle aria-label="Toggle italic">
			<ItalicIcon class="size-4" />
		</Toggle>
		<Toggle aria-label="Toggle underline">
			<UnderlineIcon class="size-4" />
		</Toggle>
	</div>
{/if}
