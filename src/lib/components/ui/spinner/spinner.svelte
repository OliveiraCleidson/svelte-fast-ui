<script lang="ts">
	import { cn } from '$lib/utils.js';
	import Loader2Icon from '@lucide/svelte/icons/loader-2';

	interface Props {
		class?: string;
		size?: number | string;
		color?: string;
		strokeWidth?: number | string;
		[key: string]: unknown;
	}

	let { class: className, size = 16, ...restProps }: Props = $props();
</script>

<Loader2Icon
	role="status"
	aria-label="Loading"
	class={cn('size-4 animate-spin', className)}
	{size}
	{...restProps}
/>
