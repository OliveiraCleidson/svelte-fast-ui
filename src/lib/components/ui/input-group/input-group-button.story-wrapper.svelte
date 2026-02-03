<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import StarIcon from '@lucide/svelte/icons/star';

	import * as InputGroup from './index.js';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';

	let isFavorite = $state(false);

	const clipboard = new UseClipboard();
</script>

<div class="grid w-full max-w-sm gap-6">
	<InputGroup.Root>
		<InputGroup.Input placeholder="https://x.com/shadcn" readonly />
		<InputGroup.Addon align="inline-end">
			<InputGroup.Button
				aria-label="Copy"
				title="Copy"
				size="icon-xs"
				onclick={() => clipboard.copy('https://x.com/shadcn')}
			>
				{#if clipboard.copied}
					<CheckIcon />
				{:else}
					<CopyIcon />
				{/if}
			</InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root class="[--radius:9999px]">
		<InputGroup.Addon class="ps-1.5 text-muted-foreground">
			<InputGroup.Text>https://</InputGroup.Text>
		</InputGroup.Addon>
		<InputGroup.Input />
		<InputGroup.Addon align="inline-end">
			<InputGroup.Button onclick={() => (isFavorite = !isFavorite)} size="icon-xs">
				<StarIcon class={isFavorite ? 'fill-blue-600 stroke-blue-600' : ''} />
			</InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
	<InputGroup.Root>
		<InputGroup.Input placeholder="Type to search..." />
		<InputGroup.Addon align="inline-end">
			<InputGroup.Button variant="secondary">Search</InputGroup.Button>
		</InputGroup.Addon>
	</InputGroup.Root>
</div>
